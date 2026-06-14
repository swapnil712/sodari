import type { ChangeEvent, ReactNode } from "react";

// ── Shared ──
type MaterialIcon = string; // Material Icons Outlined glyph name

// ── Icon ──
export interface IconProps {
  icon: MaterialIcon;
  size?: "sm" | "lg";
  /** When provided, the icon is exposed as role="img" with this name.
   *  When omitted, the icon is treated as decorative (aria-hidden). */
  label?: string;
}

// ── Button ──
export type ButtonVariants = "primary" | "secondary" | "ghost" | "floating" | "danger"
export interface ButtonProps {
  variant: ButtonVariants;
  size: "lg" | "sm";
  icon?: MaterialIcon;
  /** Accessible name. Required in practice for icon-only buttons (no label). */
  ariaLabel?: string;
  rightIcon?: MaterialIcon;
  disabled?: boolean;
  onClick?: () => void;
  label?: string;
}

// ── Badge ──
export type BadgeVariants = "neutral" | "primary" | "success" | "warning" | "error"
export interface BadgeProps {
  tone: BadgeVariants;
  label: string;
}

// ── Avatar ──
export type AvatarVariants = "initials" | "icon" | "image"
export interface AvatarProps {
  variant: AvatarVariants;
  value?: string;
  src?: string;
  alt?: string;
  bgColor?: string;
}

// ── Input ──
export interface InputProps {
  id: string;
  label?: string;
  type: "text" | "email" | "tel" | "number" | "url" | "password";
  placeholder?: string;
  rightAction?: {
    icon: MaterialIcon,
    /** Accessible name for the icon-only action button. */
    label?: string,
    onClick?: () => void
  };
  hasCaret?: boolean;
  leadingIcon?: MaterialIcon;
  helperText?: string;
  error?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

// ── Alert ──
export type AlertVariants = "info" | "success" | "warning" | "danger"
export interface AlertProps {
  tone: AlertVariants;
  label: string;
  onDismiss?: () => void;
}

// ── Card ──
export interface CardProps {
  title?: string;
  description?: string;
  maxWidth?: number;
  media?: {
    src: string,
    alt?: string
  };
  primaryAction?: {
    label: string,
    onClick: () => void
  };
  secondaryAction?: {
    label: string,
    onClick: () => void
  };
}

// ── Breadcrumb ──
export interface BreadcrumbProps {
  items: {
    label: string,
    link?: string
  }[];
  active?: string;
}

// ── Tabs ──
export interface TabsProps {
  tabs: {
    label?: string,
    id: string,
    icon?: MaterialIcon
  }[];
  ariaLabel?: string;
  active?: string;
}

// ── Choice ──
export interface ChoiceProps {
  type: "checkbox" | "radio" | "switch";
  label: string;
  subtitle?: string;
  isChecked?: boolean;
  id: string;
  onChange?: (checked?: boolean) => void;
}

export interface ChoiceGroupProps {
  label?: string;
  /** Renders the fieldset as role="radiogroup" when "radio". */
  type?: "checkbox" | "radio" | "switch";
  children: ReactNode;
}

// ── Collection ──
export interface CollectionProps {
  link?: string;
  avatarIcon?: MaterialIcon;
  leftIcon?: MaterialIcon;
  label: string;
  subtitle?: string;
  badge?: {
    variant: BadgeVariants,
    label: string
  };
  rightIcon?: MaterialIcon;
}

// ── Chip ──
export interface ChipProps {
  label: string;
  icon?: MaterialIcon;
  dismissAction?: () => void;
}

// ── Stepper ──
export interface StepperType {
  steps: {
    id: string,
    label: string,
    subtitle?: string,
    icon?: MaterialIcon
  }[];
  active?: string;
  direction?: "row" | "col",
  onClick?: (id: string) => void;
}

// ── Table ──
export type SortDirection = "ascending" | "descending" | "none";

export interface TableProps {
  children: ReactNode;
  /** Visually-hidden caption naming the table for assistive tech. */
  caption?: string;
}

export interface ThProps {
  label: string;
  handleSort?: () => void;
  sortDirection?: SortDirection;
}

export interface TdProps {
  label?: string;
  dot?: AlertVariants;
  icon?: MaterialIcon;
  badge?: { tone: BadgeVariants, label: string };
  buttons?: ButtonProps[];
}