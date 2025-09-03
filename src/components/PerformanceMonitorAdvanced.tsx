// components/PerformanceMonitorAdvanced.tsx
"use client";
import { useEffect, useState } from "react";

interface PerformanceData {
  loadTime: number;
  memoryUsage: number;
  currentSection: string;
  loadedSections: string[];
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  compact?: boolean;
}

export function PerformanceMonitorAdvanced({ 
  showInProduction = false,
  position = "bottom-right",
  compact = false 
}: PerformanceMonitorProps) {
  const [performance, setPerformance] = useState<PerformanceData>({
    loadTime: 0,
    memoryUsage: 0,
    currentSection: "home",
    loadedSections: ["home"],
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Monitor page load time
    const loadTime = window.performance.now();
    
    // Monitor memory usage (if available)
    const getMemoryUsage = () => {
      if ('memory' in window.performance) {
        return (window.performance as any).memory.usedJSHeapSize / 1024 / 1024; // MB
      }
      return 0;
    };

    setPerformance(prev => ({
      ...prev,
      loadTime: loadTime,
      memoryUsage: getMemoryUsage(),
    }));

    // Update performance data every 5 seconds
    const interval = setInterval(() => {
      setPerformance(prev => ({
        ...prev,
        memoryUsage: getMemoryUsage(),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Control visibility based on environment and props
  const shouldShow = () => {
    if (process.env.NODE_ENV === "development") return true;
    if (showInProduction) return true;
    // You can also check for specific environment variable
    if (process.env.NEXT_PUBLIC_SHOW_MONITOR === "true") return true;
    return false;
  };

  if (!shouldShow()) {
    return null;
  }

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4", 
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4"
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleVisibility}
        className={`fixed ${positionClasses[position]} z-50 w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${isVisible ? 'opacity-50' : ''}`}
        title="Toggle Performance Monitor"
      >
        📊
      </button>

      {/* Performance Panel */}
      {isVisible && (
        <div className={`fixed ${position === "bottom-right" ? "bottom-16 right-4" : position === "bottom-left" ? "bottom-16 left-4" : position === "top-right" ? "top-16 right-4" : "top-16 left-4"} bg-black/90 text-white p-3 rounded-lg text-xs font-mono z-50 backdrop-blur-sm border border-white/30 shadow-lg`}>
          <div className={`space-y-1 ${compact ? 'text-xs' : ''}`}>
            <div className="font-bold text-blue-400 mb-2">⚡ Performance</div>
            <div>🚀 Load: {Math.round(performance.loadTime)}ms</div>
            <div>💾 Memory: {Math.round(performance.memoryUsage)}MB</div>
            <div>📍 Section: {performance.currentSection}</div>
            <div>✅ Loaded: {performance.loadedSections.length}</div>
            <div className="pt-1 border-t border-white/20 text-xs text-gray-400">
              ENV: {process.env.NODE_ENV}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
