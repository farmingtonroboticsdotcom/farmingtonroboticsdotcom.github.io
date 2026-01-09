import "./resources.scss";

import ContentContainer from "@/components/features/ContentContainer";

export default function Resources() {
    return (
        <div id="resources-page">
            <ContentContainer id="resource-github" reverse={true}>
                <h3 className="header">GitHub</h3>

                <p>
                    Want to see where all our code lives? Check out our{" "}
                    <a href="https://github.com/team178" target="_blank">
                        GitHub
                    </a>
                    !
                </p>
            </ContentContainer>

            <ContentContainer id="resource-bylaws" reverse={true}>
                <h3 className="header">Bylaws</h3>
                <p>Our bylaws explain how we run the team. View them here:</p>

                <iframe
                    src="https://drive.google.com/file/d/1BPt3aADx7WUi9Zm5Tp4LZI2D0zB0XUSd/preview"
                    height={520}
                    allow="autoplay"
                    id="resource-bylaws-iframe"
                />
            </ContentContainer>

            <ContentContainer id="resource-handbook" reverse={true}>
                <h3 className="header">Handbook</h3>
                <p>Here's the handbook.</p>

                <iframe
                    src="https://docs.google.com/document/d/12OgOtXaI9zpM-eKbGi2GOaabaF69QsgKriM7jatsjuo/preview?tab=t.0"
                    height={520}
                    allow="autoplay"
                    id="resource-bylaws-iframe"
                />
            </ContentContainer>
        </div>
    );
}
