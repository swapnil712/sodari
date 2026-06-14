export default function Icon ( { icon, size, label } : {icon : string, size?: "sm" | "lg", label?: string} ) {
    // When `label` is provided the icon is meaningful and gets an accessible name.
    // Otherwise it is decorative and hidden from assistive tech.
    return <span
        className="material-symbols-outlined"
        role={ label ? "img" : undefined }
        aria-label={ label || undefined }
        aria-hidden={ label ? undefined : true }
    >{ icon }</span>
}
