import { ButtonProps } from "../types/component";
import Icon from "./Icon";
import { ReactNode } from "react";

export default function Button ( { variant, size, icon, rightIcon, disabled, onClick, label, ariaLabel } : ButtonProps ) {

    const sizeBase = {
        "lg" : "font-xl font-bold p-3 rounded",
        "sm" : "text-sm p-2 rounded-md"
    }

    const colorBase = {
        "primary" : "bg-primary text-white border-primary shadow-md",
        "secondary" : "bg-white hover:bg-light text-base border-stroke",
        "ghost" : "bg-transparent hover:bg-light border-transparent text-base",
        "danger" : "bg-danger text-white hover:opacity-90 border-transparent",
        "floating" : `${ size === "lg" ? "w-15 h-15" : "w-10 h-10" } rounded-full bg-secondary flex items-center justify-center text-white`
    }

    // Icon-only buttons need an explicit accessible name.
    const accessibleName = ariaLabel || (!label ? icon || rightIcon : undefined)

    return <button type="button" disabled={ disabled } aria-disabled={ disabled || undefined }
        aria-label={ accessibleName } onClick={ onClick }
        className={
            `transition-transform duration-150 ease-out hover:scale-102 active:scale-98
             cursor-pointer items-center inline-flex gap-1 border-1 ${ variant !== "floating" && sizeBase[size] } ${ colorBase[variant] }`
        }>
        { icon && <Icon icon={ icon } />}
        { label && <span>{ label }</span> }
        { rightIcon && <Icon icon={ rightIcon } />}
    </button>
}

export function FabWrapper ( { children } : { children : ReactNode }) {
    return <div className="fixed flex-col flex items-center gap-2 right-0 bottom-0 m-5">
        { children }
    </div>
}