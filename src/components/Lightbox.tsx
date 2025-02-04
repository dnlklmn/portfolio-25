interface LightboxProps {
  image: string;
  className?: string;
}

const Lightbox: React.FC<LightboxProps> = ({ image, className }) => {
  return (
    <div>
      <img src={image} alt="Thumbnail" className={`cursor-pointer ${className}`} />
    </div>
  );
};

export default Lightbox;
