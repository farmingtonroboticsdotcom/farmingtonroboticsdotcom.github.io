import Button from "@/components/common/Button"
import "./style-demos.scss"
import ContentContainer from "@/components/features/ContentContainer"
import BannerHeading from "@/components/features/BannerHeading"
import Expandable from "@/components/features/Expandable"

// import demoImage from "@assets/images/photos/dean_kamen.jpg"
// import TimelineContentContainer from "@/components/features/TimelineContentContainer"

type ColorShowcaseColor = {
    name: string,
    selector?: string,
}

type ColorShowcaseProps = {
    colors: (ColorShowcaseColor | null)[],
    dark: boolean,
}

function ColorShowcase(props: ColorShowcaseProps) {
    return (
        <div className={`color-showcase${props.dark ? " dark" : ""}`}>
            <span className="color-showcase-title"></span>
            {
                props.colors.map((color: ColorShowcaseColor | null, i: number) =>
                    color != null ? (
                        <div className="color-container" key={i}>
                            <div
                                className="color-display"
                                style={{
                                    background: `var(--${props.dark ? "dark" : "light"}-${color.selector ?? color.name})`,
                                }}
                            ></div>
                            <span className="color-name">
                                [{props.dark ? "dark" : "light"}]
                                <br />
                                {color.name}
                            </span>
                        </div>
                    ) : (
                        <div className="color-container" key={i}></div>
                    )
                )
            }
        </div>
    )
}

export default function StyleDemos() {
    const colors: (ColorShowcaseColor | null)[] = [
        { name: "TEXT" },
        { name: "BACKGROUND" },
        null,
        null,
        { name: "MODAL_BACKGROUND" },
        { name: "MODAL_OUTLINE" },
        { name: "BACKGROUND_PASSTHROUGH_OUTLINE" },
        { name: "BACKGROUND_PASSTHROUGH" },
        { name: "GOLD_PASSTHROUGH_OUTLINE" },
        { name: "GOLD" },
        { name: "BLUE" },
        { name: "BLUE_PASSTHROUGH_OUTLINE" },
        { name: "GOLD_GRADIENT_OUTLINE" },
        { name: "GOLD_PASSTHROUGH" },
        { name: "BLUE_PASSTHROUGH" },
        { name: "BLUE_GRADIENT_OUTLINE" },
        null,
        { name: "GOLD_GRADIENT" },
        { name: "BLUE_GRADIENT" },
        null,
    ]

    return (
        <div className="style-demos-page">
            <BannerHeading background="DEMO" color="blue">Styles</BannerHeading>

            <h1>This is an h1 tag, also known as a Title.</h1>
            <h3>This is an h3 tag, often referred to as a Subtitle.</h3>
            <p>This is a paragraph, the bulk of the website.</p>
            <Button>This is an example of a Button.</Button>
            <Button color="blue">This is an example of a blue Button.</Button>

            <ContentContainer>
                <h1>This is an h1 tag, also known as a Title.</h1>
                <h3>This is an h3 tag, often referred to as a Subtitle.</h3>
                <p>This is a paragraph, the bulk of the website.</p>
                <Button>This is an example of a Button.</Button>
                <Button color="blue">This is an example of a blue Button.</Button>
            </ContentContainer>

            <ContentContainer>
                <h3>Expandable Test</h3>
                <Expandable initialState={<>
                    <button>click me</button>
                </>} expandedState={<>
                    
                </>} options={{}}></Expandable>
            </ContentContainer>

            <ColorShowcase colors={colors} dark={true} ></ColorShowcase>
            <ColorShowcase colors={colors} dark={false} ></ColorShowcase>
        </div>
    )
}