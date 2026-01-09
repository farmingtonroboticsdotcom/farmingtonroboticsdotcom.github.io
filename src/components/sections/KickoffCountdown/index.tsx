import ScrollAnimation from "react-animate-on-scroll";

import styles from "./KickoffCountdown.module.scss";

import Countdown from "@/components/common/Countdown";

// import rebuiltBanner from "@assets/images/photos/2026_first_age.jpg";

export default function KickoffCountdown() {
    return (
        <div className={styles.container}>
            {/* <img
                src={rebuiltBanner}
                className={styles.banner}
                alt="REBUILT Banner"
            /> */}
            <div className={styles.banner}></div>
            <div className={styles.overlay}>
                <Countdown
                    targetEpoch={1768064400000}
                    label="REBUILT Kickoff - Jan 10"
                />
                <ScrollAnimation
                    offset={9999}
                    animateOnce
                    animateIn="fadeInUp"
                    duration={0.5}
                    delay={0}
                >
                    {/* <p className={styles.title}></p> */}
                </ScrollAnimation>
            </div>
        </div>
    );
}
