import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { mobileScreen } from "@/utils/general";

import "./history-page.scss";

import Expandable from "@/components/features/Expandable";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import reefscapeImage from "@assets/images/photos/2025_team_photo.jpeg";
import crescendoImage from "@assets/images/photos/2024_team_photo.jpeg";
import chargedUpImage from "@assets/images/photos/2023_team_photo.jpeg";
import rapidReactImage from "@assets/images/photos/2022_team_photo.jpeg";
import gameChangersImage from "@assets/images/photos/2021_team_photo.jpeg";
import infiniteRechargeImage from "@assets/images/photos/2020_team_photo.jpeg";
import deepSpaceImage from "@assets/images/photos/2019_team_photo.jpeg";
import powerUpImage from "@assets/images/photos/2018_team_photo.jpeg";
import steamworksImage from "@assets/images/photos/2017_team_photo.jpeg"; // UPDATE?
import strongholdImage from "@assets/images/photos/2017_team_photo.jpeg"; // NEED
import recycleRushImage from "@assets/images/photos/2017_team_photo.jpeg"; // NEED
import aerialAssistImage from "@assets/images/photos/2017_team_photo.jpeg"; // NEED

// gsap scroll animation
gsap.registerPlugin(ScrollTrigger);

type YearScribe = {
    num: number;
    game: string;
    robot_name: string;
    desc: string;
    image: string;
};

const yeardescs: YearScribe[] = [
    {
        num: 2025,
        game: "Reefscape",
        robot_name: "The Quacken",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: reefscapeImage,
    },
    {
        num: 2024,
        game: "Crescendo",
        robot_name: "Arpeggio",
        desc: "Arpeggio used wheels both as an intake to take in discs and to shoot them into the higher scoring area known as the “speaker”, although it was originally prototyped to use a ground intake.  There are additional wheels in its arm to help it score into the lower points scoring areas known as the “amp”. The shooting arm of the robot can rotate on a single axis, this is what allows for easy scoring in both the amp and the speaker. This was also the first year the team used swerve drive.",
        image: crescendoImage,
    },
    {
        num: 2023,
        game: "Charged Up",
        robot_name: "Bender",
        desc: "Bender is named after the Futurama character of the same name, as they are both made out of metal and our Bender has a hidden face! Bender has an arm that has joints at two places, allowing it to grab cones and cube game pieces from far distances and varying angles. It also has rubber parts on the inside of its claw that allow it to securely grab onto the pieces.",
        image: chargedUpImage,
    },
    {
        num: 2022,
        game: "Rapid React",
        robot_name: "Hungry Hungry Hippo (Gregory)",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: rapidReactImage,
    },
    {
        num: 2021,
        game: "Game Changers",
        robot_name: "N/A",
        desc: "&bull; Virtual Game\nWe don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: gameChangersImage,
    },
    {
        num: 2020,
        game: "Infinite Recharge",
        robot_name: "BB-178 or Q*Bert (TBA)",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: infiniteRechargeImage,
    },
    {
        num: 2019,
        game: "Deep Space",
        robot_name: "Luna",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: deepSpaceImage,
    },
    {
        num: 2018,
        game: "Power Up",
        robot_name: "Q*Bert (TBA)",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: powerUpImage,
    },
    {
        num: 2017,
        game: "STEAMworks",
        robot_name: "Gearzmo (TBA)",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: steamworksImage,
    },
    {
        num: 2016,
        game: "Stronghold",
        robot_name: "BB-178",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: strongholdImage,
    },
    {
        num: 2015,
        game: "Recycle Rush",
        robot_name: "BB-178",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: recycleRushImage,
    },
    {
        num: 2014,
        game: "Aerial Assist",
        robot_name: "BB-178",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: aerialAssistImage,
    },
    {
        num: 2013,
        game: "Ultimate Ascent",
        robot_name: "BB-178",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: infiniteRechargeImage,
    },
    {
        num: 2012,
        game: "Rebound Rumble",
        robot_name: "BB-178",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: infiniteRechargeImage,
    },
    {
        num: 2011,
        game: "Logo Motion",
        robot_name: "BB-178",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: infiniteRechargeImage,
    },
    {
        num: 2010,
        game: "Breakaway",
        robot_name: "BB-178",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: infiniteRechargeImage,
    },
    {
        num: 2009,
        game: "Lunacy",
        robot_name: "BB-178",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: infiniteRechargeImage,
    },
    {
        num: 2008,
        game: "FIRST Overdrive",
        robot_name: "BB-178",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: infiniteRechargeImage,
    },
    {
        num: 2007,
        game: "Rack 'n Roll",
        robot_name: "BB-178",
        desc: "We don't have a robot description yet! If you would like to write one, please contact one of the website developers.",
        image: infiniteRechargeImage,
    },
];

