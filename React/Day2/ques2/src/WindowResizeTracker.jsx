import { useState, useEffect } from "react";

function WindowResizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let deviceType = "Desktop";

  if (width < 768) {
    deviceType = "Mobile";
  } else if (width < 1024) {
    deviceType = "Tablet";
  }

  return (
    <div>
      <h2>Window Resize Tracker</h2>

      <p>
        Window Size: {width} x {height}
      </p>

      <p>Device Type: {deviceType}</p>
    </div>
  );
}

export default WindowResizeTracker;
