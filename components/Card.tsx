import { CardProps } from "@/types/component";
import Button from "./Button";

export default function Card ( { title, maxWidth, description, media, primaryAction, secondaryAction } : CardProps ) {
    // Tie the card region to its title for assistive tech.
    const titleId = `card-title-${ title?.replace(/\s+/g, "-").toLowerCase() }`

    return <article
        style={{ maxWidth : maxWidth || undefined }}
        aria-labelledby={ titleId }
        className="bg-white rounded-lg overflow-hidden shadow-md">
        { media && <img src={ media.src } className="w-full" alt={ media.alt ?? "" } />}
        <div className="p-4">
            <h3 id={ titleId } className="text-base text-lg font-bold">{ title }</h3>
            <p className="text-muted text-sm">{ description }</p>
        </div>

        { (primaryAction || secondaryAction) && <div className="p-4 justify-end border-t border-stroke flex gap-2">
            { secondaryAction && <Button
                variant="secondary"
                onClick={ secondaryAction?.onClick }
                label={ secondaryAction.label }
                size="sm" /> }
            { primaryAction && <Button
                variant="primary"
                onClick={ primaryAction?.onClick }
                label={ primaryAction.label }
                size="sm" /> }
        </div>}
    </article>
}
