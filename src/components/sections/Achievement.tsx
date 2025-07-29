"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Award,
  Trophy,
  Calendar,
  Building,
  ExternalLink,
  Crown,
  Zap,
  Eye,
} from "lucide-react";

const AchievementList = [
  {
    id: 1,
    title: "KKNI Level 2 Kompetensi Keahlian Multimedia",
    description:
      "Sertifikat kompetensi nasional untuk keahlian multimedia yang diakui industri, mencakup penguasaan desain grafis, video editing, dan pengembangan konten digital.",
    organization: "Lembaga Sertifikasi Profesi (LSP)",
    date: "March 2023",
    category: "certification",
    level: "National",
    src: "/certificate/Logo-BNSP.webp",
    icon: Award,
    color: "bg-blue-500",
    verified: true,
  },
  {
    id: 2,
    title: "Advanced Python Programming (GOLD)",
    description:
      "Sertifikat tingkat lanjut untuk pengembangan Python dengan prestasi GOLD, menguasai algoritma kompleks, data structures, dan framework modern.",
    organization: "Samsung Innovation Campus (SIC)",
    date: "March 2024",
    category: "certification",
    level: "National",
    src: "/certificate/Python_Lanjutan.png",
    icon: Crown,
    color: "bg-red-500",
    verified: true,
  },
  {
    id: 3,
    title: "Algorithm & Data Structures with Python (Gold)",
    description:
      "Sertifikat tingkat lanjut untuk pengembangan Python dengan prestasi GOLD, menguasai algoritma kompleks, data structures, dan framework modern.",
    organization: "Samsung Innovation Campus (SIC)",
    date: "March 2024",
    category: "certification",
    level: "National",
    src: "/certificate/Algorithm_&_Data_Structures_with_Python.png",
    icon: Crown,
    color: "bg-red-500",
    verified: true,
  },
  {
    id: 4,
    title: "Ghost in the Database",
    description:
      "Kursus yang mengajari kemampuan dalam keamanan database",
    organization: "JadiHacker",
    date: "November 2024",
    category: "Course",
    level: "National",
    src: "/certificate/GHOSTS_IN_THE_DATABASE.png",
    icon: Trophy,
    color: "bg-orange-500",
    verified: true,
  },
  {
    id: 5,
    title: "Linux System Administration",
    description:
      "Sertifikat profesional dalam administrasi sistem Linux",
    organization: "Boer Technology (Btech)",
    date: "December 2024",
    category: "certification",
    level: "National",
    src: "/certificate/LinuxSystemAdministration.png",
    icon: Trophy,
    color: "bg-green-700",
    verified: true,
  },
  {
    id: 6,
    title: "AI-Based Game Design 3rd Place",
    description:
      "Posisi ke-3 pada lomba pengembangan game berbasis AI",
    organization: "Indonesia Digital Innovation",
    date: "May 2025",
    category: "achievement",
    level: "National",
    src: "/certificate/Technofest_2025_UBM.jpg",
    icon: Trophy,
    color: "bg-cyan-500",
    verified: true,
  },
];

export default function AchievementCard({
  achievement,
  index,
}: {
  achievement: (typeof AchievementList)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: true,
    margin: "-50px 0px -50px 0px",
  });

  const IconComponent = achievement.icon;

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "certification":
        return {
          label: "Sertifikat",
          color: "bg-blue-500/20 text-blue-600 border-blue-500/30",
        };
      case "achievement":
        return {
          label: "Prestasi",
          color: "bg-orange-500/20 text-orange-600 border-orange-500/30",
        };
      default:
        return {
          label: "Lainnya",
          color: "bg-gray-500/20 text-gray-600 border-gray-500/30",
        };
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "International":
        return {
          label: "Internasional",
          color: "bg-purple-500/20 text-purple-600 border-purple-500/30",
        };
      case "National":
        return {
          label: "Nasional",
          color: "bg-green-500/20 text-green-600 border-green-500/30",
        };
      default:
        return {
          label: "Lokal",
          color: "bg-gray-500/20 text-gray-600 border-gray-500/30",
        };
    }
  };

  const categoryBadge = getCategoryBadge(achievement.category);
  const levelBadge = getLevelBadge(achievement.level);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        damping: 25,
        stiffness: 120,
      }}
      className="group"
    >
      <Card className="h-min overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={achievement.src}
            alt={achievement.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110 bg-white"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-8 w-8 p-0 backdrop-blur-sm"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={achievement.src}
                    alt={achievement.title}
                    fill
                    className="object-contain rounded-lg bg-white"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div
            className={`absolute top-3 left-3 h-10 w-10 rounded-full ${achievement.color} flex items-center justify-center shadow-lg`}
          >
            <IconComponent className="h-5 w-5 text-white" />
          </div>

          {achievement.verified && (
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-emerald-500/90 text-white border-0 text-xs">
                ✓ Verified
              </Badge>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge
              variant="outline"
              className={`text-xs ${categoryBadge.color} border`}
            >
              {categoryBadge.label}
            </Badge>
            <Badge
              variant="outline"
              className={`text-xs ${levelBadge.color} border`}
            >
              {levelBadge.label}
            </Badge>
          </div>

          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
            {achievement.title}
          </h3>

          <div className="flex flex-col gap-2 mb-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span className="font-medium">{achievement.organization}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{achievement.date}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {achievement.description}
          </p>

          <div className="mt-4 pt-4 border-t border-border/50">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group/btn"
                >
                  <span>Lihat Detail</span>
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={achievement.src}
                      alt={achievement.title}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {achievement.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className={`${categoryBadge.color} border`}
                        >
                          {categoryBadge.label}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`${levelBadge.color} border`}
                        >
                          {levelBadge.label}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Building className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">
                          {achievement.organization}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function AchievementSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            🏆 Achievements & Certifications
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Prestasi &<span className="block text-primary">Sertifikat</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Koleksi sertifikat profesional dan prestasi yang telah diraih selama
            perjalanan karir sebagai developer dan professional IT.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AchievementList.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Continuous Learning</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Selalu belajar dan mengembangkan skill baru untuk mengikuti
              perkembangan teknologi terkini.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>More achievements coming soon...</span>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
