import { useEffect, useState } from 'react';

const BREAKPOINT_SM = 576;
const BREAKPOINT_MD = 768;
const BREAKPOINT_LG = 992;
const BREAKPOINT_XL = 1200;
const BREAKPOINT_XXL = 1400;

/** @use const { isMobile, isTablet, isDesktop} = useIsMobile(); */
const useBreakpoints = () => {
  const checkForDevice = (breakpoint: number) => window.innerWidth >= breakpoint;
  console.log(window.innerWidth)

  const [isXS, setIsXS] = useState(window.innerWidth < BREAKPOINT_SM);
  const [isSM, setIsSM] = useState(checkForDevice(BREAKPOINT_SM));
  const [isMD, setIsMD] = useState(checkForDevice(BREAKPOINT_MD));
  const [isLG, setIsLG] = useState(checkForDevice(BREAKPOINT_LG));
  const [isXL, setIsXL] = useState(checkForDevice(BREAKPOINT_XL));
  const [isXXL, setIsXXL] = useState(checkForDevice(BREAKPOINT_XXL));

  useEffect(() => {
    const handlePageResized = () => {
      setIsSM(checkForDevice(BREAKPOINT_SM));
      setIsMD(checkForDevice(BREAKPOINT_MD));
      setIsLG(checkForDevice(BREAKPOINT_LG));
      setIsXL(checkForDevice(BREAKPOINT_XL));
      setIsXXL(checkForDevice(BREAKPOINT_XXL));
      setIsXS(!isSM && !isMD && !isLG && !isXL && !isXXL);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handlePageResized);
      window.addEventListener('orientationchange', handlePageResized);
      window.addEventListener('load', handlePageResized);
      window.addEventListener('reload', handlePageResized);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handlePageResized);
        window.removeEventListener('orientationchange', handlePageResized);
        window.removeEventListener('load', handlePageResized);
        window.removeEventListener('reload', handlePageResized);
      }
    };
  }, []);

  return {
    isXS: !isSM && !isMD && !isLG && !isXL && !isXXL,
    isSM: isSM && !isMD && !isLG && !isXL && !isXXL,
    isMD: isMD && !isLG && !isXL && !isXXL,
    isLG: isLG && !isXL && !isXXL,
    isXL: isXL && !isXXL,
    isXXL,
    isMobile: !isMD && !isLG && !isXL && !isXXL,
    isTablet: isMD && !isLG && !isXL && !isXXL,
    isDesktop: isLG || isXL || isXXL,
  };
};

export default useBreakpoints;