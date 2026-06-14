import { ReactNode } from "react";
import Icon from "./Icon";
import { AlertVariants, BadgeVariants, ButtonProps } from "../types/component";
import Badge from "./Badge";
import { toneBase } from "./Alert";
import Button from "./Button";
import Well from "./Well";

interface TDVariants {
    label?: string,
    dot?: AlertVariants,
    icon?: string,
    badge?: { tone: BadgeVariants, label: string },
    buttons?: ButtonProps[]
}

export default function Table ( { children, caption } : { children : ReactNode, caption?: string }) {
    return <Well isCollapsed={ true }>
        <table className="w-full">
            { caption && <caption className="sr-only">{ caption }</caption> }
            { children }
        </table>
    </Well>
}

export function Th ({ label, handleSort, sortDirection } : { label: string, handleSort?: () => void, sortDirection?: "ascending" | "descending" | "none" }) {

    let wrapItems = <div className="cursor-pointer hover:text-base flex text-muted items-center gap-2 text-md">
            <span>{ label }</span>
            { handleSort && <Icon icon="arrow_drop_down" />}
        </div>

    return <th
        scope="col"
        aria-sort={ handleSort ? (sortDirection || "none") : undefined }
        className="bg-white hover:bg-light p-3 text-md border-b border-stroke text-left">
        { handleSort
            ? <button type="button" onClick={ handleSort } aria-label={`Sort by ${ label }`}>{ wrapItems }</button>
            : wrapItems }
    </th>
}

export function Td({ label, dot, icon, badge, buttons } : TDVariants ) {
    return <td className="bg-white border-b border-stroke px-2 py-3">
        <div className="flex text-base items-center gap-2">
            { dot && <div aria-hidden="true" className={`${ toneBase[dot] } w-2 h-2 rounded`}></div>}
            { icon && <Icon icon={ icon } /> }
            { label && <span>{ label }</span> }
            { badge && <Badge tone={ badge.tone } label={ badge.label } /> }

            { buttons && <div className="flex items-center gap-3">
                { buttons.map(( item, index) => <Button
                    size="sm"
                    variant={ item.variant }
                    label={ item.label }
                    key={ index } /> )}
            </div>}
        </div>
    </td>
}