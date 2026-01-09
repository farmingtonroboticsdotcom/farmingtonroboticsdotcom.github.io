import { useState, useEffect } from "react";

import "./common.scss"; // import the css file for this component

const images = import.meta.glob("@assets/images/**/*.(svg|jpg|png|jpeg)");

type CardProps = {
    id?: string; // id of the card
    className?: string; // class name of the card (if applicable)
    key?: number; // key of card if in list so react can track it
    title: string; // title of the card
    desc: string; // description of the card
    behavior: "static" | "hover" | "grow"; // if the card should be static, grow and static, or flip when hovered
    image: string; // image path on front side
    href?: string; // link (if applicable)
    backImage?: string; // image path on back side (if applicable)
    backText?: string; // text on back of the card (if applicable)
};

//main function
export default function Card(props: CardProps) {
    const {
        id,
        className,
        key,
        title,
        desc,
        behavior,
        image,
        href,
        backImage,
        backText,
    } = props;

    const [frontImageSrc, setFrontImageSrc] = useState("");
    const [backImageSrc, setBackImageSrc] = useState("");

    useEffect(() => {
        async function importImage(back = false) {
            if (back) {
                try {
                    const module = await images[
                        "/src/assets/images/" + (backImage || image)
                    ]();
                    setBackImageSrc((module as { default: string }).default);
                } catch (error) {
                    console.log("/src/assets/images/" + (backImage || image));
                    console.error("Error importing back image:", error);
                }
            } else {
                try {
                    const module = await images[
                        "/src/assets/images/" + image
                    ]();
                    setFrontImageSrc((module as { default: string }).default);
                } catch (error) {
                    console.log("/src/assets/images/" + (backImage || image));
                    console.error("Error importing front image:", error);
                }
            }
        }

        importImage();
        importImage(true);
    }, [image, backImage]);

    //What the user sees when component is used
    return (
        <div
            className={`primitive-card-container ${className} ${
                behavior === "grow" ? "primitive-card-grow" : ""
            } ${behavior === "hover" ? "primitive-card-flip" : ""}`}
            {...(id ? { id } : {})}
            {...(key ? { key } : {})}
            {...(href
                ? {
                      onClick: (e) => {
                          e.stopPropagation();
                          window.open(href, "_blank");
                      },
                      "data-clickable": "1",
                      title: href,
                  }
                : {})}
        >
            <div className={`primitive-card-inner`}>
                <div className="primitive-card-face primitive-card-front">
                    <img
                        src={frontImageSrc}
                        alt="Could't fetch image"
                        className="primitive-card-main-image"
                    />
                    <div className="primitive-card-overlay">
                        <span className="primitive-card-title">{title}</span>
                        <span className="primitive-card-desc">{desc}</span>
                    </div>
                </div>
                {behavior === "hover" && (
                    <div className="primitive-card-face primitive-card-back">
                        <div className="primitive-card-header">
                            <div className="primitive-card-info">
                                <span className="primitive-card-title">
                                    {title}
                                </span>
                                <span className="primitive-card-desc">
                                    {desc}
                                </span>
                            </div>
                            <img
                                src={backImageSrc}
                                alt="Could't fetch image"
                                className="primitive-card-back-image"
                            />
                        </div>
                        <pre className="primitive-card-text">{backText}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}
