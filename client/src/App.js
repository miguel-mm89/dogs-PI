import { Route, Routes, BrowserRouter } from "react-router-dom";
import DogDetail from "./routes/dogDetail";
import Home from "./routes/home";
import CreateDog from "./routes/createDog";
import LandingPage from "./routes/landingPage";
import About from "./routes/About";
import NavBar from "./routes/components/navBar";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/dogs/:id" element={<DogDetail />} />
        <Route path="/createdog" element={<CreateDog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
