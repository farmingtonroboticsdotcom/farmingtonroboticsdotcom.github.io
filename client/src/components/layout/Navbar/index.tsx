//imports css + assets + routing
import { NavLink, useNavigate } from "react-router-dom";
import {
    useEffect,
    useRef,
    useState,
    useMemo,
    forwardRef,
    useCallback,
} from "react";

import "./navbar.scss";
import navLogo from "@assets/images/branding/branding_icon.svg";
import navLogoActive from "@assets/images/branding/branding_gear.svg";
import linkIcon from "@assets/images/icons/icons_link.svg";
import searchIcon from "@assets/images/icons/icons_search.svg";

import Hamburger from "@components/features/Hamburger";
import routes, { extras_db, languages, PageRoute } from "@utils/routing";
import { clamp, mobileScreen } from "@/utils/general";

const TopbarCenter = forwardRef<
    HTMLDivElement,
    { isMobile: boolean; closeAndScrollTop: () => void }
>(({ isMobile, closeAndScrollTop }, ref) => {
    return (
        <div
            id="topbar-center"
            className={isMobile ? "navbar-mobile" : ""}
            ref={ref}
        >
            {routes.map((mainRoute) => (
                <div
                    className="topbar-sec"
                    key={mainRoute.path || mainRoute.title}
                >
                    <NavLink
                        className="topbar-main-link"
                        to={mainRoute.path}
                        {...(mainRoute.external ? { target: "_blank" } : {})}
                        onClick={closeAndScrollTop}
                    >
                        {mainRoute.title}
                    </NavLink>
                    {isMobile && !mainRoute.unnecessary && (
                        <NavLink
                            className="topbar-sub-link"
                            to={mainRoute.path}
                            {...(mainRoute.external
                                ? { target: "_blank" }
                                : {})}
                            onClick={closeAndScrollTop}
                        >
                            {mainRoute.title}
                            {mainRoute.external && (
                                <img className="link-icon" src={linkIcon} />
                            )}
                        </NavLink>
                    )}
                    {mainRoute.children?.map((subRoute) => (
                        <NavLink
                            className="topbar-sub-link"
                            to={subRoute.path}
                            key={subRoute.path || subRoute.title}
                            {...(subRoute.external ? { target: "_blank" } : {})}
                            onClick={closeAndScrollTop}
                        >
                            {subRoute.title}
                            {subRoute.external && (
                                <img className="link-icon" src={linkIcon} />
                            )}
                        </NavLink>
                    ))}
                </div>
            ))}
        </div>
    );
});

