import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Brand Logo Image */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm`}>
        <img
          src="/logo.png"
          alt="SR Travel Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex items-baseline">
          <span className={`font-black tracking-tight text-slate-900 ${textSizes[size]}`}>
            SR <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">Travel</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 ml-1 self-center" />
        </div>
      )}
    </Link>
  );
}

export default Logo;
