import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./first.scss";

import ContentOutline, {
    ContentOutlineHeader,
} from "@components/features/ContentOutline";
import ContentContainer from "@/components/features/ContentContainer";
import BannerHeading from "@/components/features/BannerHeading";
import Parallax from "@components/features/Parallax";
import Button from "@components/common/Button";

import headerimg from "@/assets/images/photos/2026_first_age.jpg";
import deanKamenImage from "@assets/images/photos/dean_kamen.jpg";

const firstPrograms: ContentOutlineHeader[] = [
    { name: "About" },
    { name: "FIRST Tech Challenge" },
    { name: "FIRST Lego League" },
];

export default function AboutFirst() {
    const location = useLocation();

    useEffect(() => {
        const targetId = location.state?.targetId;

        if (targetId) {
            const el = document.getElementById(targetId);

            if (el) {
                window.scrollTo({
                    top:
                        el.getBoundingClientRect().top +
                        window.pageYOffset -
                        72,
                    behavior: "smooth",
                });
            }
        }
    }, [location]);

    return (
        <>
            <div className="about-first-page">
                <Parallax
                    className="page-header"
                    id="about-first-header"
                    options={{ maxTransform: 60, defaultBrightness: 0.4 }}
                    foreground={
                        <div className="page-header-foreground-container">
                            <h1 className="page-header-title">About FIRST</h1>
                            <ContentOutline headers={firstPrograms} />
                        </div>
                    }
                    background={
                        <>
                            <img
                                src={headerimg}
                                className="header-photo"
                                id=""
                            />
                        </>
                    }
                />

                <ContentContainer id="about" image={{ src: headerimg }}>
                    <h3>What is FIRST?</h3>
                    <p>
                        FIRST is a non-profit international youth organization
                        founded by Dean Kamen in 1989 that operates programs
                        like Robotics Competition, Lego League, and Tech
                        Challenge competitions. This organization helps to build
                        skills in science, technology, engineering, and
                        mathematics (STEM) while also building problem solving
                        skills and teamwork.
                    </p>
                    <Button className="about-button" color="blue">
                        Learn more
                    </Button>
                </ContentContainer>

                <ContentContainer
                    image={{ src: deanKamenImage }}
                    reverse={true}
                >
                    <h3>Who is Dean Kamen?</h3>
                    <p>
                        Dean Kamen is the founder of FIRST and a passionate
                        advocate for inspiring young people through science and
                        technology. Although he's known for inventions like the
                        Segway and life-changing medical devices, he often says
                        FIRST is the most important work of his life. His vision
                        and dedication have helped shape a global movement that
                        empowers students to become innovators and leaders.
                    </p>
                </ContentContainer>

                <hr />

                <BannerHeading background="FIRST">FIRST Programs</BannerHeading>

                <p style={{ textAlign: "center" }}>
                    Looking for{" "}
                    <NavLink to="/first/farmington">FIRST teams</NavLink>{" "}
                    instead?
                </p>

                <ContentContainer id="first-lego-league">
                    <h3>FIRST Lego League Discover</h3>
                    <p>
                        FIRST LEGO League Discover is designed for children ages
                        4 to 6 as a playful introduction to STEM. Using LEGO®
                        DUPLO® bricks, kids learn basic engineering and
                        problem-solving skills through hands-on activities and
                        storytelling. They work in small teams to explore
                        real-world themes, build simple models, and share their
                        ideas. It's a fun, creative way to spark curiosity and
                        teamwork in young learners!
                    </p>
                </ContentContainer>
                <ContentContainer>
                    <h3>FIRST Lego League Explore</h3>
                    <p>
                        FIRST LEGO League Explore is for kids ages 6 to 10 and
                        offers a hands-on introduction to STEM concepts. Teams
                        work together to investigate a real-world theme, build a
                        motorized LEGO model, and create a poster to share what
                        they've learned. The program focuses on creativity,
                        teamwork, and problem-solving in a fun, supportive
                        environment. It's a great way for young learners to
                        develop confidence and a love for science and
                        engineering.
                    </p>
                </ContentContainer>
                <ContentContainer>
                    <h3>FIRST Lego League Challenge</h3>
                    <p>
                        FIRST LEGO League Challenge is designed for students
                        ages 9 to 16 (age ranges vary by country) who want to
                        dive deeper into robotics and STEM. Teams design, build,
                        and program LEGO robots to complete missions on a themed
                        game field while also researching and presenting
                        innovative solutions to real-world problems. The program
                        emphasizes teamwork, creativity, and technical skills
                        through exciting competitions and events. It's the
                        perfect next step for students ready to take on bigger
                        challenges and make an impact.
                    </p>
                </ContentContainer>
                <ContentContainer id="first-tech-challenge">
                    <h3>FIRST Tech Challenge (FTC)</h3>
                    <p>
                        FIRST Tech Challenge is for students ages 12 to 18
                        (typically grades 7-12) who are ready to take robotics
                        to the next level. Teams design, build, and program
                        custom robots using advanced parts and coding languages
                        like Java to compete in challenging games. FTC
                        emphasizes engineering, strategy, teamwork, and
                        innovation through exciting regional and national
                        competitions. It's a great program for students looking
                        to deepen their STEM skills and collaborate on complex
                        projects.
                    </p>
                </ContentContainer>
                <ContentContainer>
                    <h3>FIRST Robotics Competition (FRC)</h3>
                    <p>
                        FIRST Robotics Competition is designed for high school
                        students ages 14 to 18 (grades 9-12) who want to
                        experience the thrill of building large, complex robots.
                        Teams work together to design, build, and program
                        powerful robots to compete in intense, fast-paced
                        challenges. FRC combines engineering, strategy, and
                        teamwork on a bigger scale, with events that draw
                        thousands of participants worldwide. It's the ultimate
                        hands-on experience for students passionate about
                        robotics and innovation.
                    </p>
                </ContentContainer>
            </div>
        </>
    );
}
