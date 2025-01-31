import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

interface LightboxProps {
  image: string;
  className?: string;
  enableMove?: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({ image, className, enableMove = true }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mouseY, setMouseY] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (lightboxRef.current && !lightboxRef.current.contains(event.target as Node)) {
      closeLightbox();
    }
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMouseY(event.clientY);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      if (enableMove) {
        document.addEventListener("mousemove", handleMouseMove);
      }

      if (imageRef.current) {
        setImageHeight(imageRef.current.naturalHeight);
      }
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isOpen, enableMove, handleClickOutside, handleKeyDown, handleMouseMove]);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.naturalHeight);
    }
  };

  const lightboxContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative" ref={lightboxRef} style={{ padding: "5%" }}>
        <img
          src={image}
          alt="Full size"
          ref={imageRef}
          onLoad={handleImageLoad}
          className="max-w-full max-h-full cursor-pointer object-contain"
          onClick={closeLightbox}
          style={{
            transform:
              enableMove && imageHeight > window.innerHeight
                ? `translateY(${(window.innerHeight / 2 - mouseY) * 2}px)`
                : "none",
          }}
        />
      </div>
    </div>
  );

  return (
    <div>
      <img
        src={image}
        alt="Thumbnail"
        className={`cursor-pointer ${className}`}
        onClick={openLightbox}
      />
      {isOpen && ReactDOM.createPortal(lightboxContent, document.body)}
    </div>
  );
};

export default Lightbox;
