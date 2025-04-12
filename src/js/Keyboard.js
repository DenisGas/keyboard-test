// Queyboard.js

import { getLayouts } from "./layouts.js";

export class Keyboard {
  constructor(rootId, initialLayout = "100%") {
    this.root = document.getElementById(rootId);
    this.pressedKeysDisplay = this.createPressedKeysDisplay();
    this.layoutName = initialLayout;
    this.keyElements = {};
    this.keyState = {};
    this.unitSize = 50;
    this.layouts = getLayouts();
    this.keyPressHistory = [];
    this.maxHistoryLength = 10;
    this.createKeyboard();
    this.addEventListeners();
    this.addLayoutSwitchListeners();
    // console.log(Layouts);
  }

  createPressedKeysDisplay() {
    const display = document.createElement("div");
    display.classList.add("pressed-keys-display");
    this.root.appendChild(display);
    return display;
  }

  createKeyboard() {
    this.root.innerHTML = "";
    this.root.appendChild(this.pressedKeysDisplay);
    this.keyElements = {};
    this.keyState = {};

    const layout = this.layouts[this.layoutName];

    const keyboardContainer = document.createElement("div");
    keyboardContainer.classList.add("keyboard-container");

    // Functional keys

    if (layout.functionKeys) {
      const functionKeysDiv = document.createElement("div");
      functionKeysDiv.classList.add("function-keys");
      layout.functionKeys.forEach((row) => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        row.forEach((keyConfig) => {
          this.createKey(rowDiv, keyConfig);
        });
        functionKeysDiv.appendChild(rowDiv);
      });
      keyboardContainer.appendChild(functionKeysDiv);
    }

    // Basic container with Grid

    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    // The main block

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main-block");
    layout.main.forEach((row) => {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      row.forEach((keyConfig) => {
        this.createKey(rowDiv, keyConfig);
      });
      mainDiv.appendChild(rowDiv);
    });
    gridContainer.appendChild(mainDiv);

    // Navigation block

    if (layout.nav) {
      const navDiv = document.createElement("div");
      navDiv.classList.add("nav-block");
      layout.nav.forEach((row) => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        row.forEach((keyConfig) => {
          this.createKey(rowDiv, keyConfig);
        });
        navDiv.appendChild(rowDiv);
      });
      gridContainer.appendChild(navDiv);
    }

    // Nampad

    if (layout.numpad) {
      const numpadContainer = document.createElement("div");
      numpadContainer.classList.add("numpad-container");

      // Nampad (rebuild using Grid)

      const numpadDiv = document.createElement("div");
      numpadDiv.classList.add("numpad-block");
      numpadDiv.style.display = "grid";
      numpadDiv.style.gridTemplateColumns = "repeat(4, 1fr)"; // 4 столбца

      numpadDiv.style.gridTemplateRows = "repeat(5, 1fr)"; // 5 строк

      numpadDiv.style.gap = "4px";

      // We position the keys manually

      const numpadKeys = layout.numpad.flat();
      let keyIndex = 0;

      // Num, /, *, -

      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 1, 1, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 2, 1, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 3, 1, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 4, 1, 1, 1);

      // 7, 8, 9, +

      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 1, 2, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 2, 2, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 3, 2, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 4, 2, 1, 2); // + occupies 2 lines

      // 4, 5, 6

      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 1, 3, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 2, 3, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 3, 3, 1, 1);
      keyIndex++; // Пропускаем пустую клавишу

      // 1, 2, 3, введите

      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 1, 4, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 2, 4, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 3, 4, 1, 1);
      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 4, 4, 1, 2); // Enter occupies 2 lines

      // 0, .

      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 1, 5, 2, 1); // 0 занимает 2 столбца

      this.createNumpadKey(numpadDiv, numpadKeys[keyIndex++], 3, 5, 1, 1);
      keyIndex++; // Пропускаем пустую клавишу

      numpadContainer.appendChild(numpadDiv);
      gridContainer.appendChild(numpadContainer);
    }

    keyboardContainer.appendChild(gridContainer);
    this.root.appendChild(keyboardContainer);
  }

  createKey(parent, { text, code, size = 1, height = 1 }) {
    const keyDiv = document.createElement("div");
    keyDiv.style.width = `${this.unitSize * size}px`;
    keyDiv.style.height = `${this.unitSize * height}px`;
    keyDiv.style.minWidth = `${this.unitSize * size}px`;
    keyDiv.style.minHeight = `${this.unitSize * height}px`;

    if (text) {
      keyDiv.classList.add("key");
      keyDiv.textContent = text;
      keyDiv.setAttribute("data-key", code);
      this.keyElements[code.toLowerCase()] = keyDiv;
      this.keyState[code.toLowerCase()] = false;
    } else {
      keyDiv.style.visibility = "hidden"; // Make invisible, but retain the place
    }

    parent.appendChild(keyDiv);
  }

  createNumpadKey(
    parent,
    { text, code, size = 1, height = 1 },
    colStart,
    rowStart,
    colSpan,
    rowSpan
  ) {
    const keyDiv = document.createElement("div");
    keyDiv.style.gridColumn = `${colStart} / span ${colSpan}`;
    keyDiv.style.gridRow = `${rowStart} / span ${rowSpan}`;

    if (text) {
      keyDiv.classList.add("key");
      keyDiv.style.width = `${this.unitSize * size}px`;
      keyDiv.style.height = `${this.unitSize * height}px`;
      keyDiv.style.minWidth = `${this.unitSize * size}px`;
      keyDiv.style.minHeight = `${this.unitSize * height}px`;
      keyDiv.textContent = text;
      keyDiv.setAttribute("data-key", code);
      this.keyElements[code.toLowerCase()] = keyDiv;
      this.keyState[code.toLowerCase()] = false;
    } else {
      keyDiv.style.visibility = "hidden"; // Make invisible, but retain the place
    }

    parent.appendChild(keyDiv);
  }

  addEventListeners() {
    document.addEventListener("keydown", (e) => {
      const keyCode = e.code.toLowerCase();
      if (this.keyElements[keyCode]) {
        e.preventDefault();
        this.keyElements[keyCode].classList.add("active", "pressed");
        if (!this.keyState[keyCode]) {
          this.keyState[keyCode] = true;
          this.addToHistory(keyCode);
          this.updatePressedKeysDisplay();
        }
      }
    });

    document.addEventListener("keyup", (e) => {
      const keyCode = e.code.toLowerCase();
      if (this.keyElements[keyCode]) {
        this.keyElements[keyCode].classList.remove("active");
        this.keyState[keyCode] = false;
      }
    });
  }

  addToHistory(keyCode) {
    const keyConfig = Object.values(this.layouts[this.layoutName])
      .flat()
      .flat()
      .find((k) => k.code.toLowerCase() === keyCode);
    const keyText = keyConfig ? keyConfig.text : keyCode;
    this.keyPressHistory.unshift(keyText);
    if (this.keyPressHistory.length > this.maxHistoryLength) {
      this.keyPressHistory.pop();
    }
  }

  updatePressedKeysDisplay() {
    this.pressedKeysDisplay.textContent = `Key Press History: ${this.keyPressHistory.join(
      ", "
    )}`;
  }

  addLayoutSwitchListeners() {
    const radios = document.querySelectorAll('input[name="layout"]');
    radios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        this.layoutName = e.target.value;
        this.createKeyboard();
        this.keyPressHistory = [];
        this.updatePressedKeysDisplay();
      });
    });
  }
}
