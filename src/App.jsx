import { Provider } from "react-redux";
import store from "./redux/store.js";
import ImageComponent from "./component/imageComponent.jsx";
import NavigationComponent from "./component/navigationComponent.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex  bg-gray-800 flex-col justify-center items-center h-screen">
        <ImageComponent />
        <NavigationComponent />
      </div>
    </Provider>
  );
};

export default App;
