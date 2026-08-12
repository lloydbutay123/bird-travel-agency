import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className,
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary: "bg-[#8dd3bb]",
    secondary: "bg-white hover:text-white",
    outline: "border border-[#3AA9DC]",
    ghost: "",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };
  return (
    <button
      className={`flex items-center justify-center h-12 text-[14px] gap-1 font-medium rounded-sm py-2 px-4 ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      disabled={disabled}
      type={type}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </button>
  );
}
