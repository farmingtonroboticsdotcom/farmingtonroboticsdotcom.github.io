import "./devs.scss"
import ContentContainer from "@/components/features/ContentContainer";
import cascaadeimg from "@/assets/images/photos/189063419.png"
import { useEffect } from "react";

export default function Devs() {

    useEffect(()=>{
        document.title = "Devs - Enforcers Team 178"
        return () =>{
            document.title = "Enforcers Team 178"
        }
    },[])

    return (
        <>
            <div className="devs-desc-page">

                <h1 className="header">Meet the Developers!</h1>

                <ContentContainer
                    id="cascaade"
                    reverse={true}
                    image={{ src: cascaadeimg }}
                >
                    <h1 className="name">Cascaade</h1>
                    <h2 className="dev-desc">
                        Web Developer | UI/UX Designer
                    </h2>
                    <p className="dev-paragraph">
                        Cascaade is a web developer, UI/UX designer, and a
                        programmer for FRC 178. He's played a critical role in helping
                        shape the structure, appearance, and performance of the newly redesigned
                        website.
                    </p>
                </ContentContainer>
                <ContentContainer id="bloxydev" >
                    <h1 className="name">BloxyDev</h1>
                    <h2 className="dev-desc">
                        Web Developer | UI/UX Designer
                    </h2>
                    <p className="dev-paragraph">
                        BloxyDev is a web developer, UI/UX designer, and video editor.
                        He helped to start the redesiging process for the website
                        and has collaborated with other team members to gather information
                        of what they want on the new website.
                    </p>
                </ContentContainer>
                <ContentContainer id="gpt" >
                    <h1 className="name">ChatGPT</h1>
                    <h2 className="dev-desc">
                        Debugger & Developer
                    </h2>
                    <p className="dev-paragraph">
                        provided crucial assistance
                    </p>
                </ContentContainer>
                <ContentContainer id="lwa-nerd" reverse={true}>
                    <h1 className="name">LWA-Nerd</h1>
                    <h2 className="dev-desc">
                        Web Developer | UI/UX Designer | President of the Long Words Association (LWA)
                    </h2>
                    <p className="dev-paragraph">
                        LWA-Nerd is a web developer, UI/UX Designer and a programmer for
                        FRC 178. He's helped create a lot of the essential systems and styling
                        for the website.
                    </p>
                </ContentContainer>
                <ContentContainer id="goodgamer">
                    <h1 className="name">GoodGamer</h1>
                    <h2 className="dev-desc">
                        Web Developer | Head of Communications & Resources
                    </h2>
                    <p className="dev-paragraph">
                        GoodGamer is a web developer and has helped establish essential connections
                        between the WebDev team and the rest of FRC 178.
                    </p>
                </ContentContainer>
                <ContentContainer id="gpt" >
                    <h1 className="name">ChatGPT</h1>
                    <h2 className="dev-desc">
                        Debugger & Developer
                    </h2>
                    <p className="dev-paragraph">
                        provided crucial assistance
                    </p>
                </ContentContainer>
            </div>
        </>
    )
}