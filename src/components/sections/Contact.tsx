// components/sections/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Hubungi Saya
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Ada pertanyaan atau proyek yang ingin didiskusikan?
        </p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Nama</Label>
            <Input id="name" placeholder="Budi" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Budi@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Pesan</Label>
            <Input id="message" placeholder="Pesan Anda..." className="h-24" />
          </div>
          <Button type="submit" className="w-full mt-2" size="lg">
            Kirim Pesan
          </Button>
        </motion.form>
      </div>
      <BackgroundBeams />
    </section>
  );
}
