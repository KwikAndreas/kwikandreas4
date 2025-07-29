// // components/sections/ChangeLog.tsx
// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import {
//   GraduationCap,
//   Briefcase,
//   Award,
//   Code2,
//   Building,
//   Star,
//   Calendar,
//   MapPin,
//   Trophy,
//   BookOpen,
//   Zap,
// } from "lucide-react";

// export type LifeTimelineItem = {
//   title: string;
//   organization: string;
//   description: string;
//   date: string;
//   location?: string;
//   icon?: React.ComponentType<{ className?: string }>;
//   category: "education" | "work" | "certification" | "achievement" | "project";
//   status?: "completed" | "ongoing" | "upcoming";
// };

// const lifeTimelineData: LifeTimelineItem[] = [
//   {
//     title: "Full-Stack Web Developer",
//     organization: "PT. Tech Innovation",
//     description:
//       "Mengembangkan aplikasi web modern menggunakan React, Next.js, dan Node.js. Bertanggung jawab dalam membangun sistem manajemen konten dan aplikasi e-commerce dengan performa tinggi.",
//     date: "2024 - Sekarang",
//     location: "Jakarta, Indonesia",
//     icon: Briefcase,
//     category: "work",
//     status: "ongoing",
//   },
//   {
//     title: "Sertifikat AWS Solutions Architect",
//     organization: "Amazon Web Services",
//     description:
//       "Menyelesaikan sertifikasi AWS Solutions Architect Associate, menguasai cloud computing, deployment, dan infrastructure management di AWS platform.",
//     date: "September 2024",
//     location: "Online",
//     icon: Award,
//     category: "certification",
//     status: "completed",
//   },
//   {
//     title: "Frontend Developer",
//     organization: "CV. Digital Creative",
//     description:
//       "Membangun user interface yang responsif dan interaktif menggunakan React, TypeScript, dan Tailwind CSS. Kolaborasi dengan tim design dan backend untuk menghasilkan produk digital berkualitas.",
//     date: "2023 - 2024",
//     location: "Bandung, Indonesia",
//     icon: Code2,
//     category: "work",
//     status: "completed",
//   },
//   {
//     title: "Sarjana Teknik Informatika",
//     organization: "Universitas Teknologi Indonesia",
//     description:
//       "Menyelesaikan pendidikan S1 dengan fokus pada pengembangan software, algoritma dan struktur data, serta sistem basis data. IPK: 3.75/4.00",
//     date: "2019 - 2023",
//     location: "Bandung, Indonesia",
//     icon: GraduationCap,
//     category: "education",
//     status: "completed",
//   },
//   {
//     title: "Juara 2 Hackathon Nasional",
//     organization: "Indonesia Digital Innovation",
//     description:
//       "Meraih juara 2 dalam kompetisi pengembangan aplikasi mobile untuk solusi smart city dengan tim yang terdiri dari 4 orang developer.",
//     date: "Agustus 2023",
//     location: "Jakarta, Indonesia",
//     icon: Trophy,
//     category: "achievement",
//     status: "completed",
//   },
//   {
//     title: "Sertifikat React Developer",
//     organization: "Meta (Facebook)",
//     description:
//       "Menyelesaikan program sertifikasi React Developer dari Meta, menguasai advanced React patterns, state management, dan performance optimization.",
//     date: "Juli 2023",
//     location: "Online",
//     icon: Award,
//     category: "certification",
//     status: "completed",
//   },
//   {
//     title: "Magang Software Developer",
//     organization: "PT. Startup Teknologi",
//     description:
//       "Program magang selama 6 bulan sebagai software developer, berkontribusi dalam pengembangan aplikasi fintech dan pembelajaran teknologi modern.",
//     date: "2022 - 2023",
//     location: "Jakarta, Indonesia",
//     icon: Building,
//     category: "work",
//     status: "completed",
//   },
//   {
//     title: "SMK Teknik Komputer dan Jaringan",
//     organization: "SMKN 1 Bandung",
//     description:
//       "Menyelesaikan pendidikan menengah kejuruan dengan jurusan Teknik Komputer dan Jaringan. Mendapatkan dasar-dasar programming dan networking.",
//     date: "2016 - 2019",
//     location: "Bandung, Indonesia",
//     icon: BookOpen,
//     category: "education",
//     status: "completed",
//   },
// ];

