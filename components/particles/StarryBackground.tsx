"use client";

import { useCallback, useEffect } from "react";
import { useTheme } from "next-themes";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

interface StarryBackgroundProps {
  className?: string;
}

const StarryBackground = ({ className }: StarryBackgroundProps) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="starry-particles"
      className={`absolute inset-0 z-0 ${className || ""}`}
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: isDarkMode
              ? [
                  "#ffffff",
                  "#f0f8ff",
                  "#e6f3ff",
                  "#cce6ff",
                  "#b3d9ff",
                  "#99ccff",
                  "#80bfff",
                  "#66b2ff",
                  "#4da6ff",
                  "#3399ff",
                  "#1a8cff",
                  "#0080ff",
                  "#0066cc",
                  "#004d99",
                  "#003366",
                ]
              : [
                  "#000000",
                  "#1a1a1a",
                  "#333333",
                  "#4d4d4d",
                  "#666666",
                  "#808080",
                  "#999999",
                  "#b3b3b3",
                  "#cccccc",
                  "#e6e6e6",
                ],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: false,
            },
          },
          size: {
            value: { min: 0.6, max: 1.4 },
            random: true,
            animation: {
              enable: false,
            },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: false,
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
            resize: true,
          },
        },
        detectRetina: true,
        background: {
          color: {
            value: "transparent",
          },
        },
      }}
    />
  );
};

export default StarryBackground;
