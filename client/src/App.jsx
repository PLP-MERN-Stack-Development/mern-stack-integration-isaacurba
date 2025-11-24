// client/src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import Pages
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import PostForm from './pages/PostForm';
import Login from './pages/Login';       
import Register from './pages/Register'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts/:slug" element={<SinglePost />} />
        <Route path="create" element={<PostForm />} />
        <Route path="edit/:id" element={<PostForm />} />
        
        {/* Auth Routes */}
        <Route path="login" element={<Login />} />       {/* <--- NEW ROUTE */}
        <Route path="register" element={<Register />} /> {/* <--- NEW ROUTE */}

        <Route path="*" element={<div className="text-center mt-20 text-red-500">404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;