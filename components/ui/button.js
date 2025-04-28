import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Button = forwardRef(({ className, children, variant = "default", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variant === "default" && "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        variant === "destructive" && "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
