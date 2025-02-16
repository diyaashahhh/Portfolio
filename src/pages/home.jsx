import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';

import Island from '../models/island';
import Plane from '../models/plane';
import Sky from '../models/Sky';


const Home = () => {
  const [isrotating, setisrotating] = useState(false);
  const [screenConfig, setScreenConfig] = useState({});
  const [currentStage,setCurrentStage] = useState(1);

  const adjustislandforscreensize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    let rotation = [-0.1, -0.2, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, -2, 0];
    } else {
      screenScale = [-1, 1, 1];
      screenPosition = [-3, -23, -33];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustplaneforscreensize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenConfig({
        plane: adjustplaneforscreensize(),
        island: adjustislandforscreensize(),
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { plane, island } = screenConfig;
  const [planescale, planePosition] = adjustplaneforscreensize();
  const [islandscale, islandposition, islandrotation] = adjustislandforscreensize();

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isrotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ position: [0, 5, 15], fov: 75, near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 5, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          
          
          <Sky isrotating={isrotating}/>
          <Island
            position={islandposition}
            scale={islandscale}
            rotation={islandrotation}
            isrotating={isrotating}
            setisrotating={setisrotating}
            setCurrentStage={setCurrentStage}
          />
          
          <Plane
            isrotating={isrotating}
            planeScale={planescale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home;
