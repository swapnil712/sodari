import { ButtonProps } from "@/types/component";
import Button from "./Button";

export default function PageHeader ( { title, buttons } : { title: string, buttons: ButtonProps[] }) {
    return <header className="flex flex-row items-center">
        <div className="flex-1">
            <h1 className="font-bold text-4xl">{ title }</h1>
        </div>
        <div className="flex flex-row-reverse gap-3" role="group" aria-label="Page actions">
            { buttons.map(( item, index) => <Button {...item} key={ index } />)}
        </div>
    </header>
}
