// @flow
import {useState, useEffect} from "preact/hooks";
import {callbacks, FREE} from "./data";
import {wardCodes} from "./navi";
import {t} from "./t";

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

export const useWardCode = (): ?string => {
  const path = usePath();
  const name = path.match(/^[/](?<name>[^/*])([/]|$)/)?.groups?.name;
  return name && wardCodes.get(name);
};

export const useWardName = (): string => {
  const code = useWardCode();
  return t([code ?? ""]);
};

export function  useCallback(
  path?: string,
  cb: (datum: (typeof FREE)) => void) {
  useEffect(() => {
    if (!path) return;
    callbacks[path] = cb;
    return () => { delete callbacks[path]; };
  }, [path]);
}
