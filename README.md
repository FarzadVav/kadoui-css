# Add follow codes to your main CSS file

```css
@import "tailwindcss";
@import "@kadoui/css";

@theme {
  --color-*: initial;
  --color-background-thin: #ffffff;
  --color-background: #fafafa;
  --color-background-thick: #efefef;
  --color-foreground: #151515;
  --color-beautifulRed: #9e0000;
  /* You can add any colors */

  --color-palette: var(--color-foreground);
  --color-brush: var(--color-background);
}

[data-theme="dark"] {
  --color-background-thin: #202020;
  --color-background: #151515;
  --color-background-thick: #101010;
  --color-foreground: #fafafa;
}

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

/* If you add a color, please add its palette as well */
@utility palette-background-thin {
  --color-palette: var(--color-background-thin);
  --color-brush: var(--color-foreground);
}

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
```

---

We also recommend that you develop the ui of your projects with this system:

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
