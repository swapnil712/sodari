import { BreadcrumbProps } from "@/types/component";
import Icon from "./Icon";

export default function BreadCrumb ( { items } : BreadcrumbProps) {
    return <nav aria-label="Breadcrumb" className="my-5 text-sm">
        <ol className="flex flex-row items-center gap-3 list-none p-0 m-0">
            <li className="flex items-center">
                <a href="/" className="text-muted" aria-label="Home">
                    <Icon icon="home" />
                </a>
            </li>
            { items.map(( item, index) => {
                const isLast = index === items.length - 1
                return <li className="flex items-center gap-3" key={ index }>
                    <Icon icon="chevron_right" />
                    <a
                        className="flex hover:text-base flex-row items-center gap-3 group"
                        href={ item.link }
                        aria-current={ isLast ? "page" : undefined }>
                        <span className="group-hover:underline">{ item.label }</span>
                    </a>
                </li>
            })}
        </ol>
    </nav>
}
