// Drawer/index.tsx
import { X } from "phosphor-react"; // Close icon from Phosphor Icons
import { ComponentProps, forwardRef } from "react";

const drawerStyles =
  "fixed top-0 right-0 bottom-0 w-80 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out"; // Apply transition to transform

// Drawer Props
type DrawerProps = ComponentProps<"div"> & {
  isOpen: boolean;
  onClose: () => void;
};

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(({ isOpen, onClose }, ref) => {
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
        className={`${drawerStyles} ${isOpen ? "translate-x-0" : "translate-x-full"}`} // Smooth translate-x transition
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600"
        >
          <X size={24} />
        </button>

        {/* Drawer Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold">Drawer Content</h2>
          <p className="mt-2">Here you can place your content, such as forms or information.</p>
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

            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
});

Drawer.displayName = "Drawer";
