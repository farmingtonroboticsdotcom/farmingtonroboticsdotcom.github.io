import { useEffect } from "react";

import "./publishings.scss";

import Parallax from "@/components/features/Parallax";
import TimelineContentContainer from "@/components/features/TimelineContentContainer";

import headerimg from "@/assets/images/photos/2026_first_age.jpg";

export default function Newsletter() {
    useEffect(() => {
        document.title = "Newsletters - Enforcers Team 178";
        return () => {
            document.title = "Enforcers Team 178";
        };
    }, []);

    return (
        <>
            <div className="publishings-page">
                <Parallax
                    className="page-header"
                    options={{ maxTransform: 60, defaultBrightness: 0.4 }}
                    foreground={
                        <div className="page-header-foreground-container">
                            <h1 className="page-header-title">Publishings</h1>
                            <p>Newsletters and press releases.</p>
                        </div>
                    }
                    background={
                        <>
                            <img
                                src={headerimg}
                                className="header-photo"
                                id=""
                            />
                        </>
                    }
                />

                <TimelineContentContainer
                    time="August 25, 2025"
                    label="Welcome back!"
                >
                    Hey everyone! Welcome back to school! Here's a fall
                    newsletter:
                </TimelineContentContainer>
                
                <TimelineContentContainer
                    time="August 8, 2025"
                    label="Hello world."
                >
                    Hello from the dev that made TimelineContentContainers.
                </TimelineContentContainer>
            </div>
        </>
    );
}
