//imports css + assets + routing 
import { NavLink } from "react-router-dom";

import "./footer.scss";

import logo from "@assets/images/branding/branding_full.svg";
import linkIcon from "@assets/images/icons/icons_link.svg";
import routes from "@utils/routing"


function Footer() { //main functionr
    const copyrightDate = new Date();
    const copyrightYear = copyrightDate.getFullYear();
    return ( //What the user sees when component is used


        <footer id="footer">
            <div id="footer-content">
                <div id="footer-team-info">
                    <NavLink to="/" >
                        <img src={logo} alt="team logo" id="footer-team-icon" />
                    </NavLink>
                </div>
                <div className="glossary">
                    {
                        routes.map(mainRoute => (
                            <div className="glossary-section" key={mainRoute.path || mainRoute.title}>
                                <NavLink
                                    to={mainRoute.path}
                                    {...(mainRoute.external ? { target: "_blank" } : {})}>
                                    {mainRoute.title}
                                </NavLink>
                                {
                                    mainRoute.children?.map(subRoute => (
                                        <NavLink to={subRoute.path}
                                            key={subRoute.path || subRoute.title}
                                            {...(subRoute.external ? { target: "_blank" } : {})}>
                                            {subRoute.title}
                                            {
                                                subRoute.external && <img className="link-icon" src={linkIcon} />
                                            }
                                        </NavLink>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id="appearance-mode">
            </div>
            <div id="footer-end">
                <span id="footer-copyright">© 1997-{copyrightYear} The 2nd Law Enforcers, FRC Team 178. All Rights Reserved.</span>
                <div id="footer-socials">
                    <a href="https://www.youtube.com/user/Team178Enforcers" target="_blank">

                    </a>
                    <a href="https://www.facebook.com/FRC178" target="_blank">

                    </a>
                    <a href="https://www.instagram.com/team178" target="_blank">
                      
                    </a>
                    <a href="https://github.com/team178" target="_blank">

                    </a>
                    <a href="mailto:ContactUs@FarmingtonRobotics.org">


                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;