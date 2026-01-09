export type PageRoute = {
    title: string;
    path: string;
    external?: boolean;
    unnecessary?: boolean;
    children?: Array<PageRoute>;
};

type Language = {
    code: string;
    localizedName: string;
};

const pageRoutes: PageRoute[] = [
    {
        title: "About",
        path: "/about",
        children: [
            {
                title: "Contact Form",
                path: "https://forms.gle/J3bxBJuJEyo4gSWh6",
                external: true,
            },
            {
                title: "Mentor Interest",
                path: "https://forms.gle/18rWKA189eZ5ktyV8",
                external: true,
            },
            {
                title: "Team History",
                path: "/about/history",
            },
            {
                title: "Disciplines",
                path: "/about/disciplines",
            },
            {
                title: "Coaches & Mentors",
                path: "/about/advisors",
            },
        ],
    },
    {
        title: "FIRST",
        path: "https://www.firstinspires.org",
        external: true,
        children: [
            {
                title: "About FIRST",
                path: "/first",
            },
            {
                title: "FIRST in Farmington",
                path: "/first/farmington",
            },
        ],
    },
    {
        title: "Support Us",
        path: "/support",
        children: [
            {
                title: "Donate",
                path: "https://farmingtonfor.square.site/",
                external: true,
            },
            {
                title: "Our Sponsors",
                path: "/support/sponsors",
            },
            {
                title: "Raffle",
                path: "/support/raffle",
            },
        ],
    },
    {
        title: "Outreach",
        path: "/outreach",
        children: [
            {
                title: "Events",
                path: "/outreach/events",
            },
            {
                title: "Shared resources",
                path: "/outreach/resources",
            },
            {
                title: "Publishings",
                path: "/outreach/publishings",
                external: true,
            },
            // {
            //     title: "FIRST Events",
            //     path: "/outreach/first"
            // },
            // {
            //     title: "STEAM Events",
            //     path: "/outreach/steam", //STEAM DAY, Maker fair,
            // },
            // {
            //     title: "GitHub",
            //     path: "https://github.com/team178",
            //     external: true,
            // },
        ],
    },
    {
        title: "Media",
        path: "https://www.youtube.com/user/Team178Enforcers",
        external: true,
        unnecessary: true,
        children: [
            {
                title: "YouTube",
                path: "https://www.youtube.com/user/Team178Enforcers",
                external: true,
            },
            {
                title: "Facebook",
                path: "https://www.facebook.com/FRC178",
                external: true,
            },
            {
                title: "Instagram",
                path: "https://www.instagram.com/team178",
                external: true,
            },
        ],
    },
];

const languages: Language[] = [
    { code: "en", localizedName: "English" },
    // { code: "es", localizedName: "Español" },
    // { code: "fr", localizedName: "Français" },
    // { code: "zh", localizedName: "中文" },
    // { code: "ja", localizedName: "日本語" },
    // { code: "ko", localizedName: "한국어" },
    // { code: "hi", localizedName: "हिंदी" },
    // { code: "ar", localizedName: "عربي" }
];

const extras_db = {
    __credits: "/not-found/devs",
    "styles pls": "/not-found/demos",
};

export function findRouteTitleByPath(
    needle: string,
    haystack?: PageRoute[]
): string {
    let routes = haystack ?? pageRoutes;

    for (const route of routes) {
        if (route.path == needle) {
            return route.title;
        }

        if (route.children) {
            const found = findRouteTitleByPath(needle, route.children);
            if (found) return found;
        }
    }

    return "";
}

export default pageRoutes;
export { languages, extras_db };
