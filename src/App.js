import {HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="" element={}/>
          <Route path="" element={}/>
          <Route path="" element={}/>*/}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
