import NoContent from "@/components/sections/NoContent";
import "./not-found.scss";
import Button from "@/components/common/Button";

export default function NotFound() {
    return (
        <div id="not-found-page">
            {/* <div id="header">
                <h1 id="notfound">404</h1>
                <h2 id="notfound-desc">The page you are looking for doesn't exist.</h2>
                <h3> <Ip /> aka. <Ip6 /></h3>
            </div> */}
            <NoContent>
                Oh no! It looks like this page doesn't exist!
                <br />
                Why did the robot sneeze? Because it had a <i>virus</i>!
            </NoContent>
            <Button className="button-no-top-margin">Head Home</Button>
        </div>
    )
}