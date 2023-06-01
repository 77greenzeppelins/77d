'use client';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
/**Components**/
import Act1 from './acts/act_1/Act1';
import Act2 from './acts/act_2/Act2';
import Act3 from './acts/act_3/Act3';
import Act4 from './acts/act_4/Act4';
import Act5 from './acts/act_5/Act5';
/**THREE Staff**/
import * as THREE from 'three';
/**BasicData**/
import { page3DConfigs, pagesLinks } from '@/data/basicData';

/**TS**/

/**---------------------------------------**/
const PageHome = () => {
  /**References**/
  const groupRef = useRef<THREE.Group>(null!);

  /*
  (!) the code below concerns the matter of "3dObjects visibility" and is used in every 3D-pseudoPage => property "visible" must receive boolean value with delay of 1 second => that is why setTimeout() is used to change initial false value to true value;
  */
  const path = usePathname();
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPath(path === pagesLinks[0].href);
    }, page3DConfigs.visibilityDelay);

    /**cleaner**/
    return () => {
      clearTimeout(timer);
      setIsPath(false);
    };
  }, [path]);

  useEffect(() => {
    const groupRefReset = groupRef.current;
    return () => {
      if (!setIsPath) {
        groupRefReset.position.set(0, 0, 0);
      }
    };
  }, [setIsPath]);

  /**JSX**/
  return (
    <group ref={groupRef} visible={isPath}>
      <Act1
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[0]),
        }}
      />
      <Act2
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[1]),
        }}
      />
      <Act3
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[2]),
        }}
      />
      <Act4
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[3]),
        }}
      />
      <Act5
        groupProps={{
          position: new THREE.Vector3(...page3DConfigs.actsPositions[4]),
        }}
      />
    </group>
  );
};

export default PageHome;