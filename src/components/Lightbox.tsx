import React, { useState } from "react";

interface LightboxProps {
  image: string;
  className?: string;
  alt?: string;
}

const Lightbox: React.FC<LightboxProps> = ({ image, className, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    setIsLoading(true); // Reset loading state when opening the lightbox
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <img alt={alt} src={image} className={`cursor-pointer ${className}`} onClick={handleOpen} />
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleClose}
        >
          {isLoading && <div className="light w-full h-12">Loading...</div>}
          <img
            alt={alt}
            src={image}
            className="max-w-full max-h-full"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
            style={{ display: isLoading ? "none" : "block" }}
            onClick={handleClose} // Close the lightbox when clicking on the image
          />
        </div>
      )}
    </div>
  );
};

export default Lightbox;
