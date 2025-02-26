import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

// Enforcing types with string literal types
type ButtonVariant =
  | "solid"
  | "outline"
  | "ghost"
  | "surface"
  | "plain";
type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonColorPalette =
 
  | "red"
  | "blue"
  | "green"
  | "teal"
  | "yellow"
  | "purple"
  | "pink"
  | "accent";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "bg-primary-600 text-white",
        outline: "border-2 border-primary-500 text-primary-600",
        ghost: "bg-transparent text-primary-600 hover:bg-primary-100",
        surface: "bg-gray-200 text-gray-800",
        plain: "bg-transparent text-black",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        green: "bg-green-700 hover:bg-green-600",
        blue: "bg-blue-500 hover:bg-blue-400",
        gray: "bg-gray-500 hover:bg-gray-600",
        red: "bg-red-700 hover:bg-red-600",
        yellow: "bg-yellow-500 hover:bg-yellow-600",
        teal: "bg-teal-500 hover:bg-teal-600",
        purple: "bg-purple-500 hover:bg-purple-600",
        pink: "bg-pink-500 hover:bg-pink-600",
        accent: "bg-primary-600 hover:bg-primary-700",
      },
    },
    compoundVariants: [
      // Green compound variants
      {
        variant: "solid",
        colorscheme: "green",
        className: "bg-green-700",
      },
      {
        variant: "outline",
        colorscheme: "green",
        className:
          "text-green-600 border-green-500 bg-transparent hover:bg-green-100",
      },
      {
        variant: "ghost",
        colorscheme: "green",
        className: "text-green-600 bg-transparent hover:bg-green-100",
      },
      {
        variant: "surface",
        colorscheme: "green",
        className: "bg-green-200 text-green-900",
      },
      {
        variant: "plain",
        colorscheme: "green",
        className: "text-green-600 bg-transparent hover:bg-transparent",
      },

      // Blue compound variants
      {
        variant: "solid",
        colorscheme: "blue",
        className: "bg-blue-500",
      },
      {
        variant: "outline",
        colorscheme: "blue",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorscheme: "blue",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "surface",
        colorscheme: "blue",
        className: "bg-primary-200 text-primary-900",
      },
      {
        variant: "plain",
        colorscheme: "blue",
        className: "bg-transparent text-blue-600 hover:bg-transparent",
      },

      // Red compound variants
      {
        variant: "solid",
        colorscheme: "red",
        className: "bg-red-700",
      },
      {
        variant: "outline",
        colorscheme: "red",
        className:
          "text-red-600 border-red-500 bg-transparent hover:bg-rd-100",
      },
      {
        variant: "ghost",
        colorscheme: "red",
        className: "text-red-600 bg-transparent hover:bg-red-100",
      },
      {
        variant: "surface",
        colorscheme: "red",
        className: "bg-red-200 text-red-900",
      },
      {
        variant: "plain",
        colorscheme: "red",
        className: "text-red-600 bg-transparent hover:bg-transparent",
      },

      // Yellow compound variants
      {
        variant: "solid",
        colorscheme: "yellow",
        className: "bg-yellow-500",
      },
      {
        variant: "outline",
        colorscheme: "yellow",
        className:
          "text-yellow-600 border-yellow-500 bg-transparent hover:bg-yellow-100",
      },
      {
        variant: "ghost",
        colorscheme: "yellow",
        className: "text-yellow-600 bg-transparent hover:bg-yellow-100",
      },
      {
        variant: "surface",
        colorscheme: "yellow",
        className: "bg-yellow-200 text-yellow-900",
      },
      {
        variant: "plain",
        colorscheme: "yellow",
        className: "text-yellow-600 bg-transparent hover:bg-transparent",
      },
      // Teal compound variants
      {
        variant: "solid",
        colorscheme: "teal",
        className: "bg-teal-500",
      },
      {
        variant: "outline",
        colorscheme: "teal",
        className:
          "text-teal-600 border-teal-500 bg-transparent hover:bg-teal-100",
      },
      {
        variant: "ghost",
        colorscheme: "teal",
        className: "text-teal-600 bg-transparent hover:bg-teal-100",
      },
      {
        variant: "surface",
        colorscheme: "teal",
        className: "bg-teal-200 text-teal-900",
      },
      {
        variant: "plain",
        colorscheme: "teal",
        className: "text-teal-600 bg-transparent hover:bg-transparent",
      },

      // Purple compound variants
      {
        variant: "solid",
        colorscheme: "purple",
        className: "bg-purple-500",
      },
      {
        variant: "outline",
        colorscheme: "purple",
        className:
          "text-purple-600 border-purple-500 bg-transparent hover:bg-purple-100",
      },
      {
        variant: "ghost",
        colorscheme: "purple",
        className: "text-purple-600 bg-transparent hover:bg-purple-100",
      },
      {
        variant: "surface",
        colorscheme: "purple",
        className: "bg-purple-200 text-purple-900",
      },
      {
        variant: "plain",
        colorscheme: "purple",
        className: "text-purple-600 bg-transparent hover:bg-transparent ",
      },

      // Pink compound variants
      {
        variant: "solid",
        colorscheme: "pink",
        className: "bg-pink-500",
      },
      {
        variant: "outline",
        colorscheme: "pink",
        className:
          "text-pink-600 border-pink-500 bg-transparent hover:bg-pink100",
      },
      {
        variant: "ghost",
        colorscheme: "pink",
        className: "text-pink-600 bg-transparent hover:bg-pink-100",
      },
      {
        variant: "surface",
        colorscheme: "pink",
        className: "bg-pink-200 text-pink-900",
      },
      {
        variant: "plain",
        colorscheme: "pink",
        className: "text-pink-600 bg-transparent hover:bg-transparent",
      },

      // Accent compound variants
      {
        variant: "solid",
        colorscheme: "accent",
        className: "bg-primary-600 ",
      },
      {
        variant: "outline",
        colorscheme: "accent",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorscheme: "accent",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "surface",
        colorscheme: "accent",
        className: "bg-primary-200 text-primary-900",
      },
      {
        variant: "plain",
        colorscheme: "accent",
        className: "text-primary-600 bg-transparent hover:bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "accent", // You can change this to any default color, e.g., "blue", "red"
    },
  }
);

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  colorscheme?: ButtonColorPalette;
  loading?: boolean;
  loadingText?: React.ReactNode;
} & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      colorscheme,
      className,
      loading,
      loadingText,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        disabled={loading}
        {...props}
      >
        {loading ? loadingText : children}
      </button>
    );
  }
);

Button.displayName = "Button"; // For better debugging
