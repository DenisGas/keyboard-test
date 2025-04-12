import "./css/style.css";

import { Keyboard } from "./js/Keyboard";

document.querySelector("#app").innerHTML = `
  <div class="container">
      <div class="layout-switcher">
        <input type="radio" name="layout" id="layout-100" value="100%" checked />
        <label for="layout-100">100%</label>
        <input type="radio" name="layout" id="layout-75" value="75%" />
        <label for="layout-75">75%</label>
        <input type="radio" name="layout" id="layout-68" value="68%" />
        <label for="layout-68">68%</label>
      </div>
      <div id="root"></div>
    </div>
  </div>
`;

const keyboard = new Keyboard("root", "100%");
