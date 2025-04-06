import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";

function ButtonOnTop() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!buttonRef.current) return;
      if (window.scrollY > 100) {
        buttonRef.current.classList.remove("opacity-0");
        buttonRef.current.classList.add("opacity-100");
      } else {
        buttonRef.current.classList.remove("opacity-100");
        buttonRef.current.classList.add("opacity-0");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      ref={buttonRef}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-0 right-0 m-5 opacity-0 transition-opacity duration-300"
    >
      <ChevronUp />
    </Button>
  );
}

export default ButtonOnTop;
