import { InputProps } from "@/types/component";
import Icon from "./Icon";

export default function Input ( { id, type, label, placeholder, leadingIcon, rightAction, helperText, error, value, onChange } : InputProps) {

    const errorId = error ? `${ id }-error` : undefined
    const helperId = helperText ? `${ id }-helper` : undefined
    const describedBy = [errorId, helperId].filter(Boolean).join(" ") || undefined

    return <div className="flex flex-row gap-3 mb-5">
        { leadingIcon && <div aria-hidden="true" className={ error ? "text-danger" : "text-muted" }>
            <Icon icon={ leadingIcon } />
        </div> }

        <div className="flex flex-col flex-1 group">
            <label className="text-base font-bold" htmlFor={ id }>{ label }</label>

            <div className={`flex flex-row gap-2 border-b-2 flex-1
                ${ error ? "border-danger" : "border-stroke" }
                group-focus-within:border-primary`}>
            <input
                id={ id }
                type={ type }
                value={ value }
                onChange={ onChange }
                aria-invalid={ error ? true : undefined }
                aria-describedby={ describedBy }
                className="pb-2 flex-1 mb-1 outline-0" placeholder={ placeholder } />

            { rightAction && <button
                type="button"
                onClick={ rightAction.onClick }
                aria-label={ rightAction.label || rightAction.icon }>
                <Icon icon={ rightAction.icon } />
            </button>}

            </div>

            { error && <p id={ errorId } role="alert" className="text-danger text-sm">{ error }</p> }
            { helperText && <p id={ helperId } className="text-muted text-sm">{ helperText }</p> }
        </div>
    </div>
}
