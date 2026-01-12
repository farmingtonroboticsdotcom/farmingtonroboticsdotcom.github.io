import { ReactNode, RefObject, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export type ScrollToProps = {
    children?: ReactNode;
    pos?: number; // px on page
    item?: RefObject<HTMLElement>; // TODO implement item scrollto from ref
}

export default function ScrollTo(props: ScrollToProps) {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 100);

        requestAnimationFrame(() => {
            window.scrollTo({
                top: props.pos ?? 0,
                left: 0,
                behavior: 'smooth',
            });
        });
    }, [pathname]);

    return (<>{props.children}</>);
}