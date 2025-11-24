import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import the REAL page components we created
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import PostForm from './pages/PostForm'; // Handles both Create and Edit

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        {/* Show the Post List at the root URL */}
        <Route index element={<Home />} />
        
        {/* Show a single post when URL is /posts/some-slug */}
        <Route path="posts/:slug" element={<SinglePost />} />
        
        {/* Show the form when creating a new post */}
        <Route path="create" element={<PostForm />} />
        
        {/* Show the SAME form when editing, but pass the ID */}
        <Route path="edit/:id" element={<PostForm />} />
        
        {/* 404 Page */}
        <Route path="*" element={
          <div className="text-center mt-20 text-2xl font-bold text-red-500">
            404 - Page Not Found
          </div>
        } />
      </Route>
    </Routes>
  );
}

export default App;