"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/lib/hooks/use-active-section";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "home", type: "section" },
  { name: "About", href: "about", type: "section" },
  { name: "Achievements", href: "achievements", type: "section" },
  { name: "Stack", href: "stack", type: "section" },
  {
    name: "Projects",
    href: "projects",
    type: "dropdown",
    dropdownItems: [
      { name: "Projects", href: "projects", type: "section" },
      { name: "Blog", href: "/blog", type: "page" },
      { name: "Tools", href: "/tools", type: "page" },
    ],
  },
  { name: "Contact", href: "contact", type: "section" },
];

export function FloatingNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const sectionIds = navItems
    .filter((item) => item.type === "section")
    .map((item) => item.name.toLowerCase());
  const activeSection = useActiveSection(sectionIds);

  const isHomePage = pathname === "/";
  const isProjectDetailPage = pathname.startsWith("/projects/");

  const handleNavigation = (item: {
    name: string;
    href: string;
    type: string;
  }) => {
    if (item.type === "section") {
      // If on home page, scroll to section
      if (isHomePage) {
        scrollToSection(item.href);
      } else {
        // Navigate to home page with section hash
        router.push(`/#${item.href}`);
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    } else if (item.type === "page") {
      router.push(item.href);
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [isHomePage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isProjectDetailPage) {
    return null;
  }

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
            <div key={item.href} className="relative">
              {item.type === "dropdown" ? (
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Button
                    variant={activeSection === item.href ? "default" : "ghost"}
                    size="sm"
                    className="relative px-4 py-2 font-medium transition-all duration-200 group flex items-center gap-1"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                    <AnimatePresence>
                      {activeSection === item.href && (
                        <motion.span
                          className="absolute left-0 top-0 w-full h-full rounded-full bg-accent/20 dark:bg-accent/30 -z-10"
                          layoutId="active-section-indicator"
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
                    </AnimatePresence>
                    <span className="absolute left-0 top-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-accent/10 dark:bg-accent/20 transition-all duration-200 -z-20" />
                  </Button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 py-2 min-w-[140px] rounded-xl border border-accent/30 bg-background/90 dark:bg-background/70 backdrop-blur-xl shadow-2xl z-50"
                      >
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <motion.div
                            key={dropdownItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start px-3 py-2 font-medium text-sm hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-200"
                              onClick={() => handleNavigation(dropdownItem)}
                            >
                              {dropdownItem.name}
                            </Button>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Button
                  variant={activeSection === item.href ? "default" : "ghost"}
                  size="sm"
                  className="relative px-4 py-2 font-medium transition-all duration-200 group"
                  onClick={() => handleNavigation(item)}
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
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 26,
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="absolute left-0 top-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-accent/10 dark:bg-accent/20 transition-all duration-200 -z-20" />
                </Button>
              )}
            </div>
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

      {/* Mobile Navigation */}
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
                    {item.type === "dropdown" ? (
                      <div className="space-y-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-between relative px-4 py-3 font-medium transition-all duration-200"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            )
                          }
                        >
                          <span className="relative z-10">{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-1"
                            >
                              {item.dropdownItems?.map(
                                (dropdownItem, dropdownIndex) => (
                                  <motion.div
                                    key={dropdownItem.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.2,
                                      delay: dropdownIndex * 0.05,
                                    }}
                                  >
                                    <Button
                                      variant={
                                        activeSection === dropdownItem.href
                                          ? "default"
                                          : "ghost"
                                      }
                                      size="sm"
                                      className="w-full justify-start relative px-4 py-2 font-medium transition-all duration-200 text-sm"
                                      onClick={() =>
                                        handleNavigation(dropdownItem)
                                      }
                                    >
                                      <span className="relative z-10">
                                        {dropdownItem.name}
                                      </span>
                                      {activeSection === dropdownItem.href && (
                                        <motion.span
                                          className="absolute left-0 top-0 w-full h-full rounded-lg bg-accent/20 dark:bg-accent/30 -z-10"
                                          layoutId="mobile-dropdown-active-section-indicator"
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
                                )
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Button
                        variant={
                          activeSection === item.href ? "default" : "ghost"
                        }
                        size="sm"
                        className="w-full justify-start relative px-4 py-3 font-medium transition-all duration-200"
                        onClick={() => handleNavigation(item)}
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
                    )}
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
