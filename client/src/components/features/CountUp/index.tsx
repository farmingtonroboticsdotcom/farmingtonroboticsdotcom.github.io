import { useState, useEffect } from "react";

export type CountUpProps = {
    goal: number;
    duration?: number; // ms
    power?: number;
};

export default function CountUp({
    goal,
    duration = 3000,
    power = 4,
}: CountUpProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);

            const eased = 1 - Math.pow(1 - t, power); // ease out curve
            const value = Math.floor(eased * goal);

            setCount(value);

            if (t < 1) {
                requestAnimationFrame(tick);
            } else {
                setCount(goal);
            }
        };

        requestAnimationFrame(tick);
    }, [goal, duration, power]);

    return <span>{count}</span>;
}
