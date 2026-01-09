import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import "./home-page.scss";
import "animate.css/animate.compat.css";

import CardsContainer, {
    CardOptions,
} from "@/components/features/CardsContainer";
import PhotoGallery, { Photo } from "@/components/features/PhotoGallery";
import ContentContainer from "@/components/features/ContentContainer";
import KickoffCountdown from "@/components/sections/KickoffCountdown";
import SponsorScroller from "@/components/sections/SponsorScroller";
import Parallax from "@/components/features/Parallax";
import Button from "@/components/common/Button";

import video from "@assets/videos/smth.webm";

const cardsList: CardOptions[] = [
    { title: "Founded", content: "1997" },
    { title: "Robots Built", content: "15+" },
    { title: "Students", content: "50+" },
    { title: "Community Events", content: "5+ annually" },
];

const photoGalleryPhotos: Photo[] = [
    { path: "images/photos/2025_comp_robot.jpg", title: "2025 Robot" },
    { path: "images/photos/2025_comp_field.jpg", title: "2025 Drive Team" },
    { path: "images/photos/1998_comp_robot.jpg", title: "1998 Robot" },
    { path: "images/photos/1998_comp_robot.jpg", title: "1998 Robot" },
    { path: "images/photos/1998_comp_robot.jpg", title: "1998 Robot" },
];

function Home() {
    // --- State ---
    // Used for responsive offset in ScrollAnimation (20vh)
    const [vhOffset, setVhOffset] = useState(window.innerHeight * 0.2);

    // --- Effects ---
    // Responsive offset for ScrollAnimation (20vh)
    useEffect(() => {
        const handleResize = () => setVhOffset(window.innerHeight * 0.2);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // --- Render ---
    return (
        <div id="home-page">
            {/* Header Section with Parallax Video */}
            <Parallax
                className="page-header"
                background={
                    <video
                        id="page-header-video"
                        src={video}
                        loop
                        playsInline
                        muted
                        autoPlay
                        disablePictureInPicture
                        disableRemotePlayback
                        preload="auto"
                        style={{ margin: "auto" }}
                    />
                }
                foreground={
                    <div className="page-header-overlay">
                        <h1 id="page-header-title" className="fadeInUp">
                            The 2nd Law Enforcers
                        </h1>
                        <h3 id="page-header-subtitle" className="fadeInUp">
                            FIRST Robotics &bull; Team 178
                        </h3>
                        <Button
                            to="/about"
                            className="home-button fadeInUp"
                            color="blue"
                        >
                            Meet the Team
                        </Button>
                        {/* <p className="mt-5 fadeInUp sm:px-0 px-6">
                            Fun fact: On desktop, press CTRL/cmd + " ; " or "=" to open and close the search bar!
                        </p> */}
                    </div>
                }
            />

            <CardsContainer cards={cardsList}></CardsContainer>
            <hr />
            <PhotoGallery photos={photoGalleryPhotos}></PhotoGallery>

            <KickoffCountdown />

            {/* Main Content Section */}
            <ContentContainer theme="initial"> {/* add image of team shouting at comps */}
                <h3>We're More Than Just a Team</h3>
                <p>
                    We're a student-led community driven by curiosity, teamwork,
                    and the challenge of solving real-world problems.
                </p>
                <p>
                    We're the 2nd Law Enforcers: FIRST ® Robotics Competition
                    Team 178 from Farmington, Connecticut. We aim to provide
                    real-world opportunities for all team members to grow as
                    individuals and as leaders, to pursue their passions, to
                    explore STEM fields, and to give back to the community by
                    inspiring young children.
                </p>
                <Button color="blue" to="/about">
                    Learn More About Us
                </Button>
            </ContentContainer>

            <ContentContainer reverse={true} theme="grey"> {/* add image of team */}
                <h3>Our Impact</h3>
                <p>
                    We're a student-led community driven by curiosity, teamwork,
                    and the challenge of solving real-world problems.
                </p>
                <blockquote>
                    <h3>
                        <i>
                            "FIRST didn't just teach me robotics&mdash;it taught
                            me how to <u>lead</u>."
                        </i>
                    </h3>
                    &emsp; &mdash; Some team member
                </blockquote>
            </ContentContainer>

            {/* Sponsors Section */}
            <ContentContainer>
                <div className="sponsors-page">
                    <ScrollAnimation
                        offset={vhOffset}
                        animateIn="fadeInUp"
                        animateOut="fadeInUp"
                        animateOnce
                        duration={0.75}
                        delay={0}
                    >
                        <p className="header">Our Top Sponsors</p>
                    </ScrollAnimation>
                    <SponsorScroller />
                    <NavLink to={"/support/Sponsors"} id="all-sponsors-link">
                        <Button id="all-sponsors-button" className="m-auto">
                            All Sponsors
                        </Button>
                    </NavLink>
                </div>
            </ContentContainer>

            <hr />

            <div className="flex w-full">
                <iframe
                    className="calendar-main"
                    title="calendar"
                    src="https://calendar.google.com/calendar/embed?src=8606120d12dbfe86c751999d07f98f01316f43ccb235041e653e14b19df5e482%40group.calendar.google.com&ctz=America%2FNew_York"
                />
            </div>
        </div>
    );
}

export default Home;
