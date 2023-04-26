import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TitleAndScrollRestoration() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
    pathname === "/"
      ? (document.title = "Home | Technical Backers")
      : (document.title =
          pathname.charAt(1).toUpperCase() +
          pathname.slice(2) +
          " | Technical Backers");
  }, [pathname]);
  return null;
}

export default TitleAndScrollRestoration;
