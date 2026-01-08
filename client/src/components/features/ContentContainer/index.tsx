import { ReactNode, useEffect, useState } from "react";

import { mobileScreen } from "@/utils/general";

import "./content-container.scss"

export type ContentContainerImage = {
    src: string,
    id?: string
}

export type ContentContainerProps = {
    image?: ContentContainerImage,
    reverse?: boolean,
    keepEvenWithMobile?: boolean,
    theme?: "initial" | "grey" | "blue",
    id?: string,
    children?: ReactNode;
    className?: string;
    center?: boolean;
}

export default function ContentContainer(props: ContentContainerProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(mobileScreen());
    });
    
    return (<div className={`content-container ${props.center && "content-container-centered"} ${props.className ?? ""} ${props.theme ?? ""}`} {...(props.id ? { id: props.id } : {})}>
        {(props.reverse || (isMobile && !props.keepEvenWithMobile)) && (
            <div className="content-text">
                {props.children}
            </div>
        )}
        {props.image && (
            <img
                className="content-image"
                src={props.image.src}
                {...(props.image.id ? { id: props.image.id } : {})}
            />
        )}
        {!(props.reverse || (isMobile && !props.keepEvenWithMobile)) && (
            <div className="content-text">
                {props.children}
            </div>
        )}
    </div>)
}