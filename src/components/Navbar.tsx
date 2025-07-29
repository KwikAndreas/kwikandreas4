import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/lib/hooks/use-active-section";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Achievements", href: "achievements" },
  { name: "Stack", href: "stack" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export function FloatingNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = navItems.map((item) => item.name.toLowerCase());
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState({}, "", "/");
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="flex items-center gap-2 p-3 rounded-full border border-accent/30 bg-background/70 dark:bg-background/40 backdrop-blur-xl shadow-2xl">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={activeSection === item.href ? "default" : "ghost"}
              size="sm"
              className="relative px-4 py-2 font-medium transition-all duration-200 group"
              onClick={() => scrollToSection(item.href)}
            >
              <span className="relative z-10">{item.name}</span>
              <AnimatePresence>
                {activeSection === item.href && (
                  <motion.span
                    className="absolute left-0 top-0 w-full h-full rounded-full bg-accent/20 dark:bg-accent/30 -z-10"
                    layoutId="active-section-indicator"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  />
                )}
              </AnimatePresence>
              <span className="absolute left-0 top-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-accent/10 dark:bg-accent/20 transition-all duration-200 -z-20" />
            </Button>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pl-2"
          >
            <ModeToggle />
          </motion.div>
        </div>
      </motion.nav>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-5 left-4 right-4 z-50 md:hidden"
      >
        <div className="flex items-center justify-between p-3 rounded-2xl border border-accent/30 bg-background/80 dark:bg-background/60 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center">
            <span className="text-lg font-bold text-primary">KwikAndreas</span>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl border border-accent/30 bg-background/90 dark:bg-background/70 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <Button
                      variant={
                        activeSection === item.href ? "default" : "ghost"
                      }
                      size="sm"
                      className="w-full justify-start relative px-4 py-3 font-medium transition-all duration-200"
                      onClick={() => scrollToSection(item.href)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {activeSection === item.href && (
                        <motion.span
                          className="absolute left-0 top-0 w-full h-full rounded-lg bg-accent/20 dark:bg-accent/30 -z-10"
                          layoutId="mobile-active-section-indicator"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 26,
                          }}
                        />
                      )}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
