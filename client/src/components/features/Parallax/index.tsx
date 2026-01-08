import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";

import './parallax.scss'

// --- GSAP Plugin Registration ---
gsap.registerPlugin(ScrollTrigger);

export type ParallaxOptions = {
    maxOpacity?: number;
    maxTransform?: number;
    maxBlur?: number;
    defaultBrightness?: number;
    maxSaturation?: number;
}

export type ParallaxProps = {
    foreground: ReactNode;
    background: ReactNode;
    className?: string;
    id?: string;
    options?: ParallaxOptions
}

export default function Parallax({ foreground, background, className, options = {} }: ParallaxProps) {
    // --- Refs ---
    const containerRef = useRef<HTMLDivElement | null>(null);
    const backgroundRef = useRef<HTMLDivElement | null>(null);

    // --- Video Parallax Effect ---
    const applyVideoEffects = (progress: number) => {
        if (!backgroundRef.current) return;
        // Adjust these values as needed

        const maxOpacity = options.maxOpacity ?? 0.6;
        const maxTransform = options.maxTransform ?? 60;
        const maxBlur = options.maxBlur ?? 10;
        const defaultBrightness = options.defaultBrightness ?? 0.8;
        const maxSaturation = options.maxSaturation ?? 300; // is a %

        const easedProgress = 1 - Math.pow(1 - progress, 3); // https://easings.net/#easeOutQuint

        backgroundRef.current.style.opacity = `${(1 - easedProgress) * maxOpacity}`;
        backgroundRef.current.style.transform = `translateY(${progress * maxTransform}%`;
        backgroundRef.current.style.filter = `brightness(${defaultBrightness}) blur(${easedProgress * maxBlur}px) saturate(${(progress * maxSaturation + 100)}%)`;
    };

    // Parallax effect on header video
    useEffect(() => {
        applyVideoEffects(0); // initial state

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => { applyVideoEffects(self.progress); }
            },
        });

        return () => { tl.kill(); };
    }, []);

    return (
        <div className={`parallax-container${className && className.trim() !== '' ? ' ' + className : ''}`} ref={containerRef}>
            <div className="parallax-background" ref={backgroundRef}>
                {background}
            </div>
            <div className="parallax-foreground">
                {foreground}
            </div>
        </div>
    );
}