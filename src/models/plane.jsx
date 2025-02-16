import { useEffect, useRef } from 'react';
import planescene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({ isrotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planescene);
  const { actions } = useAnimations(animations, ref);
  console.log(animations);
  console.log(isrotating);

  useEffect(() => {
    if (actions && actions['Take 001']) {
     
     
      if (isrotating) {
        actions['Take 001'].play();
      } else {
        actions['Take 001'].stop();
      }
    }
  }, [actions, isrotating]);

  return (
    <mesh {...props} position={[0, -4, -4]} scale={[5, 5, 5]} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
