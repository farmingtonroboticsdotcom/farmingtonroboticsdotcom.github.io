// import { useState, useEffect } from 'react';//imports the useEffect & useState components from the React Library
import Card from "@components/common/Card";
import Expandable from "./Expandable";
import { useEffect, useState } from "react";
import ContentContainer from "./ContentContainer";

export type ProfileProps = {
    //takes the following as inputs when Profile component is used externally
    name: string;
    id: string;
    role: string;
    join?: string;
    desc?: string;
    className?: string;
};

export default function Coach(props: ProfileProps) {
    //main function
    const { name, id, role, desc, join } = props;

    const [imageSrc, setImageSrc] = useState("");

    // useEffect(() => {
    //     async function importImage() {
    //         try { // relative to current file bc we using import
    //             const image = await import(`@assets/images/profiles/coach_${id}.jpg`);
    //             setImageSrc(image.default);
    //         } catch (error) {
    //             console.error('Error importing image:', error);
    //         }
    //     }

    //     importImage();
    // }, []);

    return (
        //What the user sees when component is used
        <Expandable
            initialState={
                <>
                    <Card
                        title={name}
                        desc={role}
                        image={`profiles/coach_${id}.jpg`}
                        behavior="static"
                        backText={""}
                    />
                </>
            }
            expandedState={
                <>
                    <ContentContainer
                        {...(imageSrc ? { image: { src: imageSrc } } : {})}
                    >
                        <h3>{name}</h3>
                        <p>
                            {(join ? "Rookie Year: " + join + "\n\n" : "") +
                                (desc ?? "")}
                        </p>
                    </ContentContainer>
                </>
            }
            options={{
                initialStyles: undefined,
                expandedStyles: undefined,
            }}
        ></Expandable>
    );
}
