import { useEffect, useState } from "react";

import "./raffle.scss";

import axios from "axios";

import { BulletChart } from "@/components/features/BulletChart";
import ContentContainer from "@/components/features/ContentContainer";
import CardsContainer from "@/components/features/CardsContainer";
import Countdown from "@/components/common/Countdown";
import Parallax from "@/components/features/Parallax";
import CountUp from "@components/features/CountUp";
import Button from "@/components/common/Button";

import teamPhoto from "@/assets/images/photos/2025_programming.jpeg";
import rafflePrize from "@/assets/images/photos/raffleprize.png";
import rafflePrize1 from "@/assets/images/photos/raffleprize2.png";
import rafflePrize2 from "@/assets/images/photos/raffleprize3.png";

const ticketFundsGoal = 8000;
const lastYearTicketFunds = 10000;

export default function Raffle() {
    const [ticketsSold, setTicketsSold] = useState(1250);
    // const [loading, setLoading] = useState(true)
    const ticketFunds = ticketsSold * 5;

    useEffect(() => {
        document.title = "Raffle - Enforcers Team 178";
        return () => {
            document.title = "Enforcers Team 178";
        };
    }, []);

    useEffect(() => {
        axios
            .get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkK2DtJy_nFOXk7MlEgZQeZqxuM1Ro3DmzESAxKPAA_9W8iTLx2epxMON3Ikp9Lrs8WFCGCS58qMrx/pub?output=csv"
            )
            .then((response) => {
                setTicketsSold(response.data.split("\n")[1].split(",")[2]);
                // setLoading(false);
            })
            .catch((error) => {
                setTicketsSold(1250);
                console.error("Error fetching data:", error);
                // setLoading(false);
            });
    }, []);

    return (
        <>
            <div id="raffle-page">
                <Parallax
                    className="page-header"
                    options={{ maxTransform: 60, defaultBrightness: 0.4 }}
                    foreground={
                        <>
                            <div className="raffle-countdown">
                                <Countdown
                                    targetEpoch={1768064400000}
                                    label="Raffle Ends in"
                                />
                            </div>
                            <div className="prizes-header ">
                                <img src={rafflePrize} alt="" />
                                <img src={rafflePrize1} className="alt-prize" />
                                <img src={rafflePrize2} alt="" />
                            </div>
                            <div className="page-header-foreground-container">
                                <h1 className="page-header-title fadeInUp">
                                    Raffle
                                </h1>
                            </div>
                        </>
                    }
                    background={
                        <>
                            <img src={teamPhoto} id="raffle-header-photo" />
                        </>
                    }
                />

                {/* <div id="raffle-header">
                    <h1 id="raffle-title">ENFORCERS</h1>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <h2 className="raffle-subtitle">
                            {startYear}&#45;{endYear}
                        </h2>
                    </div>

                    <ProgressBar
                        percentage={
                            ticketsSold >= raffleGoal
                                ? 100
                                : Math.floor((ticketsSold * 100) / raffleGoal)
                        }
                    />

                    <div className="flex flex-wrap justify-between w-full mt-14 font-opensans">
                        <div className="box flex flex-col w-[15rem] items-center font-semibold text-2xl border-4 border-white-500 rounded-xl pr-8 pl-8 pt-2 pb-2 text-nowrap">
                            <h3 className="text-3xl stats" id="tickSold">
                                <CountUp goal={ticketsSold} />
                            </h3>
                            <h4>Tickets Sold</h4>
                        </div>
                        <div className="box flex flex-col w-[15rem] items-center font-semibold text-2xl border-4 border-white-500 rounded-xl pr-8 pl-8 pt-2 pb-2 text-nowrap">
                            <h3 className="text-3xl stats"> */}
                {/* ${(ticketsSold * 5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                {/* $<CountUp goal={ticketFunds} />
                            </h3>
                            <h4>Sales Raised</h4>
                        </div>
                        <div className="box flex flex-col w-[15rem] items-center font-semibold text-2xl border-4 border-white-500 rounded-xl pr-8 pl-8 pt-2 pb-2 text-nowrap">
                            <h3 className="text-3xl stats">
                                <CountUp start={11990} goal={12345} />
                            </h3>
                            <h4> Left Until Prize Pull</h4>
                        </div>
                    </div>

                    <button className="text-4xl font-bold raffle-button bg-yellow-500 rounded-lg flex items-center justify-center text-center pr-12 pl-12 pt-2 pb-2  font-opensans mt-10 cursor-pointer select-none animate-bounce hover:animate-none  hover:scale-105 active:scale-95 transition-all duration-500">
                        <a
                            href="https://farmingtonfor.square.site"
                            target="_blank"
                        >
                            <ShinyText
                                text="Buy Tickets"
                                speed={3}
                                disabled={false}
                            />
                        </a>
                    </button>
                </div> */}

                <ContentContainer center={true}>
                    <h3>
                        Our 2026 season raffle has <u>ended</u>.
                    </h3>
                    <p style={{ width: "67%", margin: "auto" }}>
                        If you missed the raffle, but still want to support our
                        team, you may make a direct donation through Farmington
                        Friends of Robotics (FOR), our 501(c)3 booster
                        organization.
                    </p>
                    <Button width={"50%"} onClick={() => open("https://farmingtonfor.org")}>Donate</Button>
                </ContentContainer>

                <hr />

                <ContentContainer center={true}>
                    <h3>2026 Season Raffle Results</h3>
                    <p style={{ marginBottom: "1.5rem" }}>
                        Thank you for supporting us!
                    </p>

                    <BulletChart current={ticketFunds} goal={ticketFundsGoal} last={lastYearTicketFunds} />

                    <CardsContainer
                        columns={3}
                        cards={[
                            {
                                title: "Tickets Sold",
                                content: <CountUp goal={ticketsSold} />,
                            },
                            {
                                title: "Funds Raised",
                                content: (
                                    <>
                                        {/* $
                                            {(ticketsSold * 5)
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )} idk this was commented before*/}
                                        ${<CountUp goal={ticketFunds} />}
                                    </>
                                ),
                            },
                            {
                                title: "Days Until Drawing",
                                content: <CountUp goal={12345} />,
                            },
                        ]}
                    />
                </ContentContainer>

                <hr />

                <ContentContainer>
                    <h3>Why do we host a raffle?</h3>
                    <p>
                        A robot costs a lot of money to build and maintain. To
                        help battle the enormous prices, we host a raffle every
                        year.
                    </p>
                </ContentContainer>
            </div>
        </>
    );
}
