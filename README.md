# Add the following code to your main CSS file

```css
@import "tailwindcss";
@import "@kadoui/css";

@theme {
  --font-*: initial;
  --font-beautifulFont: var(--font-beautifulFont);

  --color-*: initial;
  --color-background: #fafafa;
  --color-background-thick: #efefef;
  --color-foreground: #151515;
  --color-beautifulRed: #9e0000;
  /* You can add any colors */

  --color-palette: var(--color-foreground);
  --color-brush: var(--color-background);
}

[data-theme="dark"] {
  --color-background: #151515;
  --color-background-thick: #101010;
  --color-foreground: #fafafa;
}

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

/* If you add a color, please add its palette as well */
@utility palette-background {
  --color-palette: var(--color-background);
  --color-brush: var(--color-foreground);
}

@utility palette-background-thick {
  --color-palette: var(--color-background-thick);
  --color-brush: var(--color-foreground);
}

@utility palette-foreground {
  --color-palette: var(--color-foreground);
  --color-brush: var(--color-background);
}

@utility palette-beautifulRed {
  --color-palette: var(--color-beautifulRed);
  --color-brush: var(--color-background);
}

@layer base {
  html {
    @apply font-beautifulFont;
  }
}
```

---

### We recommend that you develop the UI of your app with this system

```
  Spacing (`Recommendation`):
    lvl-1: 0.5
    lvl-2: 1.5
    lvl-3: 3
    lvl-4: 6
    lvl-5: 9

  Color shades (`Recommendation`):
    lvl-1: 100%
    lvl-2: 90%
    lvl-3: 50%
    lvl-4: 20%
    lvl-5: 10%

  Z-index layers (`Recommendation, No more is needed`):
    lvl-1: 10
    lvl-2: 20
    lvl-3: 30
    lvl-4: 40
    lvl-5: 50

  Border radius (`You can customize the TailwindCSS theme config`):
    lvl-1: rounded
    lvl-2: rounded-md
    lvl-3: rounded-lg
    lvl-4: rounded-xl
    lvl-5: rounded-2xl

  Heading (`You can customize the TailwindCSS theme config`):
    lvl-1: text-base
    lvl-2: text-lg
    lvl-3: text-xl
    lvl-4: text-2xl
    lvl-5: text-3xl

  Paragraph (`You can customize the TailwindCSS theme config`):
    lvl-1: text-xs
    lvl-2: text-sm
    lvl-3: text-base
    lvl-4: text-lg
    lvl-5: text-xl
```

---

### Also, please add the `heading` and `title` classes of your app

```css
/* These are examples */

@utility heading {
  @apply text-2xl lg:text-5xl font-black;
}

@utility title {
  @apply text-lg lg:text-xl font-bold;
}
```

---

# Base

```css
@layer base {
  html {
    @apply scroll-smooth bg-background text-foreground;
  }

  * {
    @apply select-none;

    scrollbar-width: thin;
    scrollbar-color: hsl(var(--color-foreground)) transparent;

    &:focus {
      @apply outline-none;
    }
  }

  a,
  span,
  label {
    @apply inline-block;
  }

  button {
    @apply cursor-pointer;
  }

  textarea {
    @apply resize-none;
  }
}
```

---

# Layout

```html
<div class="container"></div>

<div class="no-scrollbar"></div>

<div class="f-align"></div>

<div class="f-align-scroll"></div>

<div class="f-center"></div>

<div class="f-slidable"></div>

<div class="w-fix"></div>
```

---

# Button

```html
<button class="btn btn-sm">Small</button>
<button class="btn">Normal and unstyled</button>
<button class="btn btn-lg">Large</button>
<button class="btn-square">Square</button>
<button class="btn-full">Full width</button>

<button class="btn btn-fill">Fill variant</button>
<button class="btn btn-outline">Outline variant</button>
<button class="btn btn-soft">Soft variant</button>
<button class="btn btn-ghost">Ghost variant</button>
<button class="btn btn-ghost btn-link">With link style</button>

<button class="btn btn-fill pallete-beautifulRed">Beautiful red variant</button>

<button class="btn btn-fill">
  <span>With icon</span>
  <i class="btn-icon-size"></i>
</button>
```

---

# Input

```html

```

---

# Badge

```css

```

---

# Card

```css

```

---

# Alert

```css

```

---

# Menu

```css

```

---

# Join

```css

```

---

# Avatar

```css

```

---

# Kbd

```css

```

---

# Position

```css

```

---

# Separator

```css

```

---

# Other

```css

```

---

# Kadoui primitive components

Don't forget use primitive components for more features:

- react
- next
