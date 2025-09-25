"use client";
import type { IconType } from "react-icons";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";

type SocialName = "Facebook" | "Instagram" | "LinkedIn" | "Twitter" | "YouTube";

interface SocialIconProps {
  name: SocialName;
  className?: string; // renk vs. Tailwind (text-[#065AF1])—currentColor
  size?: number;      // ikon boyutu (default 20)
}

const ICONS: Record<SocialName, IconType> = {
  Facebook: RiFacebookFill,
  Instagram: RiInstagramFill,
  LinkedIn: RiLinkedinFill,
  Twitter: RiTwitterXFill,
  YouTube: RiYoutubeFill,
};

export function SocialIcon({ name, className = "text-white", size = 20 }: SocialIconProps) {
  const Icon = ICONS[name];

  return (
    <div
      aria-label={name}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full ${className}`}
    >
      {/* Dış daire (stroke efekti) */}
      <div className="absolute inset-0 rounded-full border border-current/30" />

      {/* İkon (Remix) – currentColor kullanır */}
      <Icon size={size} className="relative opacity-50" />
    </div>
  );
}
