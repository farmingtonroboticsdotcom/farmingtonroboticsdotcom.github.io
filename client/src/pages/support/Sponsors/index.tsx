import styles from "./Sponsors.module.scss";

import Sponsor, { SponsorProps } from "@components/features/Sponsor";

//list of sponsors + website directory
const platinumSponsors: SponsorProps[] = [
    {
        id: "otis",
        name: "Otis",
        href: "https://www.otis.com/en/us",
    },
    {
        id: "ghaas",
        name: "Gene Haas Foundation",
        href: "https://www.ghaasfoundation.org",
    },
    {
        id: "parker",
        name: "Parker",
        href: "https://www.parker.com/us/en/home.html",
    },
    {
        id: "oreilly",
        name: "Ed O'Reilly Foundation",
        href: "",
    },
    {
        id: "stanley",
        name: "Stanley Black & Decker",
        href: "https://www.stanleyblackanddecker.com",
    },
    {
        id: "csde",
        name: "Connecticut Manufacturing",
        href: "https://www.gotitmadect.com/",
    },
    {
        id: "mif",
        name: "Manufacturing Innovation Fund",
        href: "https://manufacturing.ct.gov/mif",
    },
    {
        id: "ffor",
        name: "Farmington Friends of Robotics",
        href: "https://farmingtonfor.org",
    },
    {
        id: "fpsct",
        name: "Farmington Public Schools",
        href: "https://www.fpsct.org",
    },
];

const bronzeSponsors: SponsorProps[] = [
    {
        name: "George's Pizza",
        href: "https://www.georgespizzarestaurant.com",
        id: "georges",
    },
];

function Sponsors() {
    return (
        <div className={styles.sponsors}>
            <h1 className={styles.header}>Sponsors</h1>
            <a className={styles.subheader} href="https://farmingtonfor.org/">
                Visit Friends of Farmington Robotics for more.
            </a>

            <div className={styles.content}>
                <div className={styles.sponsorHeader + " " + styles.platinum}>
                    <h1>Platinum</h1>
                </div>
                <div className={styles.list}>
                    {platinumSponsors.map((v) => (
                        <Sponsor {...v} className={styles.sponsor} />
                    ))}
                </div>

                <div className={styles.sponsorHeader + " " + styles.bronze}>
                    Bronze
                </div>
                <div className={styles.list}>
                    {bronzeSponsors.map((v) => (
                        <Sponsor {...v} className={styles.sponsor} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
