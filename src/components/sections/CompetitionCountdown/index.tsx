// import ScrollAnimation from "react-animate-on-scroll";

import Countdown from "@/components/common/Countdown";
import styles from "./CompetitionCountdown.module.scss";

import ContentContainer from "@/components/features/ContentContainer";

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
            {/*<div className={styles.overlay}>*/}
            {/*    <Countdown*/}
            {/*        targetEpoch={new Date(2026, 2, 14, 8, 0, 0, 0).getTime()}*/}
            {/*        label="WNE Competition (&pi; day)"*/}
            {/*    />*/}
            {/*    /!* <ScrollAnimation*/}
            {/*        offset={9999}*/}
            {/*        animateOnce*/}
            {/*        animateIn="fadeInUp"*/}
            {/*        duration={0.5}*/}
            {/*        delay={0}*/}
            {/*    >*/}
            {/*        <p className={styles.title}></p> */}
            {/*    </ScrollAnimation> *!/*/}
            {/*</div>*/}

            <ContentContainer>
                {/* <p>A little bit longer</p> */}
                <Countdown 
                    targetEpoch={new Date(2027, 1, 9, 12, 0, 0, 0).getTime()}
                    eventName="Kickoff!!"
                />
            </ContentContainer>
            
            <ContentContainer>
                {/* <p>A little bit longer</p> */}
                <Countdown 
                    targetEpoch={new Date(2027, 2, 14, 8, 0, 0, 0).getTime()}
                    label="WNE District Qualifier"
                    knowDate={false}
                />
            </ContentContainer>

            <ContentContainer>
               <Countdown 
                    targetEpoch={new Date(2027, 2, 14, 8, 0, 0, 0).getTime()}
                    label="Hartford District Qualifier"
                    knowDate={false}
                />
            </ContentContainer>

            <ContentContainer>
                <Countdown 
                    targetEpoch={new Date(2027, 2, 14, 8, 0, 0, 0).getTime()}
                    label="NE District Championship"
                    knowDate={false}
                />
            </ContentContainer>

            <ContentContainer>
                <Countdown 
                    targetEpoch={new Date(2027, 2, 14, 8, 0, 0, 0).getTime()}
                    label="FRC World Championship"
                    knowDate={false}
                />
            </ContentContainer>
        </div>
    );
}
