
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Button = forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "slot" : "button";
    
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden";
    
    const variants = {
      default: "button-primary",
      secondary: "button-secondary",
      outline: "border border-black text-black hover:bg-black/5 transition-all",
      ghost: "text-black hover:bg-black/5 transition-colors",
      link: "text-black underline-offset-4 hover:underline transition-colors",
    };
    
    const sizes = {
      default: "px-6 py-3 rounded-lg",
      sm: "px-4 py-2 text-sm rounded-md",
      lg: "px-8 py-4 text-lg rounded-lg",
      icon: "h-9 w-9 rounded-full",
    };
    
    return (
      <Comp
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {props.children}
        {variant === "default" && (
          <span className="absolute inset-0 w-full h-full transition-all bg-white/[0.2] scale-x-0 origin-left group-hover:scale-x-100"></span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;
