const baseLayout = {
  main: [
    [
      { text: "`", code: "Backquote", size: 1 },
      { text: "1", code: "Digit1", size: 1 },
      { text: "2", code: "Digit2", size: 1 },
      { text: "3", code: "Digit3", size: 1 },
      { text: "4", code: "Digit4", size: 1 },
      { text: "5", code: "Digit5", size: 1 },
      { text: "6", code: "Digit6", size: 1 },
      { text: "7", code: "Digit7", size: 1 },
      { text: "8", code: "Digit8", size: 1 },
      { text: "9", code: "Digit9", size: 1 },
      { text: "0", code: "Digit0", size: 1 },
      { text: "-", code: "Minus", size: 1 },
      { text: "=", code: "Equal", size: 1 },
      { text: "Backspace", code: "Backspace", size: 2 },
    ],
    [
      { text: "Tab", code: "Tab", size: 1.5 },
      { text: "Q", code: "KeyQ", size: 1 },
      { text: "W", code: "KeyW", size: 1 },
      { text: "E", code: "KeyE", size: 1 },
      { text: "R", code: "KeyR", size: 1 },
      { text: "T", code: "KeyT", size: 1 },
      { text: "Y", code: "KeyY", size: 1 },
      { text: "U", code: "KeyU", size: 1 },
      { text: "I", code: "KeyI", size: 1 },
      { text: "O", code: "KeyO", size: 1 },
      { text: "P", code: "KeyP", size: 1 },
      { text: ":", code: "BracketLeft", size: 1 },
      { text: "]", code: "BracketRight", size: 1 },
      { text: "\\", code: "Backslash", size: 1.5 },
    ],
    [
      { text: "Caps", code: "CapsLock", size: 1.75 },
      { text: "A", code: "KeyA", size: 1 },
      { text: "S", code: "KeyS", size: 1 },
      { text: "D", code: "KeyD", size: 1 },
      { text: "F", code: "KeyF", size: 1 },
      { text: "G", code: "KeyG", size: 1 },
      { text: "H", code: "KeyH", size: 1 },
      { text: "J", code: "KeyJ", size: 1 },
      { text: "K", code: "KeyK", size: 1 },
      { text: "L", code: "KeyL", size: 1 },
      { text: ";", code: "Semicolon", size: 1 },
      { text: "'", code: "Quote", size: 1 },
      { text: "Enter", code: "Enter", size: 2.25 },
    ],
    [
      { text: "Shift", code: "ShiftLeft", size: 2.25 },
      { text: "Z", code: "KeyZ", size: 1 },
      { text: "X", code: "KeyX", size: 1 },
      { text: "C", code: "KeyC", size: 1 },
      { text: "V", code: "KeyV", size: 1 },
      { text: "B", code: "KeyB", size: 1 },
      { text: "N", code: "KeyN", size: 1 },
      { text: "M", code: "KeyM", size: 1 },
      { text: ",", code: "Comma", size: 1 },
      { text: ".", code: "Period", size: 1 },
      { text: "/", code: "Slash", size: 1 },
      { text: "Shift", code: "ShiftRight", size: 2.75 },
    ],
    [
      { text: "Ctrl", code: "ControlLeft", size: 1.25 },
      { text: "Win", code: "MetaLeft", size: 1.25 },
      { text: "Alt", code: "AltLeft", size: 1.25 },
      { text: "Space", code: "Space", size: 6.25 },
      { text: "Alt", code: "AltRight", size: 1.25 },
      { text: "Win", code: "MetaRight", size: 1.25 },
      { text: "Menu", code: "ContextMenu", size: 1.25 },
      { text: "Ctrl", code: "ControlRight", size: 1.25 },
    ],
  ],
  functionKeys: [
    [
      { text: "Esc", code: "Escape", size: 1 },
      { text: "", code: "", size: 0.5 },
      { text: "F1", code: "F1", size: 1 },
      { text: "F2", code: "F2", size: 1 },
      { text: "F3", code: "F3", size: 1 },
      { text: "F4", code: "F4", size: 1 },
      { text: "", code: "", size: 0.5 },
      { text: "F5", code: "F5", size: 1 },
      { text: "F6", code: "F6", size: 1 },
      { text: "F7", code: "F7", size: 1 },
      { text: "F8", code: "F8", size: 1 },
      { text: "", code: "", size: 0.5 },
      { text: "F9", code: "F9", size: 1 },
      { text: "F10", code: "F10", size: 1 },
      { text: "F11", code: "F11", size: 1 },
      { text: "F12", code: "F12", size: 1 },
      { text: "", code: "", size: 0.4 },
      { text: "PrtSc", code: "PrintScreen", size: 1 },
      { text: "Scroll", code: "ScrollLock", size: 1 },
      { text: "Pause", code: "Pause", size: 1 },
    ],
  ],
  nav: [
    [
      { text: "Insert", code: "Insert", size: 1 },
      { text: "Home", code: "Home", size: 1 },
      { text: "PgUp", code: "PageUp", size: 1 },
    ],
    [
      { text: "Delete", code: "Delete", size: 1 },
      { text: "End", code: "End", size: 1 },
      { text: "PgDn", code: "PageDown", size: 1 },
    ],
    [
      { text: "", code: "", size: 1 },
      { text: "", code: "", size: 1 },
      { text: "", code: "", size: 1 },
    ],
    [
      { text: "", code: "", size: 1 },
      { text: "↑", code: "ArrowUp", size: 1 },
      { text: "", code: "", size: 1 },
    ],
    [
      { text: "←", code: "ArrowLeft", size: 1 },
      { text: "↓", code: "ArrowDown", size: 1 },
      { text: "→", code: "ArrowRight", size: 1 },
    ],
  ],
  numpad: [
    [
      { text: "Num", code: "NumLock", size: 1 },
      { text: "/", code: "NumpadDivide", size: 1 },
      { text: "*", code: "NumpadMultiply", size: 1 },
      { text: "−", code: "NumpadSubtract", size: 1 },
    ],
    [
      { text: "7", code: "Numpad7", size: 1 },
      { text: "8", code: "Numpad8", size: 1 },
      { text: "9", code: "Numpad9", size: 1 },
      { text: "+", code: "NumpadAdd", size: 1, height: 2 },
    ],
    [
      { text: "4", code: "Numpad4", size: 1 },
      { text: "5", code: "Numpad5", size: 1 },
      { text: "6", code: "Numpad6", size: 1 },
      { text: "", code: "", size: 1, height: 1 }, // Empty
    ],
    [
      { text: "1", code: "Numpad1", size: 1 },
      { text: "2", code: "Numpad2", size: 1 },
      { text: "3", code: "Numpad3", size: 1 },
      { text: "Enter", code: "NumpadEnter", size: 1, height: 2 },
    ],
    [
      { text: "0", code: "Numpad0", size: 2 },
      { text: ".", code: "NumpadDecimal", size: 1 },
      { text: "", code: "", size: 1, height: 1 }, // Empty
    ],
  ],
};

