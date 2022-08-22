import { useState } from "react";

export function useListenChanges() {
  const [listenChanges, setListenChanges] = useState(false);

  return { listenChanges, setListenChanges };
}
