// components/sections/Stack.tsx
"use client";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const techStack = [
  // Frontend Development
  {
    name: "React",
    image: "/stack/react.svg",
    hasImage: true,
    invertOnDark: false,
  },
  {
    name: "Next.js",
    image: "/stack/nextjs.svg",
    hasImage: true,
    invertOnDark: true,
  },
  {
    name: "TypeScript",
    image: "/stack/typescript.svg",
    hasImage: true,
    invertOnDark: false,
  },
  {
    name: "Tailwind CSS",
    image: "/stack/tailwind.svg",
    hasImage: true,
    invertOnDark: false,
  },

  // Backend & Database
  {
    name: "Node.js",
    image: "/stack/nodejs.svg",
    hasImage: true,
    invertOnDark: false,
  },
  {
    name: "Firebase",
    image: "/stack/firebase.svg",
    hasImage: true,
    invertOnDark: false,
  },
  {
    name: "Supabase",
    image: "/stack/supabase.svg",
    hasImage: true,
    invertOnDark: false,
  },

  // Programming Languages
  {
    name: "Python",
    image: "/stack/python.svg",
    hasImage: true,
    invertOnDark: false,
  },
  {
    name: "C#",
    image: "/stack/csharp.svg",
    hasImage: true,
    invertOnDark: false,
  },
  { name: "C++", image: "/stack/cpp.svg", hasImage: true, invertOnDark: false },
  {
    name: "Dart",
    image: "/stack/dart.svg",
    hasImage: true,
    invertOnDark: false,
  },

  // AI & Machine Learning
  {
    name: "TensorFlow",
    image: "/stack/tensorflow.svg",
    hasImage: true,
    invertOnDark: false,
  },

  // Game Development & 3D
  {
    name: "Unity",
    image: "/stack/unity.svg",
    hasImage: true,
    invertOnDark: true,
  },
  {
    name: "Blender",
    image: "/stack/blender.svg",
    hasImage: true,
    invertOnDark: false,
  },

  // Design & Creative
  {
    name: "Illustrator",
    image: "/stack/illustrator.svg",
    hasImage: true,
    invertOnDark: false,
  },
  {
    name: "Premiere",
    image: "/stack/premiere.svg",
    hasImage: true,
    invertOnDark: false,
  },
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * index },
  }),
};

function TechCard({
  tech,
  index,
}: {
  tech: (typeof techStack)[0];
  index: number;
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldInvert = mounted && tech.invertOnDark && theme === "dark";

  const cardBgClass =
    mounted && theme === "light"
      ? "bg-gray-100"
      : mounted && theme === "dark"
      ? "bg-black/30"
      : "bg-grey-100";

  const borderClass =
    mounted && theme === "dark" ? "border-white/20" : "border-black/10";

  const textClass =
    mounted && theme === "dark" ? "text-white" : "text-neutral-800";

  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="flex justify-center"
    >
      <CardContainer className="inter-var" containerClassName="py-2">
        <CardBody
          className={`relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] !w-[180px] !h-[200px] rounded-xl p-6 border flex flex-col items-center justify-center ${cardBgClass} ${borderClass}`}
        >
          <CardItem
            translateZ="150"
            rotateX={20}
            rotateZ={15}
            className="w-20 h-20 mb-4"
          >
            {tech.hasImage ? (
              <Image
                src={tech.image}
                alt={tech.name}
                className="w-full h-full object-contain transition-all duration-300"
                width={64}
                height={64}
                style={{
                  filter: shouldInvert ? "invert(100%)" : "none",
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                {tech.name.charAt(0)}
              </div>
            )}
          </CardItem>
          <CardItem
            translateZ="50"
            className={`text-lg font-bold text-center ${textClass}`}
          >
            {tech.name}
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}

export function StackSection() {
  return (
    <section id="stack" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
