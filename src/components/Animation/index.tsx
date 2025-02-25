// src/components/Animation/index.tsx
import { cn } from "@/utils"; // Utility to concatenate class names
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

// Define animation styles (fade, shake, scale, slide)
const animationStyles = cva(
  [
    "transition-all",
    "duration-500",
    "ease-in-out",
    "transform",
  ],
  {
    variants: {
      animationType: {
        fade: "opacity-30 scale-100 hover:opacity-100 hover:scale-100", // Fade with scaling
        shake: "transform hover:animate-shake", // Shake animation
        scaleUp: "scale-75 hover:scale-100 " , // Scale up animation
        scaleDown: "scale-100 hover:scale-75", // Scale down animation
        slideTop: "translate-y-[-25px] opacity-100 hover:translate-y-0 hover:opacity-100", // Slide top animation
        slideBottom: "translate-y-[25px] opacity-100 hover:translate-y-0 hover:opacity-100", // Slide bottom animation
        slideLeft: "translate-x-[-80px] opacity-100 hover:translate-x-0 hover:opacity-100", // Slide left animation
        slideRight: "translate-x-20 opacity-100 hover:translate-x-0 hover:opacity-100", // Slide right animation
      },
    },
    defaultVariants: {
      animationType: "fade", // Default animation type is fade
    },
  }
);

type AnimationProps = {
  animationType?: "fade" | "shake" | "scaleUp" | "scaleDown" | "slideTop" | "slideBottom" | "slideLeft" | "slideRight"; // Expanded animation types
  children: React.ReactNode;
  className?: string;
};

const Animation = forwardRef<HTMLDivElement, AnimationProps>(
  ({ animationType = "fade", children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(animationStyles({ animationType }), className)} // Apply animation styles
      >
        {children}
      </div>
    );
  }
);

Animation.displayName = "Animation";

export default Animation;
