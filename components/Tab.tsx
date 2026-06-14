import { TabsProps } from "@/types/component";
import Icon from "./Icon";
import { ReactNode } from "react";

export default function Tab ( { tabs, ariaLabel, active } : TabsProps) {
    return <nav aria-label={ ariaLabel } className="flex bg-secondary">
        { tabs.map(( item, index) => <a
            className={`text-white gap-2 flex hover:bg-primary p-5
            ${ active === item.id ? "font-bold bg-primary" : "opacity-90" }`}
            href={ `#${ item.id }` }
            aria-current={ active === item.id ? "page" : undefined }
            key={ index }>
            { item.icon && <Icon icon={ item.icon } /> }
            { item.label && <span>{ item.label }</span> }
        </a>)}
    </nav>
}

export function SegmentTab ( { tabs, active } : TabsProps) {
    return <nav aria-label="View" className="flex my-5">
        { tabs.map(( item, index) => <a
            className={`text-base text-sm gap-1 flex py-2 px-3 rounded-3xl
            ${ active === item.id ? "font-bold bg-white shadow text-primary" : "hover:text-muted" }`}
            href={ `#${ item.id }` }
            aria-current={ active === item.id ? "page" : undefined }
            key={ index }>
            { item.icon && <Icon icon={ item.icon } /> }
            { item.label && <span>{ item.label }</span> }
        </a>)}
    </nav>
}

export function TabNav ( { children } : { children : ReactNode }) {
    return <header className="flex flex-row bg-secondary justify-between">
        { children }
    </header>
}
