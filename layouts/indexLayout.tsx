import { useMemo, useState } from "react";
import Navbar from "../components/navbar";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

export default function IndexLayout({ children }) {
  const [theme, setTheme] = useState("light");
  const themeFunc = (theme: string) => {
    setTheme(theme);
  };

  const particlesOptions = useMemo((): ISourceOptions => {
    const color = theme == "dark" ? "#FFFFFF" : "#000000";
    return {
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            width: 1803,
            height: 1000,
          },
        },
        paint: {
          fill: {
            enable: true,
            color: { value: color },
          },
          stroke: {
            width: 2,
            color: { value: color },
          },
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.4008530152163807,
        },
        size: {
          value: { min: 1, max: 1.5 },
        },
        links: {
          enable: true,
          distance: 150,
          color: color,
          opacity: 0.3687847739990702,
          width: 0.6413648243462091,
        },
        move: {
          enable: true,
          speed: 4,
          direction: "none",
          random: false,
          straight: false,
          outModes: "out",
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 0.4,
          },
          push: {
            quantity: 5,
          },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  return (
    <div>
      <Navbar themeFunc={themeFunc} />
      <div className="w-full absolute left-0 lg:visible invisible">
        <ParticlesProvider init={initParticles}>
          <Particles options={particlesOptions} />
        </ParticlesProvider>
      </div>
      {children}
    </div>
  );
}
