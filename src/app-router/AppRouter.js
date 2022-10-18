import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import NewBlog from "../pages/NewBlog";
import PostDetails from "../pages/PostDetails";
import Profile from "../pages/Profile";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="newblog" element={<PrivateRouter />}>
          <Route path="/" element={<NewBlog />} />
        </Route>
        <Route path="detail/:str" element={<PrivateRouter />}>
          <Route path="/" element={<PostDetails />} />
        </Route>
        <Route path="profile" element={<PrivateRouter />}>
          <Route path="/" element={<Profile />} />
        </Route>
        <Route path="update/:str" element={<PrivateRouter />}>
          <Route path="/" element={<UpdateBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
