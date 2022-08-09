import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";

const Rout = () => {
  return (
    <Router>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </div>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/about" element={<About />} />
        <Route exact={true} path="/contact" element={<Contact />} />
        <Route exact={true} path="/services" element={<Services />} />
        <Route
          exact={true}
          path="/servicedetails:id"
          element={<ServiceDetails />}
        />
      </Routes>
    </Router>
  );
};

export default Rout;
