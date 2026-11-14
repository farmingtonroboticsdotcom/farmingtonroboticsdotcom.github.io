import styles from './timeline.module.scss';

export type TimelineProps = {
    years: number[],
    currentYear: number,
    currentProgress: number
}

export default function Timeline({ years, currentYear, currentProgress }: TimelineProps) {
    const currentYearIndex = Math.max(0, years.indexOf(currentYear));
    const normalizedProgress = Math.min(1, Math.max(0, currentProgress));
    const playheadPosition = years.length === 0
        ? 0
        : ((currentYearIndex + normalizedProgress) / years.length) * 100;

    return (
        <div className={styles.timeline}>
            <div className={styles.playhead} style={{ left: `${playheadPosition}%` }} aria-hidden="true">
                <div className={styles.playheadLine}/>
            </div>
            {
                years.map(year => (
                    <div className={styles.year} key={year}>
                        <span className={styles.yearLabel}>{year}</span>
                    </div>
                ))
            }
        </div>
    );
}
