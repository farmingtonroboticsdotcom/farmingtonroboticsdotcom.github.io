import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { formatDocumentTitle } from "@/utils/general";
import { findRouteTitleByPath } from "@/utils/routing";

type GeneralProps = {
    children?: ReactNode;
};

export default function General({ children }: GeneralProps) {
    const location = useLocation();

    useEffect(() => {
        document.title = formatDocumentTitle(
            findRouteTitleByPath(location.pathname)
        );
        return () => {
            document.title = "Enforcers Team 178";
        };
    }, [location]);

    return <>{children}</>;
}
