import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutPage from "./pages/ABOUT";
import AddBlog from "./pages/ADD-BLOG";
import AllBlogs from "./pages/ALLBLOG";
import SingleBlog from "./pages/SINGLEBLOG";
import HomePage from "./pages/HOME";
import Navbar from "./components/navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/add-blogs" element={<AddBlog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
