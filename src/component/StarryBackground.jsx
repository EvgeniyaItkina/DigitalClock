import React, { useEffect, useRef } from "react";
import "./StarryBackground.css";

const StarryBackground = () => {
  const starsContainer = useRef(null);

  useEffect(() => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 1}s`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      stars.push(star);
    }
    stars.forEach((star) => starsContainer.current.appendChild(star));
  }, []);

  return <div className="starry-background" ref={starsContainer}></div>;
};

export default StarryBackground;