export default function History() {
    const timelineRef = useRef<HTMLDivElement>(null);

    const [isMobile, setIsMobile] = useState(mobileScreen());

    const getYearColor = (year: number) => {
        return `hsl(${(((-year - 0.1) % 5) / 5) * 360}deg, 30%, 40%)`;
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(mobileScreen());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils
                .toArray(
                    ".MuiTimelineOppositeContent-root, .MuiTimelineContent-root"
                )
                .forEach((el: any) => {
                    gsap.fromTo(
                        el,
                        {
                            autoAlpha: 0,
                            y: 40,
                        },
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.7,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 75%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                });
        }, timelineRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const lineCtx = gsap.context(() => {
            gsap.utils.toArray(".line").forEach((el: any) => {
                gsap.fromTo(
                    el,
                    {
                        height: 0,
                        opacity: 0,
                        scaleY: 0,
                        transformOrigin: "top",
                    },
                    {
                        height: "100%",
                        opacity: 1,
                        scaleY: 1,
                        duration: 0.7,
                        ease: "power2.out",
                        stagger: 0.5,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 75%", // The connector reaches the 50% viewport mark
                            toggleActions: "play none none reverse",
                            onEnter: () =>
                                gsap.to(el.trigger, {
                                    backgroundColor: "#ff5733",
                                }), // Change to your desired color
                            onLeave: () =>
                                gsap.to(el.trigger, {
                                    backgroundColor:
                                        "var(--BACKGROUND_PASSTHROUGH)",
                                }), // Revert back when leaving
                            onEnterBack: () =>
                                gsap.to(el.trigger, {
                                    backgroundColor: "#ff5733",
                                }), // Same color when scrolling back up
                            onLeaveBack: () =>
                                gsap.to(el.trigger, {
                                    backgroundColor:
                                        "var(--BACKGROUND_PASSTHROUGH)",
                                }), // Revert back when scrolling back up
                        },
                    }
                );
            });
        });

        return () => lineCtx.revert();
    }, []);

    return (
        <div
            className={"history-page" + (isMobile ? " mobile" : "")}
            ref={timelineRef}
        >
            {/* <div id="page-header">
                <div id="wrapper">
                    <img src={teamPhoto} id="team-photo" />

                    <p id="main-desc">
                        We're the 2nd Law Enforcers: FIRST ® Robotics
                        Competition Team 178 from Farmington, Connecticut. We
                        aim to provide real-world opportunities for all team
                        members to grow as individuals and as leaders, to pursue
                        their passions, to explore STEM fields, and to give back
                        to the community by inspiring young children.
                    </p>
                </div>
            </div> */}

            {/* <h1 className='header py-5 text-center'>
                Click an image for more info!
            </h1> */}

            <Timeline
                position={isMobile ? "right" : "alternate"}
                key={1}
                sx={{
                    [`& .mobile-opt .${timelineOppositeContentClasses.root}`]: {
                        flex: 0,
                    },
                }}
            >
                {yeardescs.map((scribe, i) => {
                    const positionClass = i % 2 === 0 ? "left" : "right";
                    const content = scribe.desc
                        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
                        .split(/\n/g); // replace tabs with spaces, split by newline

                    return (
                        <TimelineItem
                            key={"y" + scribe.num}
                            className={
                                positionClass + (isMobile ? " mobile-opt" : "")
                            }
                        >
                            <TimelineOppositeContent>
                                {!isMobile && (
                                    <img
                                        src={scribe.image}
                                        alt=""
                                        className="timeline-image"
                                    />
                                )}
                            </TimelineOppositeContent>
                            <TimelineSeparator className="seperation">
                                <Expandable
                                    initialState={
                                        <>
                                            <p
                                                className="year"
                                                style={{
                                                    backgroundColor:
                                                        getYearColor(
                                                            scribe.num
                                                        ),
                                                }}
                                            >
                                                {
                                                    `${scribe.num}` /* would be nice to have game name here, but it would look best if the content went under this header */
                                                }
                                            </p>{" "}
                                        </>
                                    }
                                    expandedState={
                                        <>
                                            This is where we will have a more
                                            detailed explanation about things we
                                            did in {scribe.num}
                                        </>
                                    }
                                    options={{
                                        initialStyles: undefined,
                                        expandedStyles: undefined,
                                    }}
                                />

                                <TimelineConnector
                                    className={`line ${
                                        timelineRef ? "active" : ""
                                    }`}
                                />
                            </TimelineSeparator>
                            <TimelineContent
                                sx={{
                                    fontFamily: "unset",
                                    fontWeight: "unset",
                                    fontSize: "unset",
                                    lineHeight: "unset",
                                    letterSpacing: "unset",
                                }}
                            >
                                {isMobile && (
                                    <img
                                        src={scribe.image}
                                        alt=""
                                        className="timeline-image"
                                        loading="lazy"
                                    />
                                )}
                                <h3>
                                    {scribe.game} &bull;{" "}
                                    <i>{scribe.robot_name}</i>
                                </h3>
                                {content.map(
                                    (
                                        txt // new p tag for each new line
                                    ) => (
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: txt,
                                            }}
                                        ></p>
                                    )
                                )}
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </div>
    );
}
