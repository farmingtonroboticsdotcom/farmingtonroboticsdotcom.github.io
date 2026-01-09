import React from "react";

import styles from "./BulletChart.module.scss";
import { clamp } from "@/utils/general";

type BulletChartProps = {
    min?: number;
    max?: number;
    current: number;
    goal: number;
    last?: number;
};

export const BulletChart: React.FC<BulletChartProps> = ({
    min = 0,
    max = 1000,
    current,
    goal,
    last,
}) => {
    max = Math.max(max, goal * 1.2, current * 1.2, (last ?? min) * 1.2);
    const scale = (v: number) => `${((clamp(v, min, max) - min) / (max - min)) * 100}%`;

    return (
        <div className={styles.chart}>
            <div className={styles.track}>
                <div
                    className={styles.current}
                    style={{ width: scale(current) }}
                ></div>
            </div>
            <span
                className={styles.marker + " " + styles.goal}
                style={{ left: scale(goal) }}
            >
                <span className={styles.markerContent}>goal<br />${goal}</span>
            </span>

            {last !== undefined && (
                <span
                    className={styles.marker + " " + styles.last}
                    style={{ left: scale(last) }}
                >
                    <span className={styles.markerContent}>last<br />${last}</span>
                </span>
            )}
        </div>
    );
};
