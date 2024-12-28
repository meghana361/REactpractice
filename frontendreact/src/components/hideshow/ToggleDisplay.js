import { useState } from "react";

const ToggleDisplay = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);  // Toggle between true and false
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Content
      </button>

      <div style={{ display: isVisible ? "block" : "none" }}>
        <h3>This content is toggled</h3>
        <p>It will be hidden or shown based on the button click.</p>
      </div>
    </div>
  );
};

export default ToggleDisplay;