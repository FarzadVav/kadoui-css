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
