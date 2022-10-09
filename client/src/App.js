import { Route, Routes, BrowserRouter } from "react-router-dom";
import DogDetail from "./routes/dogDetail";
import Home from "./routes/home";
import CreateDog from "./routes/createDog";
import LandingPage from "./routes/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/dogs/:id" element={<DogDetail />} />
        <Route path="/createdog" element={<CreateDog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
