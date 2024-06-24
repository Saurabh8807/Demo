import { useSelector } from "react-redux";

const ImageComponent = () => {
  const currentIndex = useSelector((state) => state.currentIndex);
  const images = useSelector((state) => state.images);

  return (
    <div className="flex w-full justify-center mx-auto items-center">
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-1/2 h-96 object-contain" 
      />
    </div>
  );
};

export default ImageComponent;
