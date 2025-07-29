// components/sections/Stack.tsx
"use client";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const techStack = [
  // Frontend Development
  { name: "React", image: "/stack/react.svg", hasImage: true, isInvert: false },
  {
    name: "Next.js",
    image: "/stack/nextjs.svg",
    hasImage: true,
    isInvert: true,
  },
  {
    name: "TypeScript",
    image: "/stack/typescript.svg",
    hasImage: true,
    isInvert: false,
  },
  {
    name: "Tailwind CSS",
    image: "/stack/tailwind.svg",
    hasImage: true,
    isInvert: false,
  },

  // Backend & Database
  {
    name: "Node.js",
    image: "/stack/nodejs.svg",
    hasImage: true,
    isInvert: false,
  },
  {
    name: "Firebase",
    image: "/stack/firebase.svg",
    hasImage: true,
    isInvert: false,
  },
  {
    name: "Supabase",
    image: "/stack/supabase.svg",
    hasImage: true,
    isInvert: false,
  },

  // Programming Languages
  {
    name: "Python",
    image: "/stack/python.svg",
    hasImage: true,
    isInvert: false,
  },
  { name: "C#", image: "/stack/csharp.svg", hasImage: true, isInvert: false },
  { name: "C++", image: "/stack/cpp.svg", hasImage: true, isInvert: false },
  { name: "Dart", image: "/stack/dart.svg", hasImage: true, isInvert: false },

  // AI & Machine Learning
  {
    name: "TensorFlow",
    image: "/stack/tensorflow.svg",
    hasImage: true,
    isInvert: false,
  },

  // Game Development & 3D
  { name: "Unity", image: "/stack/unity.svg", hasImage: true, isInvert: true },
  {
    name: "Blender",
    image: "/stack/blender.svg",
    hasImage: true,
    isInvert: false,
  },

  // Design & Creative
  {
    name: "Illustrator",
    image: "/stack/illustrator.svg",
    hasImage: true,
    isInvert: false,
  },
  {
    name: "Premiere",
    image: "/stack/premiere.svg",
    hasImage: true,
    isInvert: false,
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
        <CardBody className="bg-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/30 dark:border-white/[0.2] border-black/[0.1] w-[180px] h-[200px] rounded-xl p-6 border flex flex-col items-center justify-center">
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
                className="w-full h-full object-contain"
                width={64}
                height={64}
                style={{ filter: tech.isInvert ? "invert(100%)" : "none" }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                {tech.name.charAt(0)}
              </div>
            )}
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-lg font-bold text-neutral-600 dark:text-white text-center"
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
