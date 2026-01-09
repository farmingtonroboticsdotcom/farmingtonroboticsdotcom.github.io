import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./farmington-first.scss";

import ContentOutline, {
    ContentOutlineHeader,
} from "@/components/features/ContentOutline";
import TeamCard, { TeamCardProps } from "@/components/features/TeamCard";
import ContentContainer from "@/components/features/ContentContainer";
import BannerHeading from "@/components/features/BannerHeading";
import Parallax from "@/components/features/Parallax";

import headerimg from "@/assets/images/photos/2026_first_age.jpg";
import robothletesImg from "@/assets/images/teams/Robothletes.png";
import trex from "@/assets/images/teams/technotrexes.jpg";
import quantum from "@/assets/images/teams/quantum.png";

const firstPrograms: ContentOutlineHeader[] = [
    { name: "FIRST Lego League" },
    { name: "FIRST Tech Challenge" },
];

const fllTeams: TeamCardProps[] = [
    {
        team_name: "Lego Ninj@s",
        team_num: 73732,
        team_banner: robothletesImg,
        team_logo: robothletesImg,
        team_contact_info: [
            {
                icon: "email",
                href: "devi.ramasamy@gmail.com",
            },
        ],
        team_desc: "No information acquired.",
    },
    {
        team_name: "Stellar Sparks",
        team_num: 34294,
        team_banner: robothletesImg,
        team_logo: robothletesImg,
        team_contact_info: [],
        team_desc: "No information acquired.",
    },
];

const ftcTeams: TeamCardProps[] = [
    {
        team_name: "Robothletes",
        team_num: 24611,
        team_banner: robothletesImg,
        team_logo: robothletesImg,
        team_contact_info: [
            {
                icon: "website",
                href: "http://robothletes.org",
            },
            {
                icon: "email",
                href: "robothletes@gmail.com",
            },
        ],
        team_desc:
            "Robothletes FTC Team 24611 is a community team based in Farmington, CT. Their rookie year was 2023. Some of their accomplishments include winning the Design Award at the 2024 Wolcott Qualifier.",
    },
    // COMMENTED BECAUSE NO TEAM INFORMATION COULD BE FOUND ONLINE
    // {
    //     team_name: "Real Steel",
    //     team_num: 25237,
    //     team_banner: "",
    //     team_logo: "",
    //     team_contact_info: [
    //         {
    //             icon: "website",
    //             href: "http://robothletes.org",
    //         },
    //         {
    //             icon: "email",
    //             href: "robothletes@gmail.com",
    //         }
    //     ],
    //     team_desc: "Robothletes FTC Team 24611 is a community team based in Farmington, CT. Their rookie year was 2023. Some of their accomplishments include winning the Design Award at the 2024 Wolcott Qualifier.",
    // },
    {
        team_name: "Techno T-Rexes",
        team_num: 12923,
        team_banner: trex,
        team_logo: trex,
        team_contact_info: [
            {
                icon: "website",
                href: "https://technotrexes.wixsite.com/website",
            },
            {
                icon: "email",
                href: "techno.trexes@gmail.com",
            },
        ],
        team_desc:
            "The Techno T-Rexes opened its doors to FTC in 2017, and has been taking part in the annual robotics competitions ever since. What sets us apart from the rest is our sustained success in the regional qualifiers despite how low the budget was the previous two years.",
    },
    {
        team_name: "Quantum Alphas",
        team_num: 32703,
        team_banner: quantum,
        team_logo: quantum,
        team_contact_info: [
            {
                icon: "website",
                href: "https://www.quantumalphas.com",
            },
            {
                icon: "email",
                href: "quantumalphas@gmail.com",
            },
        ],
        team_desc: "The Quantum Alphas",
    },
];

export default function First() {
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
        <div className="farmington-first-page">
            <Parallax
                className="page-header"
                id="farmington-first-header"
                options={{ maxTransform: 60, defaultBrightness: 0.4 }}
                foreground={
                    <div className="page-header-foreground-container">
                        <h1 className="page-header-title">Local FIRST Teams</h1>
                        <p>
                            Meet some local teams to start your FIRST adventure!
                        </p>
                        <ContentOutline headers={firstPrograms} />
                    </div>
                }
                background={
                    <>
                        <img src={headerimg} className="header-photo" id="" />
                    </>
                }
            />

            <ContentContainer id="registration">
                <h3>Registration</h3>
                <p>
                    Below is a list of teams in the area in the FIRST program,
                    but how do you register? That's a great question. I don't
                    know. Here's a link that may or may not help you:{" "}
                    <a href="https://example.com">https://example.com</a>
                </p>
            </ContentContainer>

            <BannerHeading background="FLL">FIRST Lego League</BannerHeading>

            <div className="fll-team-list">
                {fllTeams.map((props) => (
                    <TeamCard {...props} key={props.team_num} />
                ))}
            </div>

            <BannerHeading background="FTC">FIRST Tech Challenge</BannerHeading>

            <div className="ftc-team-list">
                {ftcTeams.map((props) => (
                    <TeamCard {...props} key={props.team_num} />
                ))}
            </div>
        </div>
    );
}
