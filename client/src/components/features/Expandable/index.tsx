import { ReactNode, useCallback, useEffect, useRef, useState } from "react"

import "./expandable.scss";
import ContentContainer from "../ContentContainer";

export type ExpandableOptions = {
    initialStyles?: Object;
    expandedStyles?: Object;
}

export type ExpandableProps = {
    initialState: ReactNode;
    expandedState: ReactNode;
    options: ExpandableOptions;
}

export default function Expandable(props: ExpandableProps) {
    const menuRef = useRef<HTMLDivElement>(null);
    const initialRef = useRef<HTMLDivElement>(null);
    const expandedRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);

    const [elementOpen, setElementOpen] = useState(false);
    const [canOpen, setCanOpen] = useState(true);

    const transitionDurationMs = 400;

    useEffect(() => {
        menuRef.current?.style.setProperty('--expandable-transition-duration', transitionDurationMs + 'ms');
    }, [menuRef]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && !canOpen) {
                onCollapse();
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (menuRef.current &&
                !menuRef.current.contains(target)
            ) {
                onCollapse();
            }

        }

        window.addEventListener('keydown', handleEscape);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [canOpen]);

    const onExpand = useCallback(() => {
        if (!menuRef.current || !placeholderRef.current || !initialRef.current) return;
        if (!canOpen) return;

        const menu = menuRef.current;
        const placeholder = placeholderRef.current;
        const initial = initialRef.current;

        const initialScreenBox = menu.getBoundingClientRect();

        menu.style.top = initialScreenBox.top.toString() + "px";
        menu.style.left = initialScreenBox.left.toString() + "px";
        menu.style.width = initialScreenBox.width.toString() + "px";
        menu.style.height = initialScreenBox.height.toString() + "px";

        initial.style.width = initialScreenBox.width.toString() + "px";
        initial.style.height = initialScreenBox.height.toString() + "px";

        menu.style.position = "fixed";
        placeholder.style.width = initialScreenBox.width.toString() + "px";
        placeholder.style.height = initialScreenBox.height.toString() + "px";
        placeholder.style.display = "block";

        const navbarCurtain = document.getElementById("navbar-curtain");

        if (navbarCurtain) {
            navbarCurtain.classList.add("extended");
        }

        document.documentElement.style.overflow = "hidden";

        (async () => {
            await new Promise(resolve => setTimeout(resolve, 10));
            menu.style.transition = "background-color var(--expandable-transition-duration) ease, border-radius var(--expandable-transition-duration) ease, border var(--expandable-transition-duration) ease, box-shadow var(--expandable-transition-duration) ease, top var(--expandable-transition-duration) cubic-bezier(.4, 1.4, .6, 1), left var(--expandable-transition-duration) cubic-bezier(.4, 1.4, .6, 1), width var(--expandable-transition-duration) cubic-bezier(.4, 1.4, .6, 1), height var(--expandable-transition-duration) cubic-bezier(.4, 1.4, .6, 1)";
            await new Promise(resolve => setTimeout(resolve, 10));

            menu.style.width = "80vw";
            menu.style.height = "80vh";
            menu.style.top = `calc(10vh + var(--navbar-height) / 2)`;
            menu.style.left = "10vw";

            setCanOpen(false);
        })(); // IIFE

        setElementOpen(true);
    }, [menuRef, placeholderRef, initialRef, canOpen, elementOpen]);

    const onCollapse = useCallback(() => {
        if (!menuRef.current || !placeholderRef.current || !initialRef.current) return;
        if (canOpen) return;

        const menu = menuRef.current;
        const placeholder = placeholderRef.current;
        const initial = initialRef.current;

        const initialScreenBox = placeholder.getBoundingClientRect();

        menu.style.top = initialScreenBox.top.toString() + "px";
        menu.style.left = initialScreenBox.left.toString() + "px";
        menu.style.width = initialScreenBox.width.toString() + "px";
        menu.style.height = initialScreenBox.height.toString() + "px";


        // menu.style.position = "fixed";
        placeholder.style.width = initialScreenBox.width.toString() + "px";
        placeholder.style.height = initialScreenBox.height.toString() + "px";

        const navbarCurtain = document.getElementById("navbar-curtain");

        if (navbarCurtain) {
            navbarCurtain.classList.remove("extended");
        }

        (async () => {
            await new Promise(resolve => setTimeout(resolve, 400));

            initial.style.width = "";
            initial.style.height = "";

            menu.style.top = "";
            menu.style.left = "";
            menu.style.width = "";
            menu.style.height = "";
            menu.style.position = "";
            menu.style.transition = "";

            placeholder.style.display = "none";

            setCanOpen(true);

            document.documentElement.style.overflow = "";
        })(); // IIFE

        setElementOpen(false);
    }, [menuRef, placeholderRef, initialRef, canOpen, elementOpen]);

    return (
        <div className={`expandable-menu-container${elementOpen ? " expandable-active" : ""}${canOpen ? "" : " expandable-en-expansion"}`}>
            <div className="expandable-placeholder" ref={placeholderRef}></div>
            <div className="expandable-menu" ref={menuRef}>
                <div className="expandable-initial" ref={initialRef} style={props.options.initialStyles} onClick={onExpand}>
                    {props.initialState}
                </div>
                <div className="expandable-expanded" ref={expandedRef} style={props.options.expandedStyles}>
                    <div className="expandable-topbar">
                        <button onClick={onCollapse} className="expandable-close-button">Close</button>
                    </div>
                    <div className="expandable-expanded-content">
                        {props.expandedState}
                    </div>
                </div>
            </div>
        </div>
    )
}