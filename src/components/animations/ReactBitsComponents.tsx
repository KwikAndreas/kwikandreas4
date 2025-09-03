"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HoverAnimation } from "./AnimatedContainer";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: GlassCardProps) {
  const baseClasses = `
    relative overflow-hidden rounded-2xl
    bg-white/10 dark:bg-black/10
    backdrop-blur-md backdrop-saturate-150
    border border-white/20 dark:border-white/10
    shadow-lg shadow-black/5
    ${
      glow
        ? "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-500/20 before:via-purple-500/20 before:to-pink-500/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
        : ""
    }
  `;

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className={cn(baseClasses, className)}>{children}</div>
  );

  if (hover) {
    return (
      <HoverAnimation scale={1.02}>
        <Card>{children}</Card>
      </HoverAnimation>
    );
  }

  return <Card>{children}</Card>;
}

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  amplitude?: number;
}

export function FloatingElement({
  children,
  className = "",
  duration = 3,
  amplitude = 10,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: "blue" | "purple" | "pink" | "green" | "orange" | "rainbow";
}

export function GradientText({
  children,
  className = "",
  gradient = "blue",
}: GradientTextProps) {
  const gradients = {
    blue: "from-blue-400 via-blue-500 to-blue-600",
    purple: "from-purple-400 via-purple-500 to-purple-600",
    pink: "from-pink-400 via-pink-500 to-pink-600",
    green: "from-green-400 via-green-500 to-green-600",
    orange: "from-orange-400 via-orange-500 to-orange-600",
    rainbow: "from-blue-400 via-purple-500 to-pink-600",
  };

  return (
    <span
      className={cn(
        `bg-gradient-to-r ${gradients[gradient]} bg-clip-text text-transparent`,
        className
      )}
    >
      {children}
    </span>
  );
}

interface ParticleBackgroundProps {
  className?: string;
  particleCount?: number;
}

export function ParticleBackground({
  className = "",
  particleCount = 50,
}: ParticleBackgroundProps) {
  const particles = Array.from({ length: particleCount }, (_, i) => i);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

interface MorphingShapeProps {
  className?: string;
  color?: string;
}

export function MorphingShape({
  className = "",
  color = "blue",
}: MorphingShapeProps) {
  return (
    <motion.div
      className={cn(
        `absolute rounded-full blur-3xl opacity-30`,
        color === "blue" && "bg-blue-500",
        color === "purple" && "bg-purple-500",
        color === "pink" && "bg-pink-500",
        className
      )}
      animate={{
        scale: [1, 1.2, 0.8, 1],
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ["50%", "25%", "50%", "25%", "50%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

interface NeumorphismCardProps {
  children: React.ReactNode;
  className?: string;
  pressed?: boolean;
}

export function NeumorphismCard({
  children,
  className = "",
  pressed = false,
}: NeumorphismCardProps) {
  const cardStyle = pressed
    ? "shadow-inner shadow-gray-300/50 dark:shadow-gray-700/50"
    : "shadow-lg shadow-gray-300/50 dark:shadow-gray-700/50";

  return (
    <div
      className={cn(
        `rounded-2xl bg-gray-100 dark:bg-gray-800 p-6 transition-shadow duration-300`,
        cardStyle,
        className
      )}
    >
      {children}
    </div>
  );
}
