import { StepperType } from "@/types/component";
import Icon from "./Icon";
import { useEffect, useState } from "react";

export default function Accordion({ steps = [], active }: StepperType) {
    const [activeId, setActiveId] = useState<string | null>(active ?? null)

    useEffect(() => {
        if (active) setActiveId(active)
    }, [active])

    return (
        <ul className="accordion list-none p-0 m-0">
            {steps.map((step) => {
                const isActive = activeId === step.id

                return (
                    <li
                        key={step.id}
                        className={`border-b border-stroke p-3 transition-colors duration-200 bg-white`}
                    >
                        <button
                            type="button"
                            onClick={() => setActiveId(step.id)}
                            aria-expanded={isActive}
                            className="w-full flex gap-5 text-left cursor-pointer hover:opacity-90"
                        >
                            
                            { step.icon && <div className={ isActive ? "text-primary" : "text-muted" }>
                               <Icon icon={step.icon} />
                            </div> }

                            <span className="flex-1">
                                <span className="flex flex-row w-full items-center">
                                    <span
                                        className={`flex-1 text-lg ${
                                            isActive ? "font-bold text-primary" : ""
                                        }`}
                                    >
                                        {step.label}
                                    </span>
                                    <Icon
                                        icon={ isActive ? "expand_less" : "expand_more" }
                                    />
                                </span>

                                {step.subtitle && (
                                    <span
                                        className={`grid transition-all duration-300 ease-out ${
                                            isActive
                                                ? "grid-rows-[1fr] opacity-100 mt-1"
                                                : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <span className="overflow-hidden block">{step.subtitle}</span>
                                    </span>
                                )}
                            </span>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}