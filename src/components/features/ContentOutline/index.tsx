import { NavLink } from "react-router-dom";
import "./content-outline.scss"

/**
 * Represents a single header item in a content outline.
 *
 * @property name - The display name or title of the header.
 * @property url - A link or id(#+id) to navigate/scroll to on click.
 */
export type ContentOutlineHeader = {
    name: string,
    url?: string,
    external?: boolean,
}

export type ContentOutlineProps = {
    headers: ContentOutlineHeader[];
    label?: string;
    className?: string;
    color?: 'blue' | 'gold';
}

export default function ContentOutline(props: ContentOutlineProps) {
    return (
        <div className="page-content-outline-container">
            {props.label && (
                <span className="page-content-outline-label">{props.label}</span>
            )}
            
            <div className={`page-content-outline ${props.className ?? ""}`}>
                {
                    props.headers.map((header, i) => (
                        <NavLink className={`page-content-outline-header ${props.color ? props.color : ''}`}
                            to={header.url ?? ``}
                            key={i}
                            state={{ targetId: header.url ?? header.name.toLowerCase().split(' ').join('-') }}
                            {...(header.external ? { target: "_blank" } : {})}>
                            {header.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}