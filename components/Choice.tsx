import { ChoiceProps } from "../types/component";
import { ReactNode } from "react";
import Icon from "./Icon";

export default function Choice ( { id, label, isChecked, subtitle, type, onChange } : ChoiceProps ) {

    let iconPlacement = "indeterminate_check_box"
    if ( type === "checkbox" ) {
        iconPlacement = isChecked ? "check_box" : "check_box_outline_blank"
    }
    if ( type === "radio" ) {
        iconPlacement = isChecked ? "radio_button_checked" : "radio_button_unchecked"
    }

    const subtitleId = subtitle ? `${ id }-subtitle` : undefined

    return <label htmlFor={ id } className="block flex gap-2 py-1 cursor-pointer text-base hover:text-muted">

        {/* Custom visual indicator – decorative, the native input conveys state. */}
        { type !== "switch" && <div aria-hidden="true" className={ isChecked ? "text-primary" : "text-muted"}>
            <Icon icon={ iconPlacement } />
        </div>}

        <input
            id={ id }
            type={ type === "switch" ? "checkbox" : type }   // radio/checkbox/switch → native
            role={ type === "switch" ? "switch" : undefined }
            checked={ isChecked }
            aria-describedby={ subtitleId }
            onChange={ (e) => onChange?.(e.target.checked) }
            className="opacity-0 absolute"
        />

        <div className="flex-1">
            <p className={ isChecked ? "font-bold" : "font-normal" }>{ label }</p>
            { subtitle && <p id={ subtitleId } className="text-muted text-sm">{ subtitle }</p> }
        </div>

        { type === "switch" && <div aria-hidden="true" className={`flex items-center w-12 h-7 rounded-2xl ${ isChecked ? "bg-success justify-end" : "bg-muted justify-start" }`}>
            <div className="w-5 h-5 bg-white rounded-full m-1"></div>
        </div>}
    </label>
}



export function ChoiceGroup ({ label, type, children } : { label?: string, type?: "radio" | "checkbox" | "switch", children: ReactNode}) {
    // Radio groups benefit from an explicit radiogroup role on the fieldset.
    return <fieldset
        role={ type === "radio" ? "radiogroup" : undefined }
        aria-label={ label }
        className="mb-5">
        { label && <legend className="font-bold mb-2 text-base">{ label }</legend> }
        { children }
    </fieldset>
}
