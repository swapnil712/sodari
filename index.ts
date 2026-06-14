// Sodari — entry barrel
// Re-exports every public component and its named sub-exports,
// plus all shared types. This is the package's single entry point:
//   import { Button, Badge, type ButtonProps } from "sodari"

// ── Components (default exports) ──
export { default as Accordion } from "./components/Accordion";
export { default as Alert } from "./components/Alert";
export { default as Avatar } from "./components/Avatar";
export { default as Badge } from "./components/Badge";
export { default as Breadcrumb } from "./components/Breadcrumb";
export { default as Button } from "./components/Button";
export { default as Card } from "./components/Card";
export { default as Chip } from "./components/Chip";
export { default as Choice } from "./components/Choice";
export { default as Collection } from "./components/Collection";
export { default as Icon } from "./components/Icon";
export { default as Input } from "./components/Input";
export { default as Modal } from "./components/Modal";
export { default as PageHeader } from "./components/PageHeader";
export { default as Stepper } from "./components/Stepper";
export { default as Tab } from "./components/Tab";
export { default as Table } from "./components/Table";
export { default as Well } from "./components/Well";

// ── Named sub-exports ──
export { FabWrapper } from "./components/Button";
export { ChoiceGroup } from "./components/Choice";
export { SegmentTab, TabNav } from "./components/Tab";
export { Th, Td } from "./components/Table";

// ── Types ──
export type {
  IconProps,
  ButtonProps,
  ButtonVariants,
  BadgeProps,
  BadgeVariants,
  AvatarProps,
  AvatarVariants,
  InputProps,
  AlertProps,
  AlertVariants,
  CardProps,
  BreadcrumbProps,
  TabsProps,
  ChoiceProps,
  ChoiceGroupProps,
  CollectionProps,
  ChipProps,
  StepperType,
  TableProps,
  ThProps,
  TdProps,
  SortDirection,
} from "./types/component";