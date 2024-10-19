// src/components/Navbar.jsx
import { useState } from "react";
import Drawer from "./Drawer";
import { Menu } from 'lucide-react';
import { menuItems } from "../data/data";

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  
    return (
      <div className="relative">
        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Logo" />
              </div>
              
              {/* Toggle button */}
              <div className="flex items-center">
                <button
                  onClick={toggleDrawer}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Drawer Component */}
        <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} />
      </div>
    );
  }
