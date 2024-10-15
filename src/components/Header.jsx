// src/components/Navbar.jsx
import { useState } from "react";
import Drawer from "./Drawer";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex justify-between items-center bg-primary text-white px-6 py-4 shadow-md">
      <h1 className="text-2xl font-semibold">Your Name</h1>
      <button
        onClick={toggleDrawer}
        className="text-secondary p-2 rounded focus:outline-none hover:bg-secondary hover:text-white transition-colors"
      >
        Toggle Drawer
      </button>

      {isDrawerOpen && <Drawer toggleDrawer={toggleDrawer} />}
    </div>
  );
}
