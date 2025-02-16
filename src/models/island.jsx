import { useRef, useEffect, useCallback } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import islandScene from "../assets/3d/island.glb";

const Island = ({ isrotating, setisrotating, setCurrentStage, ...props }) => {
  const islandref = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationspeed = useRef(0);
  const dampingfactor = 0.95;

  const handlePointerDown = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setisrotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();

      if (isrotating) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const delta = (clientX - lastX.current) / viewport.width;

        islandref.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationspeed.current = delta * 0.01 * Math.PI;
      }
    },
    [isrotating, viewport.width]
  );

  const handlePointerUp = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  // Handle keydown events
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        if (!isrotating) setisrotating(true);
        islandref.current.rotation.y += 0.005 * Math.PI;
        rotationspeed.current = 0.007;
      } else if (event.key === "ArrowRight") {
        if (!isrotating) setisrotating(true);
        islandref.current.rotation.y -= 0.005 * Math.PI;
        rotationspeed.current = -0.007;
      }
    },
    [isrotating]
  );

  // Handle keyup events
  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setisrotating(false);
      }
    },
    []
  );

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp]);

  useFrame(() => {
    var normalizedRotation = 0;

    if (!isrotating) {
      rotationspeed.current *= dampingfactor;

      if (Math.abs(rotationspeed.current) < 0.001) {
        rotationspeed.current = 0;
      }

      islandref.current.rotation.y += rotationspeed.current;
    } else {
      const rotation = islandref.current.rotation.y;
      normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    }

    // Ensure setCurrentStage is defined before calling it
    if (typeof setCurrentStage === "function") {
      const totalStages = 4; // Adjust based on the number of stages
      const segmentSize = (2 * Math.PI) / totalStages; // Divide full rotation into equal parts
    
      // Normalize rotation between 0 and 2π
      const rotation = ((islandref.current.rotation.y % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    
      // Determine the current stage based on rotation
      const currentStage = Math.floor(rotation / segmentSize) + 1;
      
      setCurrentStage(currentStage);
    }
  });    

  return (
    <a.group ref={islandref} {...props}>
      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </a.group>
  );
};

export default Island;
