import { AvatarProps } from "@/types/component";
import Icon from "./Icon";

export default function Avatar ( { variant, bgColor, value, src, alt } : AvatarProps ) {

    let content
    let wrapperStyle
    let wrapperBg = bgColor ? bgColor : "bg-primary"
    let wrapperLabel: string | undefined

    switch (variant) {
        case "icon":
            wrapperStyle = "text-white"
            content = value ? <Icon icon={ value } /> : <Icon icon="folder" />
            wrapperLabel = value || "folder"
            break;

        case "image":
            // alt should be supplied by the caller; empty string marks it decorative.
            content = <img src={ src } alt={ alt ?? "" } className="rounded w-full h-full" />
            break;

        case "initials" : default:
            wrapperStyle = "text-white"
            content = <>{ value }</>
            wrapperLabel = value
            break;
    }

    // For icon/initials variants the wrapper carries the accessible name (img role);
    // for the image variant the inner <img alt> already provides it.
    return <div
        role={ variant === "image" ? undefined : "img" }
        aria-label={ variant === "image" ? undefined : wrapperLabel }
        className={`${ wrapperBg} ${ wrapperStyle } overflow-hidden w-10 h-10 flex justify-center items-center rounded-full`}>
        { content }
    </div>
}
