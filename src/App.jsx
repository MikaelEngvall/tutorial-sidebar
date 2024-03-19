import React, { useState } from "react";
import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HTMLpages from "./pages/HTMLpages";
import Performance from "./pages/Performance";
import Ads from "./pages/Ads";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <Router>
      <div className="main-container">
        <Sidebar toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/htmlpages"
              element={<HTMLpages sidebarIsOpen={sidebarIsOpen} />}
            />
            <Route path="/performance" element={<Performance />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route
              path="/ads"
              element={<Ads sidebarIsOpen={sidebarIsOpen} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
