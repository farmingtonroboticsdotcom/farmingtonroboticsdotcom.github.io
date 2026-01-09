import { ReactNode, useEffect, useState } from "react";
import "./timeline-content-container.scss"
import { mobileScreen } from "@/utils/general";

export type ContentContainerImage = {
    src: string,
    id?: string
}

export type TimelineContentContainerProps = {
    time: string,
    label?: string,
    image?: ContentContainerImage,
    reverse?: boolean,
    keepEvenWithMobile?: boolean,
    id?: string,
    children?: ReactNode
}

export default function TimelineContentContainer(props: TimelineContentContainerProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(mobileScreen());
    });
    
    return (<div className="timeline-content-container" {...(props.id ? { id: props.id } : {})}>
        <div className="content-heading"><span className="content-timestamp">&bull; {props.time}</span>{props.label && ` \u2014 ${props.label}`}</div>
        <div className="content-group">
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
        </div>
    </div>)
}