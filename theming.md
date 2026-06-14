## Theming — build your own look

Every Sodari component is styled through a small set of **semantic design tokens** rather than hard-coded colors. A button doesn't say "blue" — it says `bg-primary`. That means you can completely rebrand the library by redefining the tokens once, in your own CSS, without touching a single component file.

### How theming works

The components rely on Tailwind v4 utility classes that map to CSS variables (e.g. `bg-primary` → `--color-primary`). You define those variables in a `@theme` block in your global stylesheet. Override a variable and every component that uses it updates instantly.

### The tokens you can set

| Token | Drives | Used by |
|---|---|---|
| `--color-primary` | Primary actions, active states, focus accents | Buttons, badges, active tabs/steps, input focus |
| `--color-secondary` | Tab bars, floating action buttons | Tab, FAB buttons |
| `--color-base` | Default body text | Most text |
| `--color-muted` | Secondary text, helper copy, placeholders | Helper text, subtitles, icons |
| `--color-light` | Neutral fills | Neutral badges, chips |
| `--color-stroke` | Borders and dividers | Cards, tables, inputs, steppers |
| `--color-success` | Success states | Success badges/alerts, switches |
| `--color-warning` | Warning states | Warning badges/alerts |
| `--color-danger` | Errors, destructive states | Danger buttons/alerts, error inputs |

### Step 1 — Start from the default theme

This is the baseline. Drop it into your global CSS (the same file where you `@import "tailwindcss"`):

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
```

### Step 2 — Override what you want

You only need to redefine the tokens you want to change — the rest fall back to the defaults above. To rebrand around a violet primary, for example:

```css
@theme {
    /* your brand */
    --color-primary: var(--color-violet-600);
    --color-secondary: var(--color-violet-800);
}
```

Every primary button, active tab, active step, badge, and input focus ring now turns violet. Nothing else changes.

### Using your own raw colors

You aren't limited to Tailwind's built-in palette. Any valid CSS color works — hex, `rgb()`, `hsl()`, or `oklch()`:

```css
@theme {
    --color-primary: #6d28d9;
    --color-secondary: #4c1d95;
    --color-success: oklch(0.62 0.17 145);
    --color-danger: #b91c1c;
}
```

### A full custom theme example

A warm, earthy palette:

```css
@theme {
    --color-base:      #2b2420;   /* espresso text          */
    --color-muted:     #7c6f64;   /* taupe secondary text   */
    --color-light:     #ede0d4;   /* sand neutral fill      */
    --color-stroke:    #d9c5b2;   /* soft border            */
    --color-primary:   #b5651d;   /* terracotta             */
    --color-secondary: #7f4f24;   /* deep clay              */
    --color-success:   #4f7942;   /* sage                   */
    --color-warning:   #e0a458;   /* amber                  */
    --color-danger:    #a23e2c;   /* rust red               */
}
```

### Dark mode

Because tokens are just CSS variables, dark mode is a matter of redefining them under a selector or media query. Tailwind v4's `@theme` sets the defaults; you override them in a regular CSS rule for dark contexts:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-base:   #f4f4f5;   /* light text on dark      */
    --color-muted:  #a1a1aa;
    --color-light:  #27272a;
    --color-stroke: #3f3f46;
    /* primary/success/etc. can stay or be tuned brighter */
  }
}
```

You can do the same with a `.dark` class instead of the media query if you control the toggle yourself.

### Accessibility note

When you pick new colors, keep contrast in mind. Several tokens render **white text on a colored fill** (primary, secondary, success, danger), while `warning` and `light` render **dark text**. If you change those backgrounds to very light or very dark shades, verify text remains readable — aim for a WCAG contrast ratio of at least 4.5:1 for body text. The focus-visible outline uses amber by default for a reason: it stays visible across most backgrounds.

### Quick checklist

1. Copy the default `@theme` block into your global CSS.
2. Override only the tokens you want to change.
3. Make sure the Material Symbols font is loaded (see Setup) — theming colors won't help if icons don't render.
4. Check text contrast on any fill colors you darkened or lightened.