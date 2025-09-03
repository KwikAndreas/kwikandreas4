"use client";

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animationType?: "fade" | "slide" | "scale" | "bounce" | "flip";
  direction?: "up" | "down" | "left" | "right";
}

export function AnimatedContainer({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  animationType = "fade",
  direction = "up",
}: AnimatedContainerProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const getVariants = (): Variants => {
    const easingFunction = [0.6, -0.05, 0.01, 0.99] as const;

    const baseVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: easingFunction,
        },
      },
    };

    switch (animationType) {
      case "slide":
        const slideDistance = 50;
        const slideDirections = {
          up: { y: slideDistance },
          down: { y: -slideDistance },
          left: { x: slideDistance },
          right: { x: -slideDistance },
        };
        return {
          hidden: {
            opacity: 0,
            ...slideDirections[direction],
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration,
              delay,
              ease: easingFunction,
            },
          },
        };

      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: easingFunction,
            },
          },
        };

      case "bounce":
        return {
          hidden: { opacity: 0, y: 50, scale: 0.8 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration,
              delay,
              type: "spring",
              bounce: 0.4,
            },
          },
        };

      case "flip":
        return {
          hidden: { opacity: 0, rotateX: 90 },
          visible: {
            opacity: 1,
            rotateX: 0,
            transition: {
              duration,
              delay,
              ease: easingFunction,
            },
          },
        };

      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger animation untuk children
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const easingFunction = [0.6, -0.05, 0.01, 0.99] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easingFunction,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

// Hover animation component
interface HoverAnimationProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  rotateOnHover?: boolean;
}

export function HoverAnimation({
  children,
  className = "",
  scale = 1.05,
  rotateOnHover = false,
}: HoverAnimationProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        rotate: rotateOnHover ? 5 : 0,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}
