import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top on navigation
    window.ScrollTo({ top: 0, behavior: "instant" });
  }, [pathname]); // Track both

  return null;
}

export default ScrollToTop;
