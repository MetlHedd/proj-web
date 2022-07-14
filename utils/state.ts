import { useState } from "react";

export function createState(defaultValue: any) {
  const [value, set] = useState(defaultValue);

  return {
    value,
    set,
  };
}
