import { BadgeProps } from "@/types/component";

export default function Badge ( { tone, label } : BadgeProps ) {

    const toneBase = {
        "neutral" : "bg-light text-base",
        "primary" : "bg-primary text-white",
        "success" : "bg-success text-white",
        "warning" : "bg-warning text-base",
        "error" : "bg-danger text-white",
    }

    // Color alone shouldn't convey the tone; expose it as part of the accessible name.
    return <span
        className={`${ toneBase[tone] } p-1 text-sm rounded`}
        aria-label={`${ label } (${ tone })`}>{ label }</span>
}
