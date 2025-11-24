import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            MERN Blog App
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-indigo-200 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/create"
                  className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-indigo-100 transition"
                >
                  Write Post
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Child routes will be displayed here */} 
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-gray-400 text-center py-4">
        <p>© {new Date().getFullYear()} MERN Blog Application</p>
      </footer>
    </div>
  );
};

export default Layout;
