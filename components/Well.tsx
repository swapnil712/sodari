import { ReactNode } from "react";

type WellType = {
    direction?: "row" | "column",
    isCollapsed?: boolean,
    children : ReactNode
}

export default function Well ( { isCollapsed, children, direction } : WellType ) {
    return <div className={`bg-white shadow overflow-hidden flex
    ${ direction === "row" ? "flex-row" : "flex-col" }
     ${ isCollapsed ? "" : "p-3 gap-3" }
     mb-3 rounded-lg`}>
        { children }
    </div>
}
