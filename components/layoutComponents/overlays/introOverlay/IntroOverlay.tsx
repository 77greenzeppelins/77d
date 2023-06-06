'use client';
import React, { useEffect, useState } from 'react';
/**GlobalContext  Staff**/
import { useGlobalContext } from '@/context/globalContext';
/**Components**/
import IntroOverlayContent from './content/IntroOverlayContent';
/**Spring settings*/
import { useTransition, animated } from '@react-spring/web';
/***/
import { animationsDelays } from '@/data/basicData';

/**-----------------------------**/
const IntroOverlay = () => {
  /**GlobalContext  Section**/
  const { isIntroOverlay, setIsIntroOverlay } = useGlobalContext();

  useEffect(() => {
    // Disable scrolling on mount
    // document.body.style.overflow = 'hidden';
    //___
    const timer = setTimeout(() => {
      // document.body.style.overflow = 'auto';
      setIsIntroOverlay(false);
    }, animationsDelays.introOverlayDurance);
    return () => {
      clearTimeout(timer);
      // document.body.style.overflow = 'auto';
    };
  }, [setIsIntroOverlay]);

  /**Transition section**/

  const transitions = useTransition(isIntroOverlay, {
    // ref: transRef,
    // keys: null,
    keys: isIntroOverlay.toString(),
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 600 },
    exitBeforeEnter: true,
  });

  // useEffect(() => {
  //   transRef.start();
  // }, [isIntroOverlay, transRef]);
  // console.log('...state:', state);

  /**JSX**/

  return transitions(
    (style, isIntroOverlay) =>
      isIntroOverlay && (
        <animated.div
          data-component="IntroOverlay"
          style={style}
          className="fixed w-screen h-screen bg-dark z-[100]"
          //___pointer-events-none
        >
          <IntroOverlayContent />
        </animated.div>
      )
  );
};

export default IntroOverlay;

// return transitions((style, item) => (
//   <animated.div
//     data-component="IntroOverlay"
//     style={style}
//     className="absolute fc w-screen h-screen bg-yellow-600 z-[100] pointer-events-none"
//   >
//     {/* {item} */}
//     {state ? 'mounted ' : 'unmounted'}
//   </animated.div>
// ));
// return (
//   <div
//     data-component="IntroOverlay"
//     className="absolute fc w-screen h-screen bg-yellow-600 z-[100] pointer-events-none"
//   >
//     {isIntroOverlay ? 'mounted ' : 'unmounted'}
//   </div>
// );
