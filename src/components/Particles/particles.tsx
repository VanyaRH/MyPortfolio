import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import React, { useCallback, useMemo } from "react";
import { Engine } from "tsparticles-engine/types/engine";
import {IParticlesProps} from "react-tsparticles/types/IParticlesProps";
import { loadFull } from "tsparticles";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
export  const ParticlesComponent = (props: IParticlesProps) => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#ffffff",
                    },
                },
                fullScreen: {
                    enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                    zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push"
                        },
                    }
                },
                particles: {
                    color: {
                        value: "#CCCCCC",
                    },
                    links: {
                        color: "#CCCCCC",
                        enable: true,
                    },
                    move: {
                        enable: true,
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 70,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export const MemoizedParticlesComponent = React.memo(ParticlesComponent);