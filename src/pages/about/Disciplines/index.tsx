import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./disciplines.scss";

import Parallax from "@/components/features/Parallax";
import ContentContainer from "@/components/features/ContentContainer";
import BannerHeading from "@/components/features/BannerHeading";
import ContentOutline, { ContentOutlineHeader, } from "@/components/features/ContentOutline";

import electricalImage from "@assets/images/photos/2025_electrical.jpeg";
import mechanicalImage from "@assets/images/photos/2025_electrical.jpeg";
import systemsImage from "@assets/images/photos/2025_electrical.jpeg";
import robotSupportImage from "@assets/images/photos/2025_electrical.jpeg";
import compSupportImage from "@assets/images/photos/2025_electrical.jpeg";
import DMPRImage from "@assets/images/photos/2025_electrical.jpeg";
import safetyImage from "@assets/images/photos/2025_safety.jpeg";
import programmingImage from "@assets/images/photos/2025_programming.jpeg";
import outreachImage from "@assets/images/photos/2025_fall_fest.jpeg";

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
                        <ContentOutline
                            headers={ecorHeaders}
                            color="gold"
                            label="Engineering"
                        />
                        <ContentOutline
                            headers={ocorHeaders}
                            color="blue"
                            label="Outreach"
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

            <BannerHeading background="eCOR">Engineering</BannerHeading>

            <ContentContainer
                id="electrical"
                image={{ src: electricalImage }}
                reverse={true}
            >
                <h3>Electrical</h3>
                <p>
                    The Electrical discipline is responsible for 
                    designing and maintaining the layout, wiring, 
                    and integration of all electrical components. 
                    They ensure efficient power delivery, clean 
                    signal flow, and reliable performance throughout
                    the robot.
                </p>
            </ContentContainer>

            <ContentContainer id="mechanical" image={{ src: mechanicalImage }}>
                <h3>Mechanical</h3>
                <p>
                    The Mechanical discipline is responsible for the 
                    physical fabrication of the robot. They ensure 
                    the robot is structurally sound and that the 
                    mechanisms are ready to be worked on by other 
                    disciplines. This discipline lays the foundation 
                    for reliability and high performance.
                </p>
            </ContentContainer>

            <ContentContainer
                id="systems"
                image={{ src: systemsImage }}
                reverse={true}
            >
                <h3>Systems</h3>
                <p>
                    The Systems discipline facilitates the CAD design 
                    of the robot while fostering communication about the 
                    robot and the engineering process within the team and other 
                    audiences.
                </p>
            </ContentContainer>

            <ContentContainer id="safety" image={{ src: safetyImage }}>
                <h3>Safety</h3>
                <p>
                    Safety is a unique discipline in that it is independent 
                    of the typical Engineering and Outreach divisions of 
                    the team. The Safety Captain is responsible for organizing
                    Safety Training in conjunction with the Engineering Coach
                    and the Executive Committee, ensuring the team’s safety
                    and first-aid supplies are in good condition and are 
                    restocked as needed.
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

            <BannerHeading background="oCOR" color="blue">Outreach</BannerHeading>

            <ContentContainer
                id="outreach"
                image={{ src: outreachImage }}
                reverse={true}
            >
                <h3>Outreach</h3>
                <p>
                    The Outreach Event Coordination discipline creates meaningful 
                    FIRST experiences for our community by helping plan and run 
                    events like the FLL Expo, FLL Qualifier, and STEAM Day. 
                    The Outreach Event Coordinator designs each event to inspire 
                    young innovators, spark curiosity, and celebrate the values 
                    of FIRST.
                </p>
            </ContentContainer>

            <ContentContainer
                id="robot-support"
                image={{ src: robotSupportImage }}
            >
                <h3>Robot Support</h3>
                <p>
                    The Robot Support Discipline ensures all FIRST requirements 
                    for competing with the robot are met, including supplementary 
                    materials such as field elements and bumpers.
                </p>
            </ContentContainer>

            <ContentContainer
                id="competition-support"
                image={{ src: compSupportImage }}
                reverse={true}
            >
                <h3>Competition Support</h3>
                <p>
                    Our Competition Support discipline leads all strategic preparation 
                    and ensures competition materials reflect our team’s image, branding, 
                    and spirit. Competition Support works to create a consistent, energized 
                    presence at every FIRST event.
                </p>
            </ContentContainer>

            <ContentContainer id="dmpr" image={{ src: DMPRImage }}>
                <h3>DMPR (Digital Media & Public Relations)</h3>
                <p>
                    The Digital Media & Public Relations discipline shapes our team’s image 
                    and online presence by creating and managing visuals, promotional materials, 
                    and digital content. DMPR works to share our story, connect with the community, 
                    and maintain a strong, consistent team identity, be that online or in person.
                </p>
            </ContentContainer>

            <ContentContainer
                id="youth-initiative"
                reverse={true}
                image={{ src: DMPRImage }}
            >
                <h3>Youth Initiative</h3>
                <p>
                    The Youth Initiative & Mentoring discipline oversees the development and 
                    support of the team’s FLL mentorship program and other initiatives that 
                    emphasize Enforcer guidance, such as Rockin’ Robotics. 
                    Youth Initiative & Mentoring works to inspire young learners, 
                    provide meaningful mentorship, and help students grow both in STEM skills 
                    and confidence.
                </p>
            </ContentContainer>
        </div>
    );
}

export default Disciplines;
