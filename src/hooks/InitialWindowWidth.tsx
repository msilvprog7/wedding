import { useEffect } from "react";
import { useState } from "react";

const resizeEvent = "resize";

/**
 * A React hook for the initial window width.
 * Based on: https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
 *
 * Example:
 * useInitialWindowWidth() >= 768 ? "desktop.png" : "mobile.png"
 *
 * @returns window.innerWidth
 */
function useInitialWindowWidth() {
  // Create state for the width
  const [width, setWidth] = useState(window.innerWidth);

  // Use an effect without dependencies
  // to only run on component mount and
  // unmount, rather than every update.
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener(resizeEvent, onResize);
    return () => window.removeEventListener(resizeEvent, onResize);
  }, []);

  return width;
}

// Exports Hook.
export default useInitialWindowWidth;
