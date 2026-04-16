// components/sections/Stack.tsx
"use client";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const techStack = [
  // 🚀 Core Frontend (Your Main Expertise)
  {
    name: "Next.js",
    image: "/stack/nextjs.svg",
    hasImage: true,
    invertOnDark: true,
  },
  {
    name: "React",
    image: "/stack/react.svg",
    hasImage: true,
    invertOnDark: false,
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

  // 📱 Mobile Development (Highlight kamu)
  {
    name: "Dart",
    image: "/stack/dart.svg",
    hasImage: true,
    invertOnDark: false,
  },

  // 🔙 Backend & Services
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

  // 🎮 Game Development (Strong Differentiator)
  {
    name: "Unity",
    image: "/stack/unity6.svg",
    hasImage: true,
    invertOnDark: true,
  },
  {
    name: "C#",
    image: "/stack/csharp.svg",
    hasImage: true,
    invertOnDark: false,
  },
  {
    name: "Blender",
    image: "/stack/blender.svg",
    hasImage: true,
    invertOnDark: false,
  },

  // 🧠 AI & Data
  {
    name: "Python",
    image: "/stack/python.svg",
    hasImage: true,
    invertOnDark: false,
  },
  {
    name: "TensorFlow",
    image: "/stack/tensorflow.svg",
    hasImage: true,
    invertOnDark: false,
  },

  // 🧩 Additional Languages
  {
    name: "C++",
    image: "/stack/cpp.svg",
    hasImage: true,
    invertOnDark: false,
  },

  // 🎨 Creative Tools (Last, karena bukan core dev)
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
        <CardBody className="relative group/card !w-[180px] !h-[200px] rounded-xl p-6 border flex flex-col items-center justify-center bg-gray-100 border-black/20 dark:bg-gray-800 dark:border-white/20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
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
                className={`w-full h-full object-contain transition-all duration-300 filter drop-shadow-[0_6px_10px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)] ${tech.invertOnDark ? "dark:invert" : ""}`}
                width={64}
                height={64}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                {tech.name.charAt(0)}
              </div>
            )}
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-lg font-bold text-center text-neutral-800 dark:text-white"
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
