import "./not-found.scss";
import Ip from "@components/features/Ip";
import Ip6 from "@components/features/Ip6";

export default function NotFound() {
    return (
        <div id="not-found-page">
            <div id="header">
                <h1 id="notfound">404</h1>
                <h2 id="notfound-desc">The page you are looking for doesn't exist.</h2>
                <h3> <Ip /> aka. <Ip6 /></h3>
            </div>
        </div>
    )
}