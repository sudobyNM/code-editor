import { useState } from "react";

const PREFIX = "mcode";
function uselocalStorage(key, initValue) {
  let prefixKey = PREFIX + key;
  const [val, setVal] = useState(() => {
    let jsonValue = localStorage.getItem(prefixKey);

    if (jsonValue) {
      return JSON.parse(jsonValue);
    }
    if (typeof initValue === "function") {
      return initValue();
    } else {
      return initValue;
    }
  });

  const saveLocal = () => {
    localStorage.setItem(prefixKey, JSON.stringify(val));
  };

  return [val, setVal, saveLocal];
}

export default uselocalStorage;
