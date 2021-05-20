import "./App.css";
import "./bootstrap.min.css";
import HomeScreen from "./components/HomeScreen";
import Header from "./components/Header";
import { Fragment } from "react";
const App = () => {
  return (
    <Fragment>
      <Header />
      <HomeScreen />
    </Fragment>
  );
};

export default App;