// function LifeTimelineItemComponent({
//   item,
//   index,
//   isVisible,
// }: {
//   item: LifeTimelineItem;
//   index: number;
//   isVisible: boolean;
// }) {
//   const itemRef = useRef<HTMLLIElement>(null);
//   const isInView = useInView(itemRef, {
//     once: true,
//     margin: "-50px 0px -50px 0px",
//   });

//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case "education":
//         return "bg-blue-500 border-blue-400";
//       case "work":
//         return "bg-green-500 border-green-400";
//       case "certification":
//         return "bg-purple-500 border-purple-400";
//       case "achievement":
//         return "bg-yellow-500 border-yellow-400";
//       case "project":
//         return "bg-red-500 border-red-400";
//       default:
//         return "bg-gray-500 border-gray-400";
//     }
//   };

//   const getCategoryBadge = (category: string) => {
//     switch (category) {
//       case "education":
//         return {
//           label: "Pendidikan",
//           color: "bg-blue-500/20 text-blue-600 border-blue-500/30",
//         };
//       case "work":
//         return {
//           label: "Karir",
//           color: "bg-green-500/20 text-green-600 border-green-500/30",
//         };
//       case "certification":
//         return {
//           label: "Sertifikat",
//           color: "bg-purple-500/20 text-purple-600 border-purple-500/30",
//         };
//       case "achievement":
//         return {
//           label: "Prestasi",
//           color: "bg-yellow-500/20 text-yellow-600 border-yellow-500/30",
//         };
//       case "project":
//         return {
//           label: "Proyek",
//           color: "bg-red-500/20 text-red-600 border-red-500/30",
//         };
//       default:
//         return {
//           label: "Lainnya",
//           color: "bg-gray-500/20 text-gray-600 border-gray-500/30",
//         };
//     }
//   };

//   const getStatusBadge = (status: string = "completed") => {
//     switch (status) {
//       case "ongoing":
//         return {
//           label: "Berlangsung",
//           color: "bg-emerald-500/20 text-emerald-600 border-emerald-500/30",
//         };
//       case "upcoming":
//         return {
//           label: "Akan Datang",
//           color: "bg-orange-500/20 text-orange-600 border-orange-500/30",
//         };
//       case "completed":
//       default:
//         return {
//           label: "Selesai",
//           color: "bg-slate-500/20 text-slate-600 border-slate-500/30",
//         };
//     }
//   };

//   const IconComponent = item.icon || Star;
//   const categoryBadge = getCategoryBadge(item.category);
//   const statusBadge = getStatusBadge(item.status);

//   return (
//     <motion.li
//       ref={itemRef}
//       className="mb-8 ml-8 relative"
//       initial={{ opacity: 0, x: -50 }}
//       animate={
//         isInView && isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
//       }
//       transition={{
//         duration: 0.8,
//         delay: index * 0.15,
//         type: "spring",
//         damping: 25,
//         stiffness: 120,
//       }}
//     >
//       {/* Timeline dot */}
//       <motion.span
//         className={`absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ${getCategoryColor(
//           item.category
//         )} ring-4 ring-white dark:ring-gray-900 shadow-lg`}
//         initial={{ scale: 0, rotate: -180 }}
//         animate={
//           isInView && isVisible
//             ? { scale: 1, rotate: 0 }
//             : { scale: 0, rotate: -180 }
//         }
//         transition={{
//           duration: 0.6,
//           delay: index * 0.15 + 0.3,
//           type: "spring",
//           damping: 15,
//           stiffness: 200,
//         }}
//       >
//         <IconComponent className="h-4 w-4 text-white" />
//       </motion.span>

//       {/* Content card */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={
//           isInView && isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//         }
//         transition={{
//           duration: 0.6,
//           delay: index * 0.15 + 0.4,
//         }}
//       >
//         <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
//           <div className="flex flex-col gap-4">
//             {/* Header */}
//             <div className="flex items-start justify-between flex-wrap gap-2">
//               <div className="flex-1">
//                 <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
//                   {item.title}
//                 </h3>
//                 <p className="text-lg font-semibold text-primary/80 mb-2">
//                   {item.organization}
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <Badge
//                   variant="outline"
//                   className={`text-xs px-3 py-1 ${categoryBadge.color} border`}
//                 >
//                   {categoryBadge.label}
//                 </Badge>
//                 <Badge
//                   variant="outline"
//                   className={`text-xs px-3 py-1 ${statusBadge.color} border`}
//                 >
//                   {statusBadge.label}
//                 </Badge>
//               </div>
//             </div>

