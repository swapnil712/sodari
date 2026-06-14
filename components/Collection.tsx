import { CollectionProps } from "../types/component";
import Avatar from "./Avatar";
import Badge from "./Badge";
import Icon from "./Icon";

export default function Collection ( { link, avatarIcon, leftIcon, label, subtitle, badge, rightIcon  } : CollectionProps ) {
    let content = <div className={`bg-white ${ link && "hover:bg-light" } border-b text-muted hover:text-base border-stroke flex p-4 gap-3 items-start`}>
        { avatarIcon && <Avatar variant="icon" bgColor="bg-muted" value={ avatarIcon } /> }
        { leftIcon && <Icon icon={ leftIcon } /> }
        <div className="flex-1">
            <p className="text-base">{ label }</p>
            { subtitle && <p className="text-sm text-muted">{ subtitle }</p> }
        </div>
        { badge && <Badge tone={ badge.variant } label={ badge.label } /> }
        { rightIcon && <Icon icon={ rightIcon } /> }
    </div>

    return link ? <a href={ link } className="block">{ content }</a> : content
}
