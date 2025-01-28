import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface LightboxProps {
  image: string;
}

const Lightbox: React.FC<LightboxProps> = ({ image }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      console.log("Escape key pressed");
      closeLightbox();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    console.log("Mouse event detected");
    if (lightboxRef.current && !lightboxRef.current.contains(event.target as Node)) {
      console.log("Clicked outside lightbox");
      closeLightbox();
    } else {
      console.log("Clicked inside lightbox");
    }
  };

  useEffect(() => {
    if (isOpen) {
      console.log("Adding event listeners");
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      console.log("Removing event listeners");
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      console.log("Cleanup event listeners");
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const lightboxContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative" ref={lightboxRef} style={{ padding: "5%" }}>
        <img
          src={image}
          alt="Full size"
          className="max-w-full max-h-full cursor-pointer"
          onClick={closeLightbox}
        />
      </div>
    </div>
  );

  return (
    <div>
      <img src={image} alt="Thumbnail" className="cursor-pointer" onClick={openLightbox} />
      {isOpen && ReactDOM.createPortal(lightboxContent, document.body)}
    </div>
  );
};

export default Lightbox;
