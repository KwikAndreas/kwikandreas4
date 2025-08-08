"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Calendar } from "lucide-react";

export type TimelineItem = {
  title: string;
  description: string;
  date: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
};

interface TimelineProps {
  data: TimelineItem[];
  showProgressively?: boolean;
  staggerDelay?: number;
  className?: string;
}

export function Timeline({
  data,
  showProgressively = false,
  staggerDelay = 0.2,
  className = "",
}: TimelineProps) {
  const timelineRef = useRef<HTMLOListElement>(null);
  const isInView = useInView(timelineRef, {
    once: true,
    margin: "-50px 0px -50px 0px",
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: showProgressively ? staggerDelay : 0,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  };

  const dotVariants: Variants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.ol
      ref={timelineRef}
      className={`relative border-l-2 border-accent-blue dark:border-accent-blue-dark ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Animated timeline line */}
      <motion.div
        className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-accent-blue to-accent-blue/30 dark:from-accent-blue-dark dark:to-accent-blue-dark/30 -ml-px"
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {data.map((item, idx) => {
        const IconComponent = item.icon || Calendar;

        return (
          <motion.li
            key={idx}
            className="mb-10 ml-6 relative group"
            variants={itemVariants}
          >
            {/* Timeline dot with enhanced animation */}
            <motion.span
              className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ${
                item.color || "bg-accent-blue dark:bg-accent-blue-dark"
              } ring-4 ring-white dark:ring-gray-900 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              variants={dotVariants}
            >
              <IconComponent className="h-3 w-3 text-white" />
            </motion.span>

            {/* Content with improved animations */}
            <motion.div
              className="flex flex-col gap-2 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-accent-blue/50 dark:hover:border-accent-blue-dark/50 transition-all duration-300 hover:shadow-md"
              whileHover={{
                y: -2,
                transition: { duration: 0.2 },
              }}
            >
              <motion.h3
                className="text-lg font-semibold text-accent-blue dark:text-accent-blue-dark group-hover:text-accent-blue/80 dark:group-hover:text-accent-blue-dark/80 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: showProgressively ? idx * staggerDelay + 0.4 : 0.4,
                }}
              >
                {item.title}
              </motion.h3>

              <motion.time
                className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: showProgressively ? idx * staggerDelay + 0.5 : 0.5,
                }}
              >
                <Calendar className="w-3 h-3" />
                {item.date}
              </motion.time>

              <motion.p
                className="text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: showProgressively ? idx * staggerDelay + 0.6 : 0.6,
                }}
              >
                {item.description}
              </motion.p>
            </motion.div>

            {/* Connecting line to next item */}
            {idx < data.length - 1 && (
              <motion.div
                className="absolute left-0 top-6 w-0.5 h-10 bg-gradient-to-b from-accent-blue/50 to-transparent dark:from-accent-blue-dark/50 -ml-px"
                initial={{ scaleY: 0, originY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: showProgressively ? idx * staggerDelay + 0.8 : 0.8,
                }}
              />
            )}
          </motion.li>
        );
      })}
    </motion.ol>
  );
}
