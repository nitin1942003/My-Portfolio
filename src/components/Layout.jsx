import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Navigation */}
      <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/home" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content - Rendered by Outlet */}

      <main className="flex-1 pt-20 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
