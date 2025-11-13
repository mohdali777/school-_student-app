import AppNavigator from "./src/navigation/Appnavigator";
import Authnavigator from "./src/navigation/Authnavigator";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./src/redux/store";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  return (
    <Provider store={store}>
       <MainNavigator/>
    </Provider>
  );
}

