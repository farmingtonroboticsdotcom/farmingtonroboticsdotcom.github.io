// React Imports
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Global Page Effect Imports
import NavBar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import Activate from "@components/features/ActivateBadge";
import ScrollTo from "./components/features/ScrollTo";

// Page Imports
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Devs from "@/pages/NotFound/Devs";
import StyleDemos from "./pages/NotFound/StyleDemos";

import About from "@pages/about/About";
import History from "@/pages/about/History";
import Departments from "@pages/about/Disciplines";
import Advisors from "@pages/about/Advisors";

import First from "@/pages/first/AboutFirst";
import FarmingtonFirst from "@/pages/first/FarmingtonFirst";
import UnifiedRobotics from "@pages/first/UnifiedRobotics";

import Events from "@/pages/outreach/Events";
import FirstEvents from "@/pages/outreach/First";
import SteamEvents from "@/pages/outreach/Steam";
import Resources from "@/pages/outreach/Resources";

import Sponsors from "@pages/support/Sponsors";
import Raffle from "@pages/support/Raffle";

// Other Imports
import Hyperlinks, {
    Hyperlink,
} from "@/components/sections/Hyperlinks/Hyperlinks";
import { mobileScreen } from "./utils/general";
import General from "./components/layout/General";

// Lists of links to display on pages without content
const supportHyperlinks: Hyperlink[] = [
    {
        name: "Donate",
        href: "https://farmingtonfor.square.site",
    },
    {
        name: "Our Sponsors",
        href: "/support/sponsors",
    },
    {
        name: "Raffle",
        href: "/support/raffle",
    },
];

const resourcesHyperlinks: Hyperlink[] = [
    {
        name: "Events",
        href: "/outreach/events",
    },
];

export default function App() {
    const [isMobile, setIsMobile] = useState(mobileScreen());

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(mobileScreen());
        });
    });

    useEffect(() => {
        if (isMobile) {
            document.documentElement.classList.add("document-mobile");
        } else {
            document.documentElement.classList.remove("document-mobile");
        }
    }, [isMobile]);

    return (
        <BrowserRouter>
            <ScrollTo />
            <General />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />
                <Route path="/about/history" element={<History />} />
                <Route path="/about/disciplines" element={<Departments />} />
                <Route path="/about/advisors" element={<Advisors />} />

                <Route path="/first" element={<First />} />
                <Route path="/first/farmington" element={<FarmingtonFirst />} />
                <Route
                    path="/first/unified-robotics"
                    element={<UnifiedRobotics />}
                />

                <Route
                    path="/support"
                    element={<Hyperlinks objects={supportHyperlinks} />}
                />
                <Route path="/support/sponsors" element={<Sponsors />} />
                <Route path="/support/raffle" element={<Raffle />} />

                <Route
                    path="/outreach"
                    element={<Hyperlinks objects={resourcesHyperlinks} />}
                />
                <Route path="/outreach/first" element={<FirstEvents />} />
                <Route path="/outreach/steam" element={<SteamEvents />} />
                <Route path="/outreach/events" element={<Events />} />
                <Route path="/outreach/resources" element={<Resources />} />

                <Route path="/not-found/devs" element={<Devs />} />
                <Route path="/not-found/demos" element={<StyleDemos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Activate />
            <Footer />
        </BrowserRouter>
    );
}
