import "./style.css";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import typescriptLogo from "./typescript.svg";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="h-screen w-screen f-center flex-col">
    <div class="f-align gap-12">
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="size-32" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="size-32" alt="TypeScript logo" />
      </a>
    </div>

    <h1 class="text-5xl font-black mt-12">Vite + TypeScript</h1>
    
    <button class="btn btn-fill mt-6" id="counter"></button>
  </div>
`;

setupCounter(app.querySelector<HTMLButtonElement>("#counter")!);
