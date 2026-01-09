import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./disciplines.scss";

import Parallax from "@/components/features/Parallax";
import ContentContainer from "@/components/features/ContentContainer";
import BannerHeading from "@/components/features/BannerHeading";
import ContentOutline, {
    ContentOutlineHeader,
} from "@/components/features/ContentOutline";

import electricalImage from "@assets/images/photos/2025_electrical.jpeg";
import mechanicalImage from "@assets/images/photos/2025_electrical.jpeg";
import safetyImage from "@assets/images/photos/2025_safety.jpeg";
import systemsImage from "@assets/images/photos/2025_electrical.jpeg";
import programmingImage from "@assets/images/photos/2025_programming.jpeg";
import outreachImage from "@assets/images/photos/2025_fall_fest.jpeg";
import robotSupportImage from "@assets/images/photos/2025_electrical.jpeg";
import compSupportImage from "@assets/images/photos/2025_electrical.jpeg";
import DMPRImage from "@assets/images/photos/2025_electrical.jpeg";

const ecorHeaders: ContentOutlineHeader[] = [
    { name: "Electrical" },
    { name: "Mechanical" },
    { name: "Systems" },
    { name: "Safety" },
    { name: "Programming" },
];

const ocorHeaders: ContentOutlineHeader[] = [
    { name: "Outreach" },
    { name: "Robot Support" },
    { name: "Competition Support" },
    { name: "DMPR" },
];

function Disciplines() {
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
        <div id="disciplines-page">
            <Parallax
                className="page-header"
                options={{ maxTransform: 60, defaultBrightness: 0.4 }}
                foreground={
                    <div className="page-header-foreground-container">
                        <h1 className="page-header-title">Disciplines</h1>
                        <ContentOutline headers={ecorHeaders} label="eCOR" />
                        <ContentOutline
                            headers={ocorHeaders}
                            color="blue"
                            label="oCOR"
                        />
                    </div>
                }
                background={
                    <>
                        <img
                            src={programmingImage}
                            id="disciplines-header-photo"
                        />
                    </>
                }
            />

            <BannerHeading background="eCOR">eCOR</BannerHeading>

            <ContentContainer
                id="electrical"
                image={{ src: electricalImage }}
                reverse={true}
            >
                <h3>Electrical</h3>
                <p>
                    The Electrical Discipline is responsible for designing and
                    maintaining the layout, wiring, and integration of all
                    electrical and pneumatic components&mdash;ensuring efficient power
                    delivery, clean signal flow, and reliable performance
                    throughout the robot.
                </p>
            </ContentContainer>

            <ContentContainer id="mechanical" image={{ src: mechanicalImage }}>
                <h3>Mechanical</h3>
                <p>
                    The Mechanical Discipline is responsible for the backbone of
                    the robot. From designing and reinforcing its structural
                    framework, to precisely creating core mechanisms this
                    discipline lays the foundation for reliable,
                    high-performance operation
                </p>
            </ContentContainer>

            <ContentContainer
                id="systems"
                image={{ src: systemsImage }}
                reverse={true}
            >
                <h3>Systems</h3>
                <p>
                    The Systems Discipline facilitates the integration of
                    designs with other disciplines, while fostering
                    communication about the robot and the engineering process
                    within the team and other audiences.
                </p>
            </ContentContainer>

            <ContentContainer id="safety" image={{ src: safetyImage }}>
                <h3>Safety</h3>
                <p>
                    Safety is a unique discipline in that it is independent of
                    the typical Engineering and Outreach divisions of the team.
                    Ensure the team's safety and first-aid supplies are in good
                    condition and are restocked as needed, as well as keeping a
                    log of accidents and injuries at team meetings and at
                    competitions.
                </p>
            </ContentContainer>

            <ContentContainer
                id="programming"
                image={{ src: programmingImage }}
                reverse={true}
            >
                <h3>Programming</h3>
                <p>
                    The Programming discipline brings the robot to life by
                    enabling it to perceive its environment and carry out the
                    year's objectives. They are also responsible for developing
                    autonomous code, allowing the robot to operate independently
                    without driver input.
                </p>
            </ContentContainer>

            <BannerHeading background="oCOR" color="blue">
                oCOR
            </BannerHeading>

            <ContentContainer
                id="outreach"
                image={{ src: outreachImage }}
                reverse={true}
            >
                <h3>Outreach</h3>
                <p>
                    The Outreach Event Coordination Discipline oversees the
                    planning and execution of key community events such as the
                    FLL Expo, FLL Qualifier, and STEAM Day.
                </p>
            </ContentContainer>

            <ContentContainer
                id="robot-support"
                image={{ src: robotSupportImage }}
            >
                <h3>Robot Support</h3>
                <p>
                    The Robot Support Discipline ensures all FIRST requirements
                    for competing with the robot are met, including the creation
                    of components that support the drive team.
                </p>
            </ContentContainer>

            <ContentContainer
                id="competition-support"
                image={{ src: compSupportImage }}
                reverse={true}
            >
                <h3>Competition Support</h3>
                <p>
                    The Competition Support Discipline facilitates strategy
                    development, as well as the preparation of materials for
                    competition in order to maintain team image, branding, and
                    spirit.
                </p>
            </ContentContainer>

            <ContentContainer id="dmpr" image={{ src: DMPRImage }}>
                <h3>DMPR (Digital Media & Public Relations)</h3>
                <p>
                    The Digital Media & Public Relations Discipline creates and
                    maintains resources and visual materials related to the
                    team's image, promotion, and online presence.
                </p>
            </ContentContainer>

            <ContentContainer
                id="youth-initiative"
                reverse={true}
                image={{ src: DMPRImage }}
            >
                <h3>Youth Initiative</h3>
                <p>
                    The Youth Initiative/Mentoring Discipline organizes the
                    sustainment and betterment of the team's FLL program
                    mentorship, as well as other initiatives which emphasize
                    Enforcer guidance, like Rockin' Robotics.
                </p>
            </ContentContainer>
        </div>
    );
}

export default Disciplines;
