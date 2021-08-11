// @flow
import {useState, useEffect} from "preact/hooks";

export const useNavigation = (cb: () => void): void => useEffect(() => {
  window.addEventListener("popstate", cb);
  return () => window.removeEventListener("popstate", cb);
}, [cb]);

export const usePath = (): string => {
  const [path, set_path] = useState("");
  const navi = () => set_path(window.location.pathname);
  useNavigation(navi);
  return path;
};

