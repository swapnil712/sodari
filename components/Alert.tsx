import { AlertProps } from "@/types/component";
import Icon from "./Icon";

export const toneBase = {
    "danger" : "bg-danger text-white",
    "info" : "bg-light text-base",
    "success" : "bg-success text-white",
    "warning" : "bg-warning text-base"
}

export default function Alert ( { tone, label, onDismiss } : AlertProps ) {

    const iconBase = {
        "danger" : "report",
        "info" : "info",
        "success" : "check",
        "warning" : "warning"
    }

    // danger/warning are assertive so they interrupt; info/success are polite.
    const isUrgent = tone === "danger" || tone === "warning"

    return <div
        role={ isUrgent ? "alert" : "status" }
        aria-live={ isUrgent ? "assertive" : "polite" }
        className={`p-2 flex items-center gap-2 rounded my-2 ${ toneBase[tone] }`}>
        <Icon icon={iconBase[tone]} label={ tone } />
        <span className="flex-1">{ label }</span>
        { onDismiss && <button type="button" onClick={ onDismiss } aria-label="Dismiss">
            <Icon icon="close" />
        </button>}
    </div>
}
