
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ToDo from "./pages/ToDo";
import Quotes from "./pages/Quotes";
import Messages from "./pages/Messages";
import Navbar from "./components/Navbar";

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
