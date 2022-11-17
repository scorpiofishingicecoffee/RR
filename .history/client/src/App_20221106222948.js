import React from "react";
import { useEffect, useState } from "react";
import Games from "./Games";
import axios from "axios";
import NavBar from "./NavBar";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import NavBarPage from "./NavBarPage";
import HomePage from "./HomePage";
import Home from "./pages/Home";
import Protected from "./pages/Protected";
import Public from "./pages/Public";
import Layout from "./pages/Layout";
import RequireAuth from "./components/RequireAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Routes } from "react-router-dom";


function App() {
  //    const [user, setUser] = useState(null);
  //    const [isAuth, setIsAuth] = useState(false);
  //
  //    useEffect(() => {
  //      // auto-login
  //      fetch("/me").then((r) => {
  //        if (r.ok) {
  //          r.json().then((user) => {
  //            setUser(user);
  //            setIsAuth(true);
  //          });
  //        }
  //      });
  //    }, []);
  //
  //    if (!isAuth) {
  //      return (
  //        </div>
  //      );
  //    }
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
      <Routes>
      </Routes>
      </BrowserRouter> */
}
{
  /* <NavBar />
      <HomePage /> */
}
{
  /* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<Public />} />
        <Route path="/protected" element={<Protected />} />
        <Layout>
          <Home />
          <Register />
          <Login />
          <RequireAuth />
          <Protected />
          <Public />
        </Layout>
      </Routes> */
}
