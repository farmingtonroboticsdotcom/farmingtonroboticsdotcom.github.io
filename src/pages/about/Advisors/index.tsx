import "./advisors-page.scss";

import ContentContainer from "@/components/features/ContentContainer";
import Profile, { ProfileProps } from "@components/features/Profile";
import BannerHeading from "@/components/features/BannerHeading";

//coaches info dictionary
const coaches: ProfileProps[] = [
    {
        id: "barron",
        name: "Tim Barron",
        join: "1998",
        role: "Co-Head Coach",
        desc: "His adorable cats have figured out what a Google Meet is. They can be spotted stealing the spotlight when they check in during online team meetings to make sure the team is on task.",
    },
    {
        id: "hall",
        name: "Michele Hall",
        join: "2003",
        role: "Co-Head Coach",
        desc: "She worked for 14 summers at a Girl Scouts day camp. She still uses many of the skills that she learned there as a coach.",
    },
    {
        id: "forstbauer",
        name: "Charles Forstbauer",
        join: "2006",
        role: "Engineering Coach",
        desc: "He sold his motorcycle to buy a hang glider because it was safer #safetytrained",
    },
    {
        id: "salvador",
        name: "Samantha Salvador",
        join: "2022",
        role: "Assistant Coach",
        desc: "She is a really good watercolor and colored pencil artist! ",
    },
    {
        id: "procko",
        name: "Earl Procko",
        role: "Auxiliary Coach",
        desc: "Although he is always spotted near all kinds of technology at school, he lives a secret nature-filled life in his lair of plants and chickens.",
    },
];

//mentors info dictionary
const mentors: ProfileProps[] = [
    {
        id: "crossman",
        name: "Matt Crossman",
        join: "2012",
        role: "Mentor",
        desc: "Insert description here",
    },
    {
        id: "deming",
        name: "Trevor Deming",
        join: "2011",
        role: "Mentor",
        desc: "The only thing that can match his collection of FIRST t-shirts is his transformer collection!",
    },
    {
        id: "hofmann",
        name: "Mark Hofmann",
        join: "2016",
        role: "Mentor",
        desc: "Will take any and all opportunities to have his face painted at competitions.",
    },
    {
        id: "jabido",
        name: "Janice Jabido",
        role: "Mentor",
        desc: "Insert description here",
    },
    {
        id: "nollman",
        name: "Lisa Nollman",
        role: "Mentor",
        desc: "Insert description here",
    },
    {
        id: "salem",
        name: "Zarin Salem",
        role: "Mentor",
        desc: "Insert description here",
    },
    {
        id: "nguyen",
        name: "Tuhan Nguyen",
        role: "Mentor",
        desc: "Insert description here",
    },
    {
        id: "vasilyeva",
        name: "Ekaterina Vasilyeva",
        role: "Mentor",
        desc: "Insert description here",
    },
];

function Advisors() {
    return (
        <div id="advisors-page">
            <ContentContainer>
                <h3>Our Coaches</h3>
                <p>
                    To honor the leaders of our team, we would like to share
                    brief descriptions and say thank you to the people that
                    brought this team where it is today. To view more, click on
                    any one of the coach's profiles.
                </p>
            </ContentContainer>

            <BannerHeading background="COACHES">Coaches</BannerHeading>

            <div id="coaches-container">
                {coaches.map((v, i) => (
                    <Profile
                        key={i}
                        id={v.id}
                        name={v.name}
                        join={v.join}
                        role={v.role}
                        {...(v.desc && { desc: v.desc })}
                    />
                ))}
            </div>

            <BannerHeading background="MENTORS">Mentors</BannerHeading>

            <div id="mentors-container">
                {mentors.map((v, i) => (
                    <Profile
                        key={i}
                        id={v.id}
                        name={v.name}
                        join={v.join}
                        role={v.role}
                        {...(v.desc && { desc: v.desc })}
                    />
                ))}
            </div>
        </div>
    );
}

export default Advisors;
