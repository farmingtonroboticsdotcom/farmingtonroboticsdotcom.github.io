import video from "@assets/videos/smth.webm";
import Button from "@components/common/Button";
import Parallax from "@components/features/Parallax";

export default function HomeParallax() {
    return (
        <Parallax
            className="page-header"
            background={
                <video
                    id="page-header-video"
                    src={video}
                    loop
                    playsInline
                    muted
                    autoPlay
                    disablePictureInPicture
                    disableRemotePlayback
                    preload="auto"
                    style={{ margin: "auto" }}
                />
            }
            foreground={
                <div className="page-header-overlay">
                    <h1 id="page-header-title" className="fadeInUp">
                        The 2nd Law Enforcers
                    </h1>
                    <h3 id="page-header-subtitle" className="fadeInUp">
                        FIRST Robotics &bull; Team 178
                    </h3>
                    <Button
                        to="/about"
                        className="home-button fadeInUp"
                        color="blue"
                    >
                        Meet the Team
                    </Button>
                </div>
            }
        />
    )
}