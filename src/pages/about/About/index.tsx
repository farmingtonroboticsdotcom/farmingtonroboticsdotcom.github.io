import "./about-page.scss";

import Button from "@/components/common/Button";
import Parallax from "@/components/features/Parallax";
import CurvedText from "@/components/features/CurvedText";
import ContentContainer from "@/components/features/ContentContainer";

import teamPhoto from "@assets/images/photos/2025_team_photo.jpeg";
import gizmoImage from "@assets/images/photos/1998_comp_robot.jpg";

function About() {
    return (
        <div id="about-page">
            <Parallax
                className="page-header"
                options={{ maxTransform: 40 }}
                foreground={
                    <div className="page-header-foreground-container">
                        <h1 className="page-header-title">About Us</h1>
                    </div>
                }
                background={
                    <>
                        <img src={teamPhoto} id="page-header-photo"></img>
                        <CurvedText text="2 0 2 5" height={1000} curve={0.1} />
                    </>
                }
            />

            <ContentContainer image={{ src: gizmoImage }}>
                <p>
                    Founded in 1997, the 2nd Law Enforcers have been an active
                    participant in FIRST and has continued to foster strong
                    partnerships with organizations like Farmington High School,
                    engineering professionals from our sponsors, teachers,
                    mentors, parents and students.
                </p>
                <p>
                    Our first robot was Gizmo helping to win the Rookie All-Star
                    Award at the DEKA New England Regional in New Hampshire in
                    1997.
                </p>
                <Button className="content-button" color="blue">
                    Our History
                </Button>
            </ContentContainer>

            <ContentContainer image={{ src: gizmoImage }} reverse={true}>
                <h3>Our Mission</h3>
                <p>We would like to ...</p>
            </ContentContainer>
        </div>
    );
}

export default About;