function NavBar() {
    const navigate = useNavigate();

    const searchButtonRef = useRef<HTMLButtonElement | null>(null);
    const searchContainerRef = useRef<HTMLDivElement | null>(null);
    const searchFieldRef = useRef<HTMLInputElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const hamburgerRef = useRef<HTMLButtonElement | null>(null);
    const topbarCenterRef = useRef<HTMLDivElement | null>(null);

    const [query, setQuery] = useState("");
    const [highlightIndex, setHighlightIndex] = useState(0);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("en");
    const [isMobile, setIsMobile] = useState(mobileScreen());

    const SUB_LINK_OPACITY = 0.8;
    const SUB_LINK_VISIBLE_TRANSFORM = "translateY(0)";
    const SUB_LINK_HIDDEN_TRANSFORM = "translateY(12px)";

    const animateSubLinks = async (show: boolean) => {
        const subLinks = Array.from(
            document.querySelectorAll(".topbar-sub-link,.topbar-lang")
        ) as HTMLElement[];
        for (const el of subLinks) {
            if (show) {
                await new Promise((res) => setTimeout(res, 25)); // IGNORE THE FOLLOWING BC NO WORK
                // choosing to stop this due to the lack of a termination
                // function when navbar is closed between the start and
                // end of this call
                el.style.opacity = SUB_LINK_OPACITY.toString();
                el.style.transform = SUB_LINK_VISIBLE_TRANSFORM;
            } else {
                el.style.opacity = "0";
                el.style.transform = SUB_LINK_HIDDEN_TRANSFORM;
            }
        }
    };

    /* Filter search results */
    const filteredSearchResults = useMemo(() => {
        // memoize (cache values) to reduce lag and cpu strain
        let all: PageRoute[] = [{ title: "Home", path: "/" }];
        routes.forEach((route) => {
            all.push(route);
            if (route.children) all.push(...route.children);
        });

        return all
            .filter((r) =>
                r.title.toLowerCase().startsWith(query.toLowerCase())
            )
            .sort((a, b) => {
                const lenDiff = a.title.length - b.title.length;
                return lenDiff !== 0 ? lenDiff : a.title.localeCompare(b.title);
            })
            .slice(0, 6);
    }, [query]);

    /* Set search highlight index when search results change */
    useEffect(() => {
        setHighlightIndex(0);
    }, []);

    /** Handle key down for search */
    const handleSearchKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setHighlightIndex((prev) =>
                    clamp(prev + 1, 0, filteredSearchResults.length - 1)
                );
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setHighlightIndex((prev) =>
                    clamp(prev - 1, 0, filteredSearchResults.length - 1)
                );
            } else if (e.key === "Enter") {
                e.preventDefault();
                const selected = filteredSearchResults[highlightIndex];

                if (selected) {
                    selected.external
                        ? window.open(selected.path)
                        : navigate(selected.path);
                } else if (extras_db[query as keyof typeof extras_db]) {
                    navigate(extras_db[query as keyof typeof extras_db]);
                } else if (query === "__mobile_RSKI") {
                    document.documentElement.classList.toggle("mobile");
                }

                closeSearch();
            }
        },
        [filteredSearchResults, query, highlightIndex]
    );

    /** Close the navbar */
    const closeNavbar = useCallback(async () => {
        if (!navRef.current) return;

        navRef.current.style.height = "var(--navbar-height)";
        navRef.current.classList.remove("extended");
        setIsMenuOpen(false);

        if (topbarCenterRef.current) {
            topbarCenterRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }

        document.documentElement.style.overflow = "";
        await animateSubLinks(false);
    }, [navRef, topbarCenterRef]);

    /** Open the search menu */
    const openSearch = useCallback(() => {
        setQuery("");
        setHighlightIndex(0);
        setIsSearchOpen(true);
        closeNavbar();
        setTimeout(() => {
            searchFieldRef.current?.focus();
            if (searchContainerRef.current)
                searchContainerRef.current.style.pointerEvents = "initial";
            document
                .getElementById("navbar-curtain")
                ?.classList.add("site-search");
        }, 0);
    }, [closeNavbar]);

    /** Close the search menu */
    const closeSearch = () => {
        setIsSearchOpen(false);
        if (searchContainerRef.current) {
            searchContainerRef.current.style.pointerEvents = "none";
        }
        searchFieldRef.current?.blur();
        document
            .getElementById("navbar-curtain")
            ?.classList.remove("site-search");
    };

    /** Open the navbar */
    const openNavbar = useCallback(async () => {
        if (!navRef.current) return;

        navRef.current.style.height = "var(--navbar-extended-height)";
        navRef.current.classList.add("extended");
        setIsMenuOpen(true);

        closeSearch();

        animateSubLinks(false);

        document.documentElement.style.overflow = "hidden";
        await animateSubLinks(true);
    }, [closeSearch]);

    /** Handle page resize */
    const handleResize = useCallback(() => {
        const navbar = navRef.current;
        const hamburger = hamburgerRef.current;

        setIsMobile(mobileScreen());

        if (!navbar) return;

        if (isMobile) {
            navbar.onmouseenter = null;
            navbar.onmouseleave = null;
            navbar.classList.add("navbar-mobile");

            if (hamburger) {
                hamburger.onclick = () => {
                    isMenuOpen ? closeNavbar() : openNavbar();
                    if (isSearchOpen) closeSearch();
                };
            }

            const subLinks = document.querySelectorAll(
                ".topbar-sub-link,.topbar-lang"
            ) as NodeListOf<HTMLElement>;
            subLinks.forEach((el) => {
                el.style.opacity = SUB_LINK_OPACITY.toString();
                el.style.transform = SUB_LINK_VISIBLE_TRANSFORM;
            });
        } else {
            navbar.onmouseenter = openNavbar;
            navbar.onmouseleave = closeNavbar;
            navbar.classList.remove("navbar-mobile");

            if (hamburger) hamburger.onclick = null;

            const subLinks = document.querySelectorAll(
                ".topbar-sub-link,.topbar-lang"
            ) as NodeListOf<HTMLElement>;
            subLinks.forEach((el) => {
                el.style.opacity = "0";
                el.style.transform = SUB_LINK_HIDDEN_TRANSFORM;
            });
        }
    }, [
        isMobile,
        isMenuOpen,
        isSearchOpen,
        openNavbar,
        closeNavbar,
        closeSearch,
    ]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (
                e.key === "=" ||
                ((e.key === ";" || e.key === ";") && (e.ctrlKey || e.metaKey))
            ) {
                isSearchOpen ? closeSearch() : openSearch();
            }
        },
        [isSearchOpen]
    );

    const handleScroll = useCallback(() => {
        document.documentElement.classList.toggle(
            "scrolled",
            window.scrollY > 48
        );
    }, []);

    /** Navbar update on page resize and scroll + Open and close search via ESC */
    useEffect(() => {
        handleResize(); // allow events to initiallize properly

        window.addEventListener("resize", handleResize);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleResize, handleKeyDown, handleScroll]);

    /** Update the current language abreviation based on cookie */
    useEffect(() => {
        const langMatch = document.cookie.match(/(?:^|;\s*)lang=([^;]*)/);
        if (langMatch?.[1] && langMatch[1] !== currentLang) {
            setCurrentLang(langMatch[1]);
        }
    }, []);

    const closeAndScrollTop = () => {
        closeNavbar();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <nav ref={navRef} role="navigation" aria-label="Main navigation">
                <div id="topbar">
                    <div id="topbar-logo-container">
                        <NavLink to="/" onClick={closeAndScrollTop}>
                            <img
                                src={navLogo}
                                className={isMenuOpen ? "active" : ""}
                                alt="logo"
                                id="topbar-logo"
                            />
                            <img
                                src={navLogoActive}
                                className={isMenuOpen ? "active" : ""}
                                alt="logo"
                                id="topbar-logo-active"
                            />
                        </NavLink>
                        <button
                            id="navbar-search-btn"
                            ref={searchButtonRef}
                            onClick={openSearch}
                        >
                            <img src={searchIcon} />
                        </button>
                    </div>

                    {isMobile ? (
                        <div id="navbar-side-buttons">
                            <Hamburger active={isMenuOpen} ref={hamburgerRef} />
                        </div>
                    ) : (
                        <>
                            <TopbarCenter
                                isMobile={isMobile}
                                ref={topbarCenterRef}
                                closeAndScrollTop={closeAndScrollTop}
                            />
                            <div id="topbar-lang-select">
                                <div id="topbar-lang">
                                    <span id="current-lang">{currentLang}</span>
                                </div>
                                {languages
                                    .filter((lang) => lang.code !== currentLang)
                                    .map((lang) => (
                                        <a
                                            className="topbar-lang"
                                            key={lang.code}
                                            onClick={() => {
                                                document.cookie = `lang=${lang.code};path=/;max-age=31536000`;
                                                setCurrentLang(lang.code);
                                                window.location.reload();
                                            }}
                                        >
                                            {lang.localizedName}
                                        </a>
                                    ))}
                            </div>
                        </>
                    )}
                </div>
                {isMobile && (
                    <TopbarCenter
                        isMobile={isMobile}
                        ref={topbarCenterRef}
                        closeAndScrollTop={closeAndScrollTop}
                    />
                )}
            </nav>

            <div
                id="navbar-curtain"
                className={isMenuOpen ? "extended" : ""}
            ></div>

            <div
                id="navbar-search-container"
                className={`${isSearchOpen ? "open" : ""} ${
                    isMobile ? "mobile" : ""
                }`}
                ref={searchContainerRef}
                onBlur={closeSearch}
            >
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    ref={searchFieldRef}
                    placeholder="Keyword(s)"
                />

                {filteredSearchResults.map((val, i) => (
                    <div
                        key={btoa(val.path)}
                        className={`navbar-search-suggestion${
                            i === highlightIndex ? " highlighted" : ""
                        }`}
                        onClick={() => {
                            closeSearch();
                            val.external
                                ? window.open(val.path)
                                : navigate(val.path);
                        }}
                    >
                        <span className="navbar-search-keyword-match">
                            {val.title}
                        </span>
                        <span className="navbar-search-page">{val.path}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default NavBar;
