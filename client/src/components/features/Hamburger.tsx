import { forwardRef } from "react";

type HamburgerProps = {
    active: boolean;
}

const Hamburger = forwardRef<HTMLButtonElement, HamburgerProps>(({ active }, ref) => (
    <button
        id="topbar-hamburger-btn"
        aria-label={active ? "Close menu" : "Open menu"}
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        ref={ref}
    >
        <svg
            id="topbar-hamburger"
            className={`hamburger-svg${active ? " active" : ""}`}
            viewBox="-5 -5 10 10"
            width={48}
            height={48}
            stroke="#fff"
        >
            <line className="line top" x1="-4" y1="-2" x2="4" y2="-2" strokeLinecap="round" strokeWidth="1" />
            <line className="line bottom" x1="-4" y1="2" x2="4" y2="2" strokeLinecap="round" strokeWidth="1" />
        </svg>
    </button>
));

export default Hamburger;
