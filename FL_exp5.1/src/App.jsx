import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy Loaded Component
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div>
      <Suspense fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
