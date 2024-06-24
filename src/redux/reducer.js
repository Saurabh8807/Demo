import { NEXT_IMAGE, PREV_IMAGE } from "./action.js";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img6.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg"; 
const initialState = {
  currentIndex: 0,
  images: [img1, img2, img3, img4, img5], 
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_IMAGE:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.images.length,
      };
    case PREV_IMAGE:
      return {
        ...state,
        currentIndex:
          (state.currentIndex - 1 + state.images.length) % state.images.length,
      };
    default:
      return state;
  }
};

export default imageReducer;
