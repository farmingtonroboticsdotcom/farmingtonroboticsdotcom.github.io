import { NavLink } from "react-router-dom";

import "./home-page.scss";
import "animate.css/animate.compat.css";

import CardsContainer, { CardOptions, } from "@/components/features/CardsContainer";
import PhotoGallery, { Photo } from "@/components/features/PhotoGallery";
import ContentContainer from "@/components/features/ContentContainer";
import SponsorScroller from "@/components/sections/SponsorScroller";
import Button from "@/components/common/Button";

import eia2026image from "@assets/images/photos/2026_districts_eia.jpg";
import banquet2026image from "@assets/images/photos/2026_banquet.JPG";
import CompetitionCountdown from "@/components/sections/CompetitionCountdown";
import HomeParallax from "@pages/Home/HomeParallax.tsx";
import TeamCalendar from "@components/sections/TeamCalendar.tsx";

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
    // const [vhOffset, setVhOffset] = useState(window.innerHeight * 0.2);

    // --- Effects ---
    // Responsive offset for ScrollAnimation (20vh)
    // useEffect(() => {
    //     const handleResize = () => setVhOffset(window.innerHeight * 0.2);
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    // --- Render ---
    return (
        <div id="home-page">
            {/* Header Section with Parallax Video */}
            <HomeParallax/>

            <CardsContainer cards={cardsList}></CardsContainer>
            <hr />
            <PhotoGallery photos={photoGalleryPhotos}></PhotoGallery>

            <CompetitionCountdown />

            {/* Main Content Section */}
            <ContentContainer theme="initial" image={{src: banquet2026image}}>
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

            <ContentContainer reverse={true} theme="grey" image={{src: eia2026image}}>
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
            <ContentContainer theme="initial">
                <h3>Our Sponsors</h3>
                <p>We would not be possible without our sponsors. Thank you so much for your support!</p>
                <SponsorScroller />
                <NavLink to={"/support/Sponsors"} id="all-sponsors-link">
                    <Button id="all-sponsors-button" className="m-auto">
                        All Sponsors
                    </Button>
                </NavLink>
            </ContentContainer>

            <TeamCalendar/>
        </div>
    );
}

export default Home;
