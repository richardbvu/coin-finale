import { BrowserRouter, Route, Routes } from "react-router-dom";
import Market from "./components/Market";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Market />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
