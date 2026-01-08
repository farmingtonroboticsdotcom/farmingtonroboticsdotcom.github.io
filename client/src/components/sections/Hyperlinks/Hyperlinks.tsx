import "./hyperlinks.scss"

export type Hyperlink = {
    name: string,
    href: string,
    external?: boolean
}

type HyperlinkProps = {
    objects: Hyperlink[];
}

export default function Hyperlinks({ objects }: HyperlinkProps) {
    return (
        <div className="hyperlinks-page">
            <div className="hyperlinks-container">
                {
                    objects.map((v, i) => (
                        <a className="hyperlink-tag" href={v.href} key={i}>{v.name}</a>
                    ))
                }
            </div>
        </div>
    );
}