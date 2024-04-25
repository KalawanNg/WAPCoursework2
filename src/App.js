import { useEffect } from "react";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/UI/Footer";
import Login from "./components/UI/Login";
import Register from "./components/UI/Register";
import MemberChoosing from "./components/UI/MemberChoosing"
import GymLocations from "./components/UI/GymLocations"
import "./App.css";
import Home from "./components/UI/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/memberchoosing" element={<MemberChoosing/>} />
        <Route path="/gymlocations" element={<GymLocations/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
