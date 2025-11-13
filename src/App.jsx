
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import ToDo from "./pages/ToDo.jsx";
import Quotes from "./pages/Quotes.jsx";
import Messages from "./pages/Messages.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

    return ( <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
}


export default App;
