import { useState } from "react";

function AnimatedButton({ onClick }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReloadClick = () => {
    setIsAnimating(true);
    onClick(); // Llama a la función pasada como prop (en este caso, reload)
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <input
    className={`reload ${isAnimating ? "active" : ""}`}
    type="image"
    src="/reload.png"
    alt="reload"
    onClick={handleReloadClick}
  />
    );
  }
  
  export default AnimatedButton;
  
  /* <input
    className={`reload ${isAnimating ? "active" : ""}`}
    type="image"
    src="/reload.png"
    alt="reload"
    onClick={handleReloadClick}
  /> */