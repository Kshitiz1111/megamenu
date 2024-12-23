import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Function to update the device type based on screen width
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile
    };

    // Check on mount
    updateDeviceType();

    // Add event listener to handle window resize
    window.addEventListener('resize', updateDeviceType);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  // Return both isMobile and isDesktop for flexibility
  return { isMobile:isMobile, isDesktop: !isMobile };
};

export default useDeviceType;
