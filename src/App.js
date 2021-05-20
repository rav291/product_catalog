import "./App.css";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/HomeScreen";
import HomeScreen from "./components/HomeScreen";
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
    </Router>
  );
};

export default App;
