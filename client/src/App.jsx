import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// -- Placeholder Pages (We will replace these with real files in the next step) --
const Home = () => (
  <div className="text-center p-10">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Page</h1>
    <p className="text-gray-600">This is where the list of blog posts will appear.</p>
  </div>
);

const CreatePost = () => (
  <div className="text-center p-10">
    <h1 className="text-4xl font-bold text-indigo-600 mb-4">✍️ Create a Post</h1>
    <p className="text-gray-600">This page will hold the form to add new content.</p>
  </div>
);

const SinglePost = () => (
  <div className="text-center p-10">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">📄 Single Post View</h1>
    <p className="text-gray-600">Details for a specific post will be shown here.</p>
  </div>
);

const EditPost = () => (
  <div className="text-center p-10">
    <h1 className="text-4xl font-bold text-orange-500 mb-4">✏️ Edit Post</h1>
    <p className="text-gray-600">The form to update an existing post.</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts/:slug" element={<SinglePost />} />
        <Route path="create" element={<CreatePost />} />
        <Route path="edit/:id" element={<EditPost />} />
        {/* 404 Page */}
        <Route path="*" element={ 
          <div className="text-center mt-20 text-2xl font-bold text-red-500">404 - Page Not Found</div>
        } />
      </Route>
    </Routes>
  );
}

export default App;