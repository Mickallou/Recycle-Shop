import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GeneralContext } from './App';

const ScrollToTop = () => {
    const { pathname } = useLocation(); 
    const { setDetails } = useContext(GeneralContext);

    useEffect(() => {
        window.scrollTo(0, 0); 
        setDetails(false);
        // eslint-disable-next-line
    }, [pathname]);

    return null;
};

export default ScrollToTop;
