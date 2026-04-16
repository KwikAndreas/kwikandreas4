"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.15, delay: 0.2, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Halaman Tidak Ditemukan
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan. Mari
            kembali ke halaman utama atau jelajahi konten lainnya.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali
            </Button>

            <Link href="/projects">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                <Search className="mr-2 h-4 w-4" />
                Lihat Proyek
              </Button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.15, delay: 1 }}
            className="mt-12"
          >
            <div className="flex justify-center items-center space-x-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-200"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Effect */}
      <BackgroundBeams />
    </div>
  );
}
