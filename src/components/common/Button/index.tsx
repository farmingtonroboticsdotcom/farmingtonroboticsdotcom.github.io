import { useNavigate } from "react-router-dom";
import styles from "./Button.module.scss";

type ButtonProps = {
    id?: string;
    color?: "gold" | "blue";
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    to?: string;
    width?: string;
};

export default function Button({
    id,
    children,
    color,
    onClick,
    className,
    to,
    width,
}: ButtonProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        onClick && onClick();
        to && navigate(to);
    };

    return (
        <button
            id={id}
            className={`primitive-button ${styles.button} ${styles[color ?? "gold"]} ${className ?? ""}`}
            style={{width: width ?? ""}}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
