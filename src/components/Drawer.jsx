// src/components/Drawer.jsx
export default function Drawer({ toggleDrawer }) {
    return (
      <div className="fixed top-0 left-0 w-64 h-full bg-secondary text-white shadow-lg p-4 transition-transform transform -translate-x-0">
        <button
          onClick={toggleDrawer}
          className="text-white p-2 rounded hover:bg-primary hover:text-secondary transition-colors"
        >
          Close Drawer
        </button>
        {/* Additional content for the drawer can go here */}
      </div>
    );
  }
  