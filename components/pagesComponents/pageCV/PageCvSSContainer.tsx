import React from 'react';
import { headers } from 'next/headers';
import PageCvAnimator from './PageCvAnimator';

/**-------------------------------**/
const PageCvSSContainer = () => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  /*
  ___1. 'sec-ch-ua-mobile' possible values: "?0" or "?1"; mobile phone returns "?1" but desktop and tablet return "?0";  
  __2. docs: "?1" indicates that the user-agent prefers a mobile experience (true). "?0" indicates that user-agent does not prefer a mobile experience (false).
  */
  let isMobile = headersList.get('sec-ch-ua-mobile')?.includes('1');
  console.log('userAgent:', typeof userAgent);
  /*
  ___1. The match() method will return either a truthy value (a match) or null (no match). Applying the double negation operator (!!) to the result will convert it into a boolean value. If there is a match, isMobileView will be true; otherwise, it will be false.
  */
  let isMobileView = !!userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  /*
  ___1. main condition that allowe distinguish between desktop and rest devices
  */
  /**JSX**/
  return (
    <div data-container="PageContactsSSContainer">
      <PageCvAnimator hintIsMobile={isMobile || isMobileView} />
    </div>
  );
};

export default PageCvSSContainer;
