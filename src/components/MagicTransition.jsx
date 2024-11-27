import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function MagicTransition({ onComplete }) {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 3 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-40"
    >
      <Particles
        id="magic-particles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0
          },
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#3B82F6", "#8B5CF6", "#6366F1"]
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 3,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.3,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#3B82F6",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 200,
                size: 6,
                duration: 0.3,
                opacity: 1,
                speed: 3
              }
            }
          },
          retina_detect: true,
          background: {
            color: "#000",
            opacity: 0
          }
        }}
        className="absolute inset-0 w-full h-full"
      />
    </motion.div>
  );
}