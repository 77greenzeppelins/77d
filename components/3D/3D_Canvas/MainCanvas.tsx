'use client';
import React, { MutableRefObject, useEffect, useState } from 'react';
/**THREE Staff*/
import * as THREE from 'three';
/**R3F Staff**/
import { Canvas } from '@react-three/fiber';
/**Drei Staff*/
import { PerspectiveCamera } from '@react-three/drei/core/PerspectiveCamera';
/**Components**/
import Scene3D from '../3D_Scene/Scene3D';
/**Monitoring Staff**/
import { Perf } from 'r3f-perf';
/**Hooks*/
import useWindowSize from '@/hooks/useWindowSize';
import CanvasContent from './canvasContent/CanvasContent';
import ScrollableScene3D from '../3D_Scene/ScrollableScene3D';

// /**FramerMotion Staff*/
// import { MotionValue } from 'framer-motion';

/**--------------------------------------------**/
/*
default version of <Canvas> includs initial-settings of this element: scene, camera, renderer, antialias, encoding, etc.
we can set the attributes of camera her;
we can't play / animate with camera's attributer within useFrame() here!
*/
const MainCanvas = () => {
  /**Local State**/
  const [eventsRoot, setEventsRoot] = useState<HTMLDivElement>(null!);

  useEffect(() => {
    let eventSource = document.getElementById('root') as HTMLDivElement;
    setEventsRoot(eventSource);
  }, []);

  /**...*/
  const { width } = useWindowSize();

  /**JSX**/
  return (
    <Canvas
      eventSource={eventsRoot}
      eventPrefix="client"
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 50 }}
    >
      {/*
      //___apply if you want to use ScrollControls from Drei
      <CanvasContent /> */}
      <ScrollableScene3D />
      <Perf
        position="bottom-right"
        // showGraph={width > 800 ? true : false}
        // // deepAnalyze={true}
        // minimal={width > 800 ? false : true}
      />
    </Canvas>
  );
};

export default MainCanvas;

//___camera={{ fov: 10, position: [0, 0, -5] }}

{
  /* <Scene3D
  // scrollYProgress={scrollYProgress}
  scrollProgress={scrollProgress}
  direction={direction}
/>; */
}
