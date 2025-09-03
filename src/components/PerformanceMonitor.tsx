// components/PerformanceMonitor.tsx
"use client";
import { useEffect, useState } from "react";

interface PerformanceData {
  loadTime: number;
  memoryUsage: number;
  currentSection: string;
  loadedSections: string[];
}

export function PerformanceMonitor() {
  const [performance, setPerformance] = useState<PerformanceData>({
    loadTime: 0,
    memoryUsage: 0,
    currentSection: "home",
    loadedSections: ["home"],
  });

  useEffect(() => {
    // Monitor page load time
    const loadTime = window.performance.now();

    // Monitor memory usage (if available)
    const getMemoryUsage = () => {
      if ("memory" in window.performance) {
        return (window.performance as any).memory.usedJSHeapSize / 1024 / 1024; // MB
      }
      return 0;
    };

    setPerformance((prev) => ({
      ...prev,
      loadTime: loadTime,
      memoryUsage: getMemoryUsage(),
    }));

    // Update performance data every 5 seconds
    const interval = setInterval(() => {
      setPerformance((prev) => ({
        ...prev,
        memoryUsage: getMemoryUsage(),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50 backdrop-blur-sm border border-white/20">
      <div className="space-y-1">
        <div>Load: {Math.round(performance.loadTime)}ms</div>
        <div>Memory: {Math.round(performance.memoryUsage)}MB</div>
        <div>Section: {performance.currentSection}</div>
        <div>Loaded: {performance.loadedSections.length}</div>
      </div>
    </div>
  );
}
