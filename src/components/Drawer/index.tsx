import { X } from "phosphor-react"; // Close icon
import { cn } from "@/utils"; // Utility for classnames
import { ComponentProps, forwardRef } from "react";

// Drawer Styles using Tailwind
const drawerStyles = "fixed top-0 right-0 bottom-0 w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50";

type DrawerProps = ComponentProps<"div"> & {
  isOpen: boolean;
  onClose: () => void;
};

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ isOpen, onClose }, ref) => {
    return (
      <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={onClose} // Close when clicking overlay
        />
        
        {/* Drawer content */}
        <div
          ref={ref}
          className={`${drawerStyles} ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600"
          >
            <X size={24} /> {/* Close Icon */}
          </button>

          {/* Drawer Content */}
          <div className="p-4">
            <h2 className="text-xl font-semibold">Drawer Content</h2>
            <p className="mt-2">Here you can place your content or forms.</p>
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <button
              onClick={onClose} // Close the drawer on cancel
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                alert("Saved!"); // Action on Save
                onClose(); // Close after saving
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </>
    );
  }
);

Drawer.displayName = "Drawer";
