import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy Load
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <Suspense
      fallback={
        <h1 style={{ textAlign: "center", marginTop: "100px", color: "white" }}>
          Loading...
        </h1>
      }
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

export default App;
