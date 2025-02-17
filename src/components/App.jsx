import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Partials/Navbar";
import Home from "./Home";
import NER from "./NER";
import CoReference from "./CoReference";
import About from "./About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ner" element={<NER />} />
        <Route path="/coreference" element={<CoReference />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
