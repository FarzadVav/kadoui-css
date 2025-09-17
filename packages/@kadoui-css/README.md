# Kadoui-css

The TailwindCSS styles for build robust UIs

---

### Add the following code to your main CSS file

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
  Media query:
    sm < mobile
    sm > tablet
    lg < tablet
    lg > desktop

  Spacing:
    lvl-1: 0.5
    lvl-2: 1.5
    lvl-3: 3
    lvl-4: 6
    lvl-5: 9
    lvl-6: 12
    lvl-7: 16
    lvl-8: 20

  Color shades:
    lvl-1: 100%
    lvl-2: 90%
    lvl-3: 80%
    lvl-4: 50%
    lvl-5: 20%
    lvl-6: 10%

  Z-index layers:
    lvl-1: 10
    lvl-2: 20
    lvl-3: 30
    lvl-4: 40
    lvl-5: 50

  Border radius:
    lvl-1: rounded
    lvl-2: rounded-md
    lvl-3: rounded-lg
    lvl-4: rounded-xl
    lvl-5: rounded-2xl

  Heading:
    text-xl sm:text-2xl lg:text-5xl font-black

  Title:
    text-base sm:text-lg lg:text-xl font-bold

  Paragraph:
    text-sm sm:text-base
```

---

### Kadoui toolchain

Consider that `Kadoui-css` should be mix by a logical UI package, You can use `Kadoui-react` or build your own.

[Read about `Kadoui-react`](https://www.npmjs.com/package/@kadoui/react)

---

Written with ❤️ by [Farzad Vahdati](https://github.com/FarzadVav)
