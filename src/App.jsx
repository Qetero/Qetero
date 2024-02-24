import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Service from "./Pages/SingleService";
import Services from "./Pages/Services";
import Error from "./Pages/Error";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Service/:name" element={<Service />}></Route>
        <Route path="Services/:filter" element={<Services />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
