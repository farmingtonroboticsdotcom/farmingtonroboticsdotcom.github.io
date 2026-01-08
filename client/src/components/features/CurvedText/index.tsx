import React, { useEffect, useRef, useState } from 'react';

type CurvedTextProps = {
    text: string;
    pathD?: string;
    width?: number;
    height?: number;
    curve?: number;
    textProps?: React.SVGProps<SVGTextElement>;
    textPathProps?: React.SVGProps<SVGTextPathElement>;
};

const CurvedText: React.FC<CurvedTextProps> = ({
    text,
    pathD = 'M73.2,348.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97', // semi-circle like curve
    width = 500,
    height = 500,
    curve = 1,
    textProps,
    textPathProps,
}) => {
    const pathId = React.useId();
    const pathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState<number>(0);

    const baseWidth = 500;
    const baseHeight = 500;

    const scaleX = width / baseWidth;
    const scaleY = height / baseHeight;

    const totalScaleY = scaleY * curve;

    // i kinda just made stuff up until it kinda worked
    // will try to make the width not affect the curve and vice versa later

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length);
        }
    }, [pathD]);

    return (
        <svg
            className="curved-text-container"
            viewBox={`0 0 ${baseWidth} ${baseHeight}`}
            width={width}
            height={height}
        >
            <defs>
                <path
                    ref={pathRef}
                    id={pathId}
                    d={pathD}
                    fill="transparent"
                    transform={`scale(${scaleX}, ${totalScaleY})`} // allows the curve to be changed dynamically to however steep you want
                />
            </defs>
            <text // can be edited in css
                {...textProps}
            >
                <textPath
                    href={`#${pathId}`}
                    startOffset="50%"
                    textAnchor="middle"
                    lengthAdjust="spacing"
                    textLength={pathLength || undefined}
                    {...textPathProps}
                >
                    {text}
                </textPath>
            </text>
        </svg>
    );
};

export default CurvedText;
