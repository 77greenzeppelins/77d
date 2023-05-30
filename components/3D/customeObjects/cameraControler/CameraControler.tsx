import React, { useRef } from 'react';
/**THREE Staff*/
import * as THREE from 'three';
/**R3F Staff*/
import { useFrame } from '@react-three/fiber';
/**Components**/
import ThreePlane from '../../basicShapes/plane/ThreePlane';

// interface Props {
//   scrollProgress: MutableRefObject<number>;
//   meshProps: JSX.IntrinsicElements['mesh'];
// }

/**----------------------------**/
const CameraControler = () => {
  /**References**/
  const meshRef = useRef<THREE.Mesh>(null!);
  /**Animations / Manipulations*/
  useFrame(state => {
    //__basic settings to move plane
    meshRef.current.position.z = THREE.MathUtils.lerp(
      meshRef.current.position.z,
      // scrollProgress.current * -30,
      window.scrollY / -200,
      // 0.05
      0.1
    );

    // meshRef.current.position.y = scrollProgress.current * -30;
    // const targetPosition = new THREE.Vector3(0, 0, meshRef.current.position.z);//
    // const targetPosition = new THREE.Vector3(0, meshRef.current.position.y, 0);

    // console.log('targetPosition', targetPosition);
    // const cameraPosition = new THREE.Vector3();
    // cameraPosition.copy(targetPosition);
    // cameraPosition.z += 3;
    // cameraPosition.y += 0;

    // const cameraTarget = new THREE.Vector3();
    // cameraTarget.copy(targetPosition);
    // // cameraTarget.y += 0.25;

    // state.camera.position.copy(cameraPosition);
    // state.camera.lookAt(cameraTarget);

    //____min version
    const cameraPosition = new THREE.Vector3(
      0,
      0,
      3 + meshRef.current.position.z
    );
    state.camera.position.copy(cameraPosition);
  });
  /**JSX**/
  return (
    <group>
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        //  {...meshProps}
        visible={false}
      >
        <ThreePlane argsWidth={1} argsHeight={1} />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
    </group>
  );
};

export default CameraControler;
