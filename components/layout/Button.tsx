import type * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

function Button({ className = "", variant = "default", size = "default", ...props }: ButtonProps) {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"

  // Variant styles
  const variantStyles = {
    default: "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl hover:scale-105",
    destructive: "bg-red-600 text-white shadow-lg hover:bg-red-700 hover:shadow-xl hover:scale-105",
    outline:
      "border-2 border-primary/20 bg-background shadow-md hover:bg-primary/10 hover:border-primary/40 hover:scale-105",
    secondary: "bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/80 hover:shadow-xl hover:scale-105",
    ghost: "hover:bg-accent/50 hover:text-accent-foreground hover:scale-105",
    link: "text-primary underline-offset-4 hover:underline hover:scale-105",
  }

  // Size styles
  const sizeStyles = {
    default: "h-11 px-8 py-2.5",
    sm: "h-9 px-6 text-xs",
    lg: "h-14 px-10 text-base",
    icon: "h-11 w-11",
  }

  // Combine all styles
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return <button className={combinedClassName} {...props} />
}

export { Button }