const generateLayout = (options) => {
  const { hasFunctionKeys, hasNumpad, hasNavKeys, bottomRowSize } = options;
  const layout = {};

  if (hasFunctionKeys) {
    layout.functionKeys = baseLayout.functionKeys;
  }

  // Создаем глубокую копию baseLayout.main, чтобы не изменять оригинал
  layout.main = JSON.parse(JSON.stringify(baseLayout.main));

  // Специальная модификация для 68% раскладки
  if (!hasFunctionKeys && !hasNumpad) {
    // Перемещаем Esc в верхнюю строку
    layout.main[0] = [
      { text: "Esc", code: "Escape", size: 1 },
      { text: "1", code: "Digit1", size: 1 },
      { text: "2", code: "Digit2", size: 1 },
      { text: "3", code: "Digit3", size: 1 },
      { text: "4", code: "Digit4", size: 1 },
      { text: "5", code: "Digit5", size: 1 },
      { text: "6", code: "Digit6", size: 1 },
      { text: "7", code: "Digit7", size: 1 },
      { text: "8", code: "Digit8", size: 1 },
      { text: "9", code: "Digit9", size: 1 },
      { text: "0", code: "Digit0", size: 1 },
      { text: "-", code: "Minus", size: 1 },
      { text: "=", code: "Equal", size: 1 },
      { text: "Backspace", code: "Backspace", size: 2 },
    ];

    // Делаем Backslash одинарным и добавляем "`" после него
    layout.main[1] = [
      { text: "Tab", code: "Tab", size: 1.5 },
      { text: "Q", code: "KeyQ", size: 1 },
      { text: "W", code: "KeyW", size: 1 },
      { text: "E", code: "KeyE", size: 1 },
      { text: "R", code: "KeyR", size: 1 },
      { text: "T", code: "KeyT", size: 1 },
      { text: "Y", code: "KeyY", size: 1 },
      { text: "U", code: "KeyU", size: 1 },
      { text: "I", code: "KeyI", size: 1 },
      { text: "O", code: "KeyO", size: 1 },
      { text: "P", code: "KeyP", size: 1 },
      { text: ":", code: "BracketLeft", size: 1 },
      { text: "]", code: "BracketRight", size: 1 },
      { text: "\\", code: "Backslash", size: 1 },
      { text: "`", code: "Backquote", size: 1 }, // Добавляем "`" с размером 0.5
    ];
  }

  // Настраиваем нижнюю строку в зависимости от раскладки
  if (hasNumpad) {
    console.log("Generating layout with numpad, bottomRowSize:", bottomRowSize);
    layout.main[layout.main.length - 1] = [
      { text: "Ctrl", code: "ControlLeft", size: 1.25 },
      { text: "Win", code: "MetaLeft", size: 1.25 },
      { text: "Alt", code: "AltLeft", size: 1.25 },
      { text: "Space", code: "Space", size: bottomRowSize },
      { text: "Alt", code: "AltRight", size: 1.25 },
      { text: "Win", code: "MetaRight", size: 1.25 },
      { text: "Menu", code: "ContextMenu", size: 1.25 },
      { text: "Ctrl", code: "ControlRight", size: 1.25 },
    ];
  } else if (hasFunctionKeys) {
    console.log(
      "Generating layout with function keys, bottomRowSize:",
      bottomRowSize
    );
    layout.main[layout.main.length - 1] = [
      { text: "Ctrl", code: "ControlLeft", size: 1.25 },
      { text: "Win", code: "MetaLeft", size: 1.25 },
      { text: "Alt", code: "AltLeft", size: 1.25 },
      { text: "Space", code: "Space", size: bottomRowSize },
      { text: "Alt", code: "AltRight", size: 1.25 },
      { text: "Menu", code: "ContextMenu", size: 1.25 },
      { text: "Ctrl", code: "ControlRight", size: 1.25 },
    ];
  } else {
    console.log(
      "Generating layout without function keys or numpad, bottomRowSize:",
      bottomRowSize
    );
    layout.main[layout.main.length - 1] = [
      { text: "Ctrl", code: "ControlLeft", size: 1.25 },
      { text: "Win", code: "MetaLeft", size: 1.25 },
      { text: "Alt", code: "AltLeft", size: 1.25 },
      { text: "Space", code: "Space", size: bottomRowSize },
      { text: "Alt", code: "AltRight", size: 1.25 },
      { text: "FN", code: "fn", size: 1.25 },
      { text: "Menu", code: "ContextMenu", size: 1.25 },
    ];
  }

  console.log(layout.main[layout.main.length - 1]);

  if (hasNumpad) {
    layout.numpad = baseLayout.numpad;
  }

  if (hasNavKeys) {
    layout.nav = baseLayout.nav;
  }

  return layout;
};

export const getLayouts = () => {
  return {
    "100%": generateLayout({
      hasFunctionKeys: true,
      hasNumpad: true,
      hasNavKeys: true,
      bottomRowSize: 6.25,
    }),
    "75%": generateLayout({
      hasFunctionKeys: true,
      hasNumpad: false,
      hasNavKeys: true,
      bottomRowSize: 7,
    }),
    "68%": generateLayout({
      hasFunctionKeys: false,
      hasNumpad: false,
      hasNavKeys: true,
      bottomRowSize: 7,
    }),
  };
};
