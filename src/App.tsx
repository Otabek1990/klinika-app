import { Route, Routes } from "react-router-dom";
import Banner from "./components/layout/Banner";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Xodimlar from "./pages/xodimlar";
import Calculator from "./pages/Calculator/Calculator";

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/calculator" element={<Calculator/>}/>
      <Route path="/xodimlar" element={<Xodimlar/>}/>
    </Routes>
     
    </>
  );
}

export default App;
