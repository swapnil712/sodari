# React Component Library

A lightweight, accessibility-first React UI kit built with **Tailwind CSS v4** and **Material Symbols** icons. Eighteen composable components covering buttons, forms, navigation, feedback, data display, and layout — each ships with sensible ARIA semantics baked in.

> Replace the placeholder package name `your-package-name` throughout this document with your actual published name before publishing.

---

## Table of contents

- [Installation](#installation)
- [Setup](#setup)
  - [1. Tailwind CSS v4](#1-tailwind-css-v4)
  - [2. Design tokens](#2-design-tokens)
  - [3. Material Symbols font](#3-material-symbols-font)
- [Design system](#design-system)
  - [Color tokens](#color-tokens)
  - [Icons](#icons)
  - [Accessibility philosophy](#accessibility-philosophy)
- [Components](#components)
  - [Icon](#icon)
  - [Button & FabWrapper](#button--fabwrapper)
  - [Badge](#badge)
  - [Avatar](#avatar)
  - [Alert](#alert)
  - [Input](#input)
  - [Card](#card)
  - [Breadcrumb](#breadcrumb)
  - [Tab, SegmentTab & TabNav](#tab-segmenttab--tabnav)
  - [Choice & ChoiceGroup](#choice--choicegroup)
  - [Collection](#collection)
  - [Chip](#chip)
  - [Stepper](#stepper)
  - [Accordion](#accordion)
  - [Table, Th & Td](#table-th--td)
  - [Well](#well)
  - [Modal](#modal)
  - [PageHeader](#pageheader)
- [Type reference](#type-reference)
- [Updating this documentation](#updating-this-documentation)
- [License](#license)

---

## Installation

```bash
npm install your-package-name
# or
yarn add your-package-name
# or
pnpm add your-package-name
```

### Peer dependencies

This library expects **React 18+** to already be installed in your project:

```bash
npm install react react-dom
```

---

## Setup

These components are styled entirely with Tailwind utility classes that reference a small set of custom CSS variables (design tokens). Three things must be in place for them to render correctly: Tailwind v4, the token definitions, and the Material Symbols icon font.

### 1. Tailwind CSS v4

The library is built against Tailwind v4. If you don't already have it:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Import Tailwind once at the top of your global stylesheet:

```css
@import "tailwindcss";
```

### 2. Design tokens

The components reference semantic color tokens such as `bg-primary`, `text-muted`, and `border-stroke`. Add the following `@theme` block to your global CSS so those utilities resolve. The focus-visible rule provides a consistent keyboard outline across all interactive elements.

```css
@import "tailwindcss";

@theme {
    --color-base: var(--color-zinc-800);
    --color-muted: var(--color-zinc-600);
    --color-light: var(--color-zinc-200);
    --color-stroke: var(--color-zinc-300);
    --color-success: var(--color-green-800);
    --color-warning: var(--color-amber-400);
    --color-danger: var(--color-red-800);
    --color-primary: var(--color-blue-800);
    --color-secondary: var(--color-blue-900);
    --color-amber: var(--color-amber-600);
}

@layer base {
  a:focus-visible,
  button:focus-visible,
  input[type="text"]:focus-visible,
  input[type="email"]:focus-visible,
  input[type="password"]:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    @apply outline outline-2 outline-amber-500 outline-offset-2;
  }
}

/* Hides the connecting line under the final step in a vertical Stepper */
.stepper li:last-child .stepper-col {
  display: none !important;
}
```

To **rebrand** the kit, override any token — for example, point `--color-primary` at your brand hue and every primary button, badge, and active state updates automatically.

### 3. Material Symbols font

Icons render via the `material-symbols-outlined` font class. Add the Google Fonts stylesheet to your document `<head>` (or import it in your global CSS):

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
/>
```

Any value passed to an `icon` prop must be a valid [Material Symbols Outlined](https://fonts.google.com/icons) glyph name, e.g. `"home"`, `"search"`, `"check_box"`.

---

## Design system

### Color tokens

| Token | Default | Typical use |
|---|---|---|
| `--color-base` | zinc-800 | Primary text |
| `--color-muted` | zinc-600 | Secondary text, helper copy |
| `--color-light` | zinc-200 | Neutral fills (chips, neutral badges) |
| `--color-stroke` | zinc-300 | Borders and dividers |
| `--color-primary` | blue-800 | Primary actions, active states |
| `--color-secondary` | blue-900 | Tab bars, floating buttons |
| `--color-success` | green-800 | Success states |
| `--color-warning` | amber-400 | Warning states |
| `--color-danger` | red-800 | Errors, destructive states |

### Icons

Every icon-bearing prop takes a **Material Symbols glyph name** as a string. Icons are decorative by default (hidden from screen readers) and only exposed to assistive tech when a `label` is supplied or when the parent component derives an accessible name from context.

### Accessibility philosophy

Accessibility is built in rather than bolted on. A few patterns recur throughout:

- **Icon-only controls** (buttons, input actions, dismiss buttons) always receive an accessible name, either from an explicit `ariaLabel`/`label` prop or a sensible fallback.
- **Color is never the sole signal.** Badges append their tone to the accessible name; alerts pair color with an icon.
- **Live regions** — `Alert` uses `role="alert"`/`aria-live="assertive"` for urgent tones and `role="status"`/`polite` otherwise.
- **Focus management** — `Modal` traps focus, restores focus on close, and closes on `Escape`.
- **Semantic landmarks** — navigation components render real `<nav>`/`<ol>` structures with `aria-current`.

---

## Components

> All components are **default exports** unless noted as a named export. Import paths below assume the published package root; adjust if you re-export from a different entry point.

### Icon

Renders a single Material Symbols glyph. Decorative by default; pass `label` to expose it as a named image to assistive tech.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `icon` | `string` | ✅ | Material Symbols glyph name |
| `size` | `"sm" \| "lg"` | — | Visual size |
| `label` | `string` | — | When set, the icon becomes `role="img"` with this name. When omitted, it is `aria-hidden`. |

```tsx
import Icon from "your-package-name/Icon";

// Decorative
<Icon icon="favorite" />

// Meaningful (announced as "Verified account")
<Icon icon="verified" label="Verified account" />
```

---

### Button & FabWrapper

A flexible button supporting five variants, two sizes, optional leading/trailing icons, and a circular floating (FAB) style. `FabWrapper` is a fixed bottom-right container for floating buttons.

**`Button` props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `variant` | `"primary" \| "secondary" \| "ghost" \| "floating" \| "danger"` | ✅ | Visual style |
| `size` | `"lg" \| "sm"` | ✅ | Size |
| `label` | `string` | — | Text label |
| `icon` | `string` | — | Leading icon |
| `rightIcon` | `string` | — | Trailing icon |
| `ariaLabel` | `string` | — | Accessible name. **Required in practice for icon-only buttons.** |
| `disabled` | `boolean` | — | Disables the button |
| `onClick` | `() => void` | — | Click handler |

> For icon-only buttons (no `label`), supply `ariaLabel`. If omitted, the component falls back to the icon name as the accessible name.

```tsx
import Button, { FabWrapper } from "your-package-name/Button";

<Button variant="primary" size="lg" label="Save changes" onClick={save} />

<Button variant="danger" size="sm" icon="delete" label="Delete" onClick={remove} />

// Icon-only — provide ariaLabel
<Button variant="ghost" size="sm" icon="close" ariaLabel="Close" onClick={close} />

// Floating action button, pinned bottom-right
<FabWrapper>
  <Button variant="floating" size="lg" icon="add" ariaLabel="New item" onClick={create} />
</FabWrapper>
```

---

### Badge

A small status pill. The tone is appended to the accessible name so color isn't the only signal.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `tone` | `"neutral" \| "primary" \| "success" \| "warning" \| "error"` | ✅ | Color/semantic tone |
| `label` | `string` | ✅ | Badge text |

```tsx
import Badge from "your-package-name/Badge";

<Badge tone="success" label="Active" />     {/* announced: "Active (success)" */}
<Badge tone="error" label="Failed" />
```

---

### Avatar

Displays a user/entity avatar as initials, an icon, or an image.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `variant` | `"initials" \| "icon" \| "image"` | ✅ | Render mode |
| `value` | `string` | — | Initials text, or icon glyph name (for `icon` variant) |
| `src` | `string` | — | Image URL (for `image` variant) |
| `alt` | `string` | — | Alt text for the image. Empty string marks it decorative. |
| `bgColor` | `string` | — | Tailwind background class, e.g. `"bg-primary"`. Defaults to `bg-primary`. |

```tsx
import Avatar from "your-package-name/Avatar";

<Avatar variant="initials" value="JS" bgColor="bg-primary" />
<Avatar variant="icon" value="person" />
<Avatar variant="image" src="/me.jpg" alt="Jane Smith" />
```

---

### Alert

An inline feedback banner with an icon, optional dismiss button, and an appropriate live-region role.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `tone` | `"info" \| "success" \| "warning" \| "danger"` | ✅ | Severity / color |
| `label` | `string` | ✅ | Message text |
| `onDismiss` | `() => void` | — | When provided, shows a dismiss button |

> `danger` and `warning` are announced assertively (`role="alert"`); `info` and `success` use a polite `role="status"`.

```tsx
import Alert from "your-package-name/Alert";

<Alert tone="success" label="Your changes were saved." />
<Alert tone="danger" label="Something went wrong." onDismiss={() => setShown(false)} />
```

---

### Input

A labeled text field with a leading icon, a right-side action button, helper text, and error state. Helper and error text are wired to the input via `aria-describedby`, and errors set `aria-invalid`.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | ✅ | Unique id; ties label, helper, and error together |
| `type` | `"text" \| "email" \| "tel" \| "number" \| "url" \| "password"` | ✅ | Input type |
| `label` | `string` | — | Field label |
| `placeholder` | `string` | — | Placeholder text |
| `leadingIcon` | `string` | — | Icon shown before the field |
| `rightAction` | `{ icon: string; label?: string; onClick?: () => void }` | — | Trailing icon button |
| `helperText` | `string` | — | Helper copy below the field |
| `error` | `string` | — | Error message; sets the field to the error state |
| `value` | `string` | — | Controlled value |
| `onChange` | `(e: ChangeEvent<HTMLInputElement>) => void` | — | Change handler |

```tsx
import Input from "your-package-name/Input";

<Input
  id="email"
  type="email"
  label="Email address"
  leadingIcon="mail"
  placeholder="you@example.com"
  helperText="We'll never share it."
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Password field with a reveal toggle
<Input
  id="password"
  type="password"
  label="Password"
  rightAction={{ icon: "visibility", label: "Show password", onClick: toggle }}
  error={error}
/>
```

---

### Card

A content card with optional media, title, description, and up to two footer actions. The card region is labeled by its title for assistive tech.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | — | Heading |
| `description` | `string` | — | Body copy |
| `maxWidth` | `number` | — | Max width in pixels |
| `media` | `{ src: string; alt?: string }` | — | Top image |
| `primaryAction` | `{ label: string; onClick: () => void }` | — | Primary footer button |
| `secondaryAction` | `{ label: string; onClick: () => void }` | — | Secondary footer button |

```tsx
import Card from "your-package-name/Card";

<Card
  title="Welcome aboard"
  description="Finish setting up your workspace."
  maxWidth={360}
  media={{ src: "/banner.jpg", alt: "Team working together" }}
  primaryAction={{ label: "Get started", onClick: start }}
  secondaryAction={{ label: "Later", onClick: dismiss }}
/>
```

---

### Breadcrumb

A breadcrumb trail rendered as a semantic `<nav><ol>`. A home link is always prepended, and the last item is marked `aria-current="page"`.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `items` | `{ label: string; link?: string }[]` | ✅ | Trail items, in order |
| `active` | `string` | — | Reserved for active-item styling |

```tsx
import Breadcrumb from "your-package-name/Breadcrumb";

<Breadcrumb
  items={[
    { label: "Projects", link: "/projects" },
    { label: "Apollo", link: "/projects/apollo" },
    { label: "Settings" },
  ]}
/>
```

---

### Tab, SegmentTab & TabNav

Three navigation primitives. `Tab` is a full-width tab bar, `SegmentTab` is a compact segmented control, and `TabNav` is a header wrapper for composing a tab bar with other controls. Tabs link to in-page anchors (`#id`) and mark the active one with `aria-current="page"`.

**`Tab` / `SegmentTab` props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `tabs` | `{ id: string; label?: string; icon?: string }[]` | ✅ | Tab items |
| `active` | `string` | — | `id` of the active tab |
| `ariaLabel` | `string` | — | Accessible name for the nav (`Tab` only) |

```tsx
import Tab, { SegmentTab, TabNav } from "your-package-name/Tab";

<Tab
  ariaLabel="Sections"
  active="overview"
  tabs={[
    { id: "overview", label: "Overview", icon: "dashboard" },
    { id: "activity", label: "Activity", icon: "history" },
  ]}
/>

<SegmentTab
  active="list"
  tabs={[
    { id: "list", label: "List", icon: "list" },
    { id: "grid", label: "Grid", icon: "grid_view" },
  ]}
/>

<TabNav>
  <Tab ariaLabel="Main" active="home" tabs={[{ id: "home", label: "Home" }]} />
</TabNav>
```

---

### Choice & ChoiceGroup

A unified control for checkboxes, radio buttons, and switches, with an optional subtitle. The native input drives state and accessibility; the visual indicator is decorative. `ChoiceGroup` wraps related choices in a `<fieldset>` (with `role="radiogroup"` when `type="radio"`).

**`Choice` props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `type` | `"checkbox" \| "radio" \| "switch"` | ✅ | Control kind |
| `label` | `string` | ✅ | Main label |
| `id` | `string` | ✅ | Unique id |
| `subtitle` | `string` | — | Secondary description |
| `isChecked` | `boolean` | — | Controlled checked state |
| `onChange` | `(checked?: boolean) => void` | — | Fires with the new checked value |

**`ChoiceGroup` props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | — | Group legend |
| `type` | `"checkbox" \| "radio" \| "switch"` | — | When `"radio"`, applies `role="radiogroup"` |
| `children` | `ReactNode` | ✅ | The `Choice` items |

```tsx
import Choice, { ChoiceGroup } from "your-package-name/Choice";

<ChoiceGroup label="Notifications" type="checkbox">
  <Choice
    id="email-opt"
    type="checkbox"
    label="Email"
    subtitle="Product updates and tips"
    isChecked={email}
    onChange={setEmail}
  />
  <Choice id="sms-opt" type="switch" label="SMS alerts" isChecked={sms} onChange={setSms} />
</ChoiceGroup>
```

---

### Collection

A list-row component combining an optional avatar/icon, a label and subtitle, an optional badge, and a trailing icon. Renders as a link when `link` is provided.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Primary text |
| `subtitle` | `string` | — | Secondary text |
| `link` | `string` | — | Wraps the row in an anchor |
| `avatarIcon` | `string` | — | Renders a leading icon avatar |
| `leftIcon` | `string` | — | Leading icon (instead of avatar) |
| `badge` | `{ variant: BadgeVariants; label: string }` | — | Trailing badge |
| `rightIcon` | `string` | — | Trailing icon |

```tsx
import Collection from "your-package-name/Collection";

<Collection
  link="/users/42"
  avatarIcon="person"
  label="Jane Smith"
  subtitle="Administrator"
  badge={{ variant: "success", label: "Online" }}
  rightIcon="chevron_right"
/>
```

---

### Chip

A compact, dismissible tag with an optional leading icon. The dismiss button is labeled `Remove {label}`.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Chip text |
| `icon` | `string` | — | Leading icon |
| `dismissAction` | `() => void` | — | When set, shows a remove button |

```tsx
import Chip from "your-package-name/Chip";

<Chip label="React" icon="code" dismissAction={() => remove("react")} />
```

---

### Stepper

A horizontal or vertical progress indicator. Each step is a button (so steps can be clickable), and the active step is marked `aria-current="step"`.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `steps` | `{ id: string; label: string; subtitle?: string; icon?: string }[]` | ✅ | Step list |
| `active` | `string` | — | `id` of the current step |
| `direction` | `"row" \| "col"` | — | Layout orientation (default horizontal) |
| `onClick` | `(id: string) => void` | — | Fires with the clicked step's id |

```tsx
import Stepper from "your-package-name/Stepper";

<Stepper
  active="contact"
  direction="row"
  onClick={(id) => goTo(id)}
  steps={[
    { id: "welcome", label: "Welcome", icon: "star" },
    { id: "personal", label: "Personal", icon: "person" },
    { id: "contact", label: "Contact", icon: "email" },
  ]}
/>
```

> The vertical (`col`) variant draws a connector line between steps; the line under the final step is hidden by the `.stepper-col` CSS rule included in setup.

---

### Accordion

A single-expand accordion. It reuses the **Stepper** data shape (`steps`) — each item's `subtitle` is the collapsible body. Manages its own open state internally, seeded by `active`.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `steps` | `{ id: string; label: string; subtitle?: string; icon?: string }[]` | ✅ | Panels; `subtitle` is the body content |
| `active` | `string` | — | Initially expanded panel id |

```tsx
import Accordion from "your-package-name/Accordion";

<Accordion
  active="shipping"
  steps={[
    { id: "shipping", label: "Shipping", subtitle: "Free over $50.", icon: "local_shipping" },
    { id: "returns", label: "Returns", subtitle: "30-day window.", icon: "undo" },
  ]}
/>
```

---

### Table, Th & Td

A semantic table system. `Table` wraps a native `<table>` inside a `Well` and supports a visually-hidden `caption`. `Th` is a sortable header cell (renders `aria-sort` and a sort button when `handleSort` is given). `Td` is a rich data cell supporting a status dot, icon, label, badge, and action buttons.

**`Table` props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `children` | `ReactNode` | ✅ | `<thead>` / `<tbody>` content |
| `caption` | `string` | — | Screen-reader-only table caption |

**`Th` props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | ✅ | Header text |
| `handleSort` | `() => void` | — | Makes the column sortable |
| `sortDirection` | `"ascending" \| "descending" \| "none"` | — | Current sort state |

**`Td` props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `label` | `string` | — | Cell text |
| `dot` | `"info" \| "success" \| "warning" \| "danger"` | — | Status dot color |
| `icon` | `string` | — | Leading icon |
| `badge` | `{ tone: BadgeVariants; label: string }` | — | Inline badge |
| `buttons` | `ButtonProps[]` | — | Row action buttons |

```tsx
import Table, { Th, Td } from "your-package-name/Table";

<Table caption="Team members and their status">
  <thead>
    <tr>
      <Th label="Name" handleSort={sortByName} sortDirection="ascending" />
      <Th label="Status" />
      <Th label="Actions" />
    </tr>
  </thead>
  <tbody>
    <tr>
      <Td icon="person" label="Jane Smith" />
      <Td dot="success" label="Active" />
      <Td buttons={[{ variant: "ghost", size: "sm", label: "Edit" }]} />
    </tr>
  </tbody>
</Table>
```

---

### Well

A neutral surface/container — a white, rounded, shadowed box. Use it to group content. Supports row/column direction and a collapsed (zero-padding) mode used internally by `Table` and `Modal`.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `children` | `ReactNode` | ✅ | Content |
| `direction` | `"row" \| "column"` | — | Flex direction (default column) |
| `isCollapsed` | `boolean` | — | Removes internal padding/gap |

```tsx
import Well from "your-package-name/Well";

<Well direction="column">
  <h2>Summary</h2>
  <p>Everything looks good.</p>
</Well>
```

---

### Modal

An accessible dialog rendered over a dimmed backdrop. It traps focus, restores focus to the previously focused element on close, closes on `Escape` or backdrop click, and labels itself with the title (`role="dialog"`, `aria-modal="true"`). Footer buttons are rendered from a `ButtonProps[]` array (reverse order, primary on the right).

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `children` | `ReactNode` | ✅ | Body content |
| `onClose` | `() => void` | ✅ | Called on Escape, backdrop click, or the close button |
| `buttons` | `ButtonProps[]` | ✅ | Footer action buttons |
| `title` | `string` | — | Dialog heading |
| `size` | `"sm" \| "md" \| "lg"` | — | Width (40% / 60% / 80%). Default `md`. |

```tsx
import Modal from "your-package-name/Modal";

{isOpen && (
  <Modal
    title="Delete project?"
    size="sm"
    onClose={() => setOpen(false)}
    buttons={[
      { variant: "danger", size: "sm", label: "Delete", onClick: confirmDelete },
      { variant: "secondary", size: "sm", label: "Cancel", onClick: () => setOpen(false) },
    ]}
  >
    <p>This action cannot be undone.</p>
  </Modal>
)}
```

---

### PageHeader

A page title (`<h1>`) with a right-aligned group of action buttons.

**Props**

| Prop | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | ✅ | Page heading |
| `buttons` | `ButtonProps[]` | ✅ | Action buttons (grouped with an accessible label) |

```tsx
import PageHeader from "your-package-name/PageHeader";

<PageHeader
  title="Campaigns"
  buttons={[
    { variant: "primary", size: "sm", label: "New campaign", icon: "add", onClick: create },
    { variant: "secondary", size: "sm", label: "Export", icon: "download", onClick: exportData },
  ]}
/>
```

---

## Type reference

All shared interfaces and union types live in a single module and can be imported for typing your own code:

```ts
import type {
  ButtonProps, ButtonVariants,
  BadgeProps, BadgeVariants,
  AvatarProps, AvatarVariants,
  InputProps,
  AlertProps, AlertVariants,
  CardProps,
  BreadcrumbProps,
  TabsProps,
  ChoiceProps, ChoiceGroupProps,
  CollectionProps,
  ChipProps,
  StepperType,
  TableProps, ThProps, TdProps, SortDirection,
  IconProps,
} from "your-package-name/types";
```

Key shared unions:

| Union | Values |
|---|---|
| `ButtonVariants` | `primary` · `secondary` · `ghost` · `floating` · `danger` |
| `BadgeVariants` | `neutral` · `primary` · `success` · `warning` · `error` |
| `AvatarVariants` | `initials` · `icon` · `image` |
| `AlertVariants` | `info` · `success` · `warning` · `danger` |
| `SortDirection` | `ascending` · `descending` · `none` |

> Note: `Badge` uses `error` for its red tone, while `Alert` and `Td` dots use `danger`. Keep this in mind when wiring the two together.

---

## Updating this documentation

This file is plain Markdown so it renders directly on GitHub, npm, and most documentation hosts, and is easy to keep current.

**When you change a component's props**, update its props table and example here in the same commit. A reliable workflow:

1. Edit the component and its interface in your types module.
2. Update the matching section in this README (props table + example).
3. Bump the version in `package.json` (`npm version patch|minor|major`).
4. `npm publish`. npm displays this README as the package's landing page automatically.

**To rebrand without touching component code**, override the design tokens in your consuming app's CSS (see [Design tokens](#2-design-tokens)).

**To add a new component**, copy an existing component section as a template, add it to the [Table of contents](#table-of-contents), and add any new shared types to the [Type reference](#type-reference).

Consider adding a `CHANGELOG.md` alongside this file to track changes per version, and link it from here.

---

## License

Add your chosen license here (e.g. MIT) and include a `LICENSE` file in the repository root.