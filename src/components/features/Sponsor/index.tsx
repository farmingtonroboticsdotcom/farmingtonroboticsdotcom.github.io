import Card from "@components/common/Card";

import styles from "./Sponsor.module.scss";

export type SponsorProps = {
    //Takes in inputs for the name and the image path when component is used externally
    name: string;
    id: string;
    href: string;
    className?: string;
};

export default function Sponsor(props: SponsorProps) {
    //main function
    return (
        //What the user sees when component is used
        <Card
            className={props.className + " " + styles.card}
            title={props.name}
            image={`sponsors/sponsor_${props.id}.svg`}
            desc="Team 178 Sponsor"
            behavior="grow"
            href={props.href}
        />
    );
}
