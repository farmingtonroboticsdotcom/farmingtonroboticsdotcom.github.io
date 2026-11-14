import { useEffect, useState } from "react";

import styles from "./Countdown.module.scss";

type CountdownProps = {
    //takes number as input
    targetEpoch: number;
    eventName?: string;
    knowDate?: boolean;
    label?: string;
    className?: string;
    id?: string;
};

export default function Countdown({targetEpoch, eventName, knowDate=true, label, className, id}: CountdownProps) {
    //main function
    const [time, setTimeText] = useState("00d 00h 00m 00s"); //used to change time
    const [hidden, setHidden] = useState(false);
    const targetDate = new Date(targetEpoch);
    const formatDate = targetDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    useEffect(() => {
        //updates timer every second
        function updateTime() {
            const difference = targetEpoch - new Date().getTime();
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            if (difference <= 0) {
                setHidden(true);
                return;
            }
            setTimeText(
                `${days.toString().padStart(2, "0")}d  ${hours
                    .toString()
                    .padStart(2, "0")}h  ${minutes
                    .toString()
                    .padStart(2, "0")}m  ${seconds
                    .toString()
                    .padStart(2, "0")}s`
            );
        }

        updateTime();

        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        //What the user sees when component is used
        <div className={styles.container}>
            <span className={styles.header}>
                {eventName ?? `Time remaining until ${formatDate}`}
            </span>
            <span className={styles.timer}>
                {hidden ? "Event has started!" : !knowDate ? "Date not provided yet" : time}
            </span>
        </div>
    );
}
