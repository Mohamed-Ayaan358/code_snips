/*
    useResponsiveWindow can be used to have conditional UI based on industry standard
    breaking points
*/

import { useCallback, useEffect, useMemo, useState } from 'react';

export const DEFAULT_BREAKPOINTS = {
    smallDesktop: 1366,
    mediumDesktop: 1400,
    largeDesktop: 1920,
    tablet: 768,
    mobile: 425,
};

const useResponsiveWindow = (sizes = DEFAULT_BREAKPOINTS) => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowResize = useCallback(
        (e) => {
            setWidth(e.target.innerWidth);
        },
        [setWidth]
    );

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            // clean up function
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [width, handleWindowResize]);

    const isMobile = useMemo(
        () => sizes?.mobile && width <= sizes?.mobile,
        [width]
    );
    const isTablet = useMemo(
        () => sizes?.tablet && width <= sizes?.tablet,
        [width]
    );

    const isDesktop = useMemo(
        () => sizes?.tablet && width >= sizes?.smallDesktop,
        [width]
    );

    return {
        width,
        isMobile,
        isTablet,
        isDesktop,
    };
};

export default useResponsiveWindow;
