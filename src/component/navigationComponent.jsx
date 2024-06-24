import { useDispatch } from "react-redux";
import { nextImage, prevImage } from "../redux/action.js";

const NavigationComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => dispatch(prevImage())}
        className="bg-blue-500 text-white py-2 px-4 mx-16 rounded"
      >
        Back
      </button>
      <button
        onClick={() => dispatch(nextImage())}
        className="bg-blue-500 text-white py-2 px-4 mx-16 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default NavigationComponent;
