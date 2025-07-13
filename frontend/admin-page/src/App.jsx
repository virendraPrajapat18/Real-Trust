
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Client from "./components/Client"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Project from "./components/Projects"


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
