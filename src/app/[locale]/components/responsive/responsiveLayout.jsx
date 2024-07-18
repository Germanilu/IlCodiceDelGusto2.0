'use client'

import { useEffect }      from 'react';
import { useDispatch }    from 'react-redux';
import { setResponsive }  from '../../../Redux/Slices/responsive/responsiveSlice';

const ResponsiveLayout = ({ children }) => {
  const dispatch = useDispatch();

  const handleResize = () => {
    const isResponsive = window.innerWidth < 745; // Adjust the breakpoint as needed
    dispatch(setResponsive(isResponsive));
  };

  useEffect(() => {
    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return children; // Render children inside the responsive layout
};

export default ResponsiveLayout;