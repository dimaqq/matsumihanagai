// @flow

export const init_state = () =>
{
  window.dispatchEvent(new CustomEvent("popstate"));
};

export const push_state = (path: string) =>
{
  window.history.pushState({}, "", path);
  window.dispatchEvent(new CustomEvent("popstate"));
};

export const replace_state = (path: string) =>
{
  window.history.replaceState({}, "", path);
  window.dispatchEvent(new CustomEvent("popstate"));
};

export const pop_state = (): void => window.history.popState();
