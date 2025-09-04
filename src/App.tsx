import { Route, Routes } from "react-router-dom";
import Banner from "./components/layout/Banner";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
     
    </>
  );
}

export default App;
