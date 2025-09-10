import { createIcons, icons } from "lucide";
createIcons({ icons });

const kadouiElements = document.querySelectorAll("[data-kadoui=element]");

Array.from(kadouiElements).forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.add("kadoui-element-border");
    alert(`<${elem.localName} class="${elem.className}" />`);
    setTimeout(() => {
      elem.classList.remove("kadoui-element-border");
    }, 1000);
  });
});

window.addEventListener("load", () => {
  try {
    const themeHandler = (ev: MediaQueryListEvent | MediaQueryList) => {
      const theme = ev.matches ? "dark" : "light";
      document.querySelector("html")!.setAttribute("data-theme", theme);
    };

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    darkModeQuery.addEventListener("change", themeHandler);

    themeHandler(darkModeQuery);
  } catch (err) {
    console.log(err);
  }
});
