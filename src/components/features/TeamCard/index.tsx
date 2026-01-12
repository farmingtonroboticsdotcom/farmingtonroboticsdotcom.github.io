import "./team-card.scss"

export type TeamContact = {
    icon: "website" | "phone" | "email";
    href: string;
    name?: string;
}

export type TeamCardProps = {
    team_name: string;
    team_num: number;
    team_logo: string,
    team_banner: string,
    team_contact_info: TeamContact[];
    team_desc: string;
}

export default function TeamCard(props: TeamCardProps) {
    return (
        <div className="team-card">
            <img src={props.team_banner} alt="" className="team-card-banner" />
            <img src={props.team_logo} alt="" className="team-card-icon" />
            <div className="team-card-info-container">
                <h3 className="team-card-name">{props.team_name} <span className="team-card-num">({props.team_num})</span></h3>
                <div className="team-card-contact-list">
                    {props.team_contact_info.map(v => (
                        <div className="team-card-contact-container">
                            <img src={v.icon == "website" ? "" : ""} alt="" className="team-card-contact-icon" />
                            <p className="team-card-contact-text"><a target="_blank" href={v.icon == "email" ? "mailto:" + v.href : v.href}>{v.name ?? v.href}</a></p>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="team-card-desc">
                    {props.team_desc}
                </div>
            </div>
        </div>
    )
}