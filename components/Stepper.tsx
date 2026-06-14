import { StepperType } from "@/types/component"
import Avatar from "./Avatar"

export default function Stepper({ steps = [], active, direction, onClick }: StepperType) {
    const isCol = direction === "col"

    return (
        <ol
            aria-label="Progress"
            className={`stepper flex list-none p-0 m-0 my-5 ${
                isCol ? "flex-col content-start items-center" : "flex-row w-full"
            }`}
        >
            {steps.map((item) => {
                const isActive = active === item.id

                return (
                    <li
                        key={item.id}
                        className={`relative group flex flex-1 w-full ${isCol ? "py-4" : ""}`}
                    >
                        <span
                            aria-hidden="true"
                            className={`border-stroke absolute mx-auto ${
                                isCol
                                    ? "stepper-col w-1 h-15 mt-4 border-s ms-5"
                                    : "border-b h-1 w-full mt-4"
                            }`}
                        />

                        <button
                            type="button"
                            onClick={() => onClick?.(item.id)}
                            aria-current={isActive ? "step" : undefined}
                            className={`flex cursor-pointer hover:opacity-90 ${
                                isCol
                                    ? "flex-row items-start text-start gap-3"
                                    : "flex-col items-center content-center mx-auto text-center gap-1"
                            }`}
                        >
                            <span className="shrink-0 mx-auto z-10">
                                <Avatar
                                    variant={item.icon ? "icon" : "initials"}
                                    bgColor={isActive ? "bg-primary" : "bg-muted"}
                                    value={item.icon || item.label}
                                />
                            </span>

                            <span className="flex-fill">
                                <span
                                    className={`block text-sm ${
                                        isActive ? "font-bold text-primary" : "font-normal"
                                    }`}
                                >
                                    {item.label}
                                </span>
                                {item.subtitle && (
                                    <span className="block text-muted text-xs">{item.subtitle}</span>
                                )}
                            </span>
                        </button>
                    </li>
                )
            })}
        </ol>
    )
}