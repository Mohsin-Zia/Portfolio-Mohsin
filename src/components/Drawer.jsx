
import { X } from 'lucide-react';

export default function Drawer({ isOpen, toggleDrawer, menuItems }) {
  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl transform ease-in-out transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-4">
          <div className="font-bold text-xl">Menu</div>
          <button
            onClick={toggleDrawer}
            className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer content */}
        <div className="mt-4 px-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block py-2 text-gray-600 hover:text-gray-800"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
}