//             {/* Date and Location */}
//             <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-4 h-4" />
//                 <span className="font-medium">{item.date}</span>
//               </div>
//               {item.location && (
//                 <div className="flex items-center gap-2">
//                   <MapPin className="w-4 h-4" />
//                   <span>{item.location}</span>
//                 </div>
//               )}
//             </div>

//             {/* Description */}
//             <p className="text-base text-muted-foreground leading-relaxed">
//               {item.description}
//             </p>
//           </div>
//         </Card>
//       </motion.div>
//     </motion.li>
//   );
// }

// export function ChangeLogSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [visibleItems, setVisibleItems] = useState<number>(0);
//   const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

//   useEffect(() => {
//     if (isInView) {
//       const timer = setInterval(() => {
//         setVisibleItems((prev) => {
//           if (prev < lifeTimelineData.length) {
//             return prev + 1;
//           }
//           clearInterval(timer);
//           return prev;
//         });
//       }, 200);

//       return () => clearInterval(timer);
//     }
//   }, [isInView]);

//   // Calculate statistics
//   const stats = {
//     total: lifeTimelineData.length,
//     education: lifeTimelineData.filter((item) => item.category === "education")
//       .length,
//     work: lifeTimelineData.filter((item) => item.category === "work").length,
//     certifications: lifeTimelineData.filter(
//       (item) => item.category === "certification"
//     ).length,
//     achievements: lifeTimelineData.filter(
//       (item) => item.category === "achievement"
//     ).length,
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="timeline"
//       className="py-24 sm:py-32 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
//         <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <Badge variant="outline" className="mb-4">
//             📋 Personal Journey
//           </Badge>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//             Perjalanan
//             <span className="block text-primary">Hidup & Karir</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Rekam jejak pendidikan, karir, dan pencapaian selama perjalanan
//             menjadi seorang developer profesional.
//           </p>
//         </motion.div>

//         {/* Stats Overview */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
//         >
//           {[
//             {
//               label: "Total Milestone",
//               value: stats.total,
//               icon: Star,
//               color: "text-slate-600",
//             },
//             {
//               label: "Pendidikan",
//               value: stats.education,
//               icon: GraduationCap,
//               color: "text-blue-600",
//             },
//             {
//               label: "Pengalaman Kerja",
//               value: stats.work,
//               icon: Briefcase,
//               color: "text-green-600",
//             },
//             {
//               label: "Sertifikat",
//               value: stats.certifications,
//               icon: Award,
//               color: "text-purple-600",
//             },
//             {
//               label: "Prestasi",
//               value: stats.achievements,
//               icon: Trophy,
//               color: "text-yellow-600",
//             },
//           ].map((stat, index) => (
//             <Card
//               key={index}
//               className="p-4 text-center bg-background/30 backdrop-blur-sm border-border/50 hover:shadow-md transition-all duration-300"
//             >
//               <div className="flex flex-col items-center gap-3">
//                 <stat.icon className={`w-6 h-6 ${stat.color}`} />
//                 <div className="text-2xl font-bold text-foreground">
//                   {stat.value}
//                 </div>
//                 <div className="text-xs text-muted-foreground font-medium">
//                   {stat.label}
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </motion.div>

//         {/* Timeline */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-5xl mx-auto"
//         >
//           <div className="relative">
//             {/* Timeline line */}
//             <motion.div
//               className="absolute left-8 top-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full"
//               initial={{ height: 0 }}
//               animate={isInView ? { height: "100%" } : { height: 0 }}
//               transition={{ duration: 2.5, ease: "easeInOut" }}
//             />

//             {/* Timeline items */}
//             <ol className="relative">
//               {lifeTimelineData.map((item, index) => (
//                 <LifeTimelineItemComponent
//                   key={index}
//                   item={item}
//                   index={index}
//                   isVisible={index < visibleItems}
//                 />
//               ))}
//             </ol>
//           </div>

//           {/* Future Goals */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1 }}
//             viewport={{ once: true }}
//             className="mt-12 text-center"
//           >
//             <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
//               <div className="flex items-center justify-center gap-3 mb-4">
//                 <Zap className="w-6 h-6 text-primary" />
//                 <h3 className="text-xl font-semibold">Goals & Aspirations</h3>
//               </div>
//               <p className="text-muted-foreground mb-4">
//                 Terus berkembang sebagai Full-Stack Developer dengan fokus pada
//                 teknologi cloud, AI, dan sustainable development practices.
//               </p>
//               <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
//                 <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
//                 <span>Always learning, always growing...</span>
//               </div>
//             </Card>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
