import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Dashboard";
import Users from "./pages/Users";
import ForegetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Routes */}
        <Route path="/">
          {/* <Route index element={<Navigate replace to="home" />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForegetPassword />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Route>

        {/* Not found */}
        {/* <Route path="*" element={<Pagenotfound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
