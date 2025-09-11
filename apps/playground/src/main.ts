import { createIcons, icons } from "lucide";
createIcons({ icons });

const kadouiElements = document.querySelectorAll("[data-kadoui=element]");
Array.from(kadouiElements).forEach((elem) => {
  elem.addEventListener("click", () => {
    alert(`<${elem.localName} class="${elem.className}" />`);
  });
});

const toggleTextBtn = document.getElementById("toggle-text-btn");
const toggleTextP = document.getElementById("toggle-text-p");
function handleToggleText() {
  if (!toggleTextBtn) return;

  if (Array.from(toggleTextP?.classList || []).includes("ignore")) {
    toggleTextBtn.innerHTML = "Toggle text to ignore";
    toggleTextP?.classList.remove("ignore");
    toggleTextP?.classList.add("not-ignore");
  } else {
    toggleTextBtn.innerHTML = "Toggle text to not-ignore";
    toggleTextP?.classList.remove("not-ignore");
    toggleTextP?.classList.add("ignore");
  }
}
handleToggleText();
toggleTextBtn?.addEventListener("click", handleToggleText);

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
