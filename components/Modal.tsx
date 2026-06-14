import { ReactNode, useEffect, useRef } from "react"
import Well from "./Well"
import Button from "./Button"
import { ButtonProps } from "@/types/component"

type ModalType = {
    title?: string,
    children: ReactNode,
    size?: "sm" | "lg" | "md" | undefined,
    onClose: () => void,
    buttons: ButtonProps[]
}

const sizeKeys = {
    "sm" : "w-2/5",
    "lg" : "w-4/5",
    "md" : "w-3/5"
}

export default function Modal ( { title, children, size, buttons, onClose } : ModalType ) {

    const dialogRef = useRef<HTMLDivElement>(null)
    const previouslyFocused = useRef<HTMLElement | null>(null)
    const titleId = "modal-title"

    useEffect(() => {
        // Remember what had focus so we can restore it on close.
        previouslyFocused.current = document.activeElement as HTMLElement

        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        // Move focus into the dialog.
        ;(focusable?.[0] ?? dialogRef.current)?.focus()

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
                return
            }
            // Simple focus trap on Tab.
            if (e.key === "Tab" && focusable && focusable.length > 0) {
                const first = focusable[0]
                const last = focusable[focusable.length - 1]
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault()
                    last.focus()
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault()
                    first.focus()
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            previouslyFocused.current?.focus()
        }
    }, [onClose])

    return <div
        className="fixed top-0 left-0 w-full h-full bg-black/60 overflow-auto"
        onClick={ onClose }>
        <div
            ref={ dialogRef }
            role="dialog"
            aria-modal="true"
            aria-labelledby={ title ? titleId : undefined }
            tabIndex={-1}
            onClick={ (e) => e.stopPropagation() }
            className={`${ sizeKeys[ size ? size : "md" ] } p-3 ms-auto`}>
            
            <Well direction="column">

                <header className="border-b pb-3 border-stroke flex w-full items-center">
                    <div className="flex-fill w-full">
                        <h2 id={ titleId } className="text-2xl font-bold text-base">{ title }</h2>
                    </div>
                    <Button onClick={ onClose } variant="ghost" size="sm" icon="close" ariaLabel="Close dialog" />
                </header>

                <section>
                    { children }
                </section>

                { buttons && <footer className="border-t pt-3 border-stroke gap-3 flex-row-reverse flex">
                    { buttons.map(( btn, index ) => <Button key={ index } {...btn} />)}
                </footer>}

            </Well>
        </div>
    </div>
}
