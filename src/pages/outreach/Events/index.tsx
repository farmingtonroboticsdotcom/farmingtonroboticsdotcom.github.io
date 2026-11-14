//imports Countdown component + assets

//Outreach events (Expo)

//STEAM Events (STEAM Day, Maker Fair)

import ContentContainer from "@/components/features/ContentContainer";
import "./events-page.scss";

// import eventsHeaderImage from "@assets/images/photos/256x256placeholder.jpg"
// import Countdown, { CountdownProps } from "@components/features/Countdown";
import BannerHeading from "@/components/features/BannerHeading";
import TeamCalendar from "@components/sections/TeamCalendar.tsx";

// const events: CountdownProps[] = [
//     //events with date
//     {
//         name: "WNE Load-In",
//         epoch: 1741968000000,
//     },
//     {
//         name: "Hartford Load-In",
//         epoch: 1743177600000,
//     },
//     {
//         name: "District Championships",
//         epoch: 1743609600000,
//     },
// ];

export default function Events() {
    return (
        <div id="events-page">
            <BannerHeading background="EVENTS" color="blue">
                Events
            </BannerHeading>

            <ContentContainer>
                <p>We've listed our upcoming events below for easy access:</p>
            </ContentContainer>

            <hr />

            <ContentContainer>
                <h3>WNE</h3>
                <p>A little bit longer</p>
            </ContentContainer>

            <ContentContainer>
                <h3>Hartford</h3>
                <p>A little bit longer</p>
            </ContentContainer>

            <ContentContainer>
                <h3>Districts</h3>
                <p>A little bit longer</p>
            </ContentContainer>

            <ContentContainer>
                <h3>Worlds</h3>
                <p>A little bit longer</p>
            </ContentContainer>

            {/* <div id="event-content-container">
                {
                    events.map(v => (<>
                        <Countdown {...v}/>
                    </>))
                }
            </div> */}

            <TeamCalendar/>
        </div>
    );
}
