import { ReactNode } from "react";

import "./banner-heading.scss";

export type BannerHeadingProps = {
    children: ReactNode;
    color?: "blue" | "gold";
    background?: string;
}

export default function BannerHeading(props: BannerHeadingProps) {
    return (
        <h2 className={`banner-heading banner-heading-${props.color || "gold"} ${props.background ? "banner-heading-has-background" : ""}`}
            style={props.background ? { '--banner-heading-before-content': `"${props.background}"` } as React.CSSProperties : {}}
        ><span>{props.children}</span></h2>
    )
}