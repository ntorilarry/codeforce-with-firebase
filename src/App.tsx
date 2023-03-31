import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import ForegetPassword from "./pages/ForgetPassword";
import PageNotFound from "./pages/PageNotFound";
import EmailVerify from "./pages/EmailVerify";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Routes */}
        <Route path="/">
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForegetPassword />} />
          <Route path="/verify-email" element={<EmailVerify />} />
          {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/dashboard" element={<><Dashboard /></>} />
            <Route path="/users" element={<Users />} />
          {/* </Route> */}
        </Route>

        {/* Not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
