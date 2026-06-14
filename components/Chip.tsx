import { ChipProps } from "@/types/component";
import Icon from "./Icon";

export default function Chip ( { icon, label, dismissAction } : ChipProps ) {
    return <div className="bg-light flex items-center text-base rounded-3xl p-2">
        { icon && <Icon icon={ icon } />}
        <span className="text-sm flex-1 px-2">{ label }</span>
        { dismissAction && <button
            type="button"
            onClick={ dismissAction }
            aria-label={`Remove ${ label }`}>
            <Icon icon="close" />
        </button> }
    </div>
}
