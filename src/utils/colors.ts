// src/utils/colors.ts
export const colorPalette = {
    gray: "bg-gray-500 hover:bg-gray-600 text-white",
    red: "bg-red-500 hover:bg-red-600 text-white",
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
    teal: "bg-teal-500 hover:bg-teal-600 text-white",
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-white",
    purple: "bg-purple-500 hover:bg-purple-600 text-white",
    pink: "bg-pink-500 hover:bg-pink-600 text-white",
    accent: "bg-indigo-500 hover:bg-indigo-600 text-white",
  };
  
  export type ButtonColorPalette = keyof typeof colorPalette;
  