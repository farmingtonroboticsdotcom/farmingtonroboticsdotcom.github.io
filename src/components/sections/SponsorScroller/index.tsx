import Sponsor, { SponsorProps } from "@/components/features/Sponsor";
import { useEffect, useRef } from "react";

import styles from "./SponsorScroller.module.scss";

// --- Sponsor Data ---
const platSponsors: SponsorProps[] = [
    { name: "Otis", href: "https://www.otis.com/en/us", id: "otis" },
    {
        name: "Gene Haas Foundation",
        href: "https://www.ghaasfoundation.org",
        id: "ghaas",
    },
    {
        name: "Parker",
        href: "https://www.parker.com/us/en/home.html",
        id: "parker",
    },
    { name: "Ed O'Reilly Foundation", href: "", id: "oreilly" },
    {
        name: "Stanley Black & Decker",
        href: "https://www.stanleyblackanddecker.com",
        id: "stanley",
    },
    {
        name: "Connecticut Manufacturing",
        href: "https://www.gotitmadect.com/",
        id: "csde",
    },
];

export default function SponsorScroller() {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const isPaused = useRef(false);
    const velocity = useRef(1);
    const position = useRef(0);
    const rAFid = useRef<number | null>(null);

    const friction = 0.05;
    const speed = 0.08;

    useEffect(() => {
        let mounted = true;

        const animate = () => {
            if (!mounted) return;

            velocity.current += isPaused.current ? -friction : friction;
            velocity.current = Math.max(Math.min(velocity.current, 1), 0);
            position.current += velocity.current * speed; // update pos - quadratic to time
            position.current %= 50; // make sure it doesnt exceed 50%

            if (!isPaused && velocity.current == 0) {
                velocity.current = 0;
            }

            if (scrollRef.current) {
                scrollRef.current.style.transform = `translateX(-${position.current}%)`;
            }

            rAFid.current = requestAnimationFrame(animate);
        };

        rAFid.current = requestAnimationFrame(animate);

        return () => {
            mounted = false;
            if (rAFid.current) cancelAnimationFrame(rAFid.current);
        };
    }, []);

    return (
        <div className={styles.scrollerContainer}>
            <div
                className={styles.scroller}
                onMouseEnter={() => (isPaused.current = true)}
                onMouseLeave={() => (isPaused.current = false)}
            >
                <div className={styles.track} ref={scrollRef}>
                    {[...platSponsors, ...platSponsors].map((sponsor, i) => (
                        <Sponsor
                            {...sponsor}
                            className={styles.sponsor}
                            key={`${sponsor.id}-${i}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
