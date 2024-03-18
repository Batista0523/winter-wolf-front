import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./containers/Home/Home";
import Services from "./containers/Services/Services";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";











function App() {
  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/ourService" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
