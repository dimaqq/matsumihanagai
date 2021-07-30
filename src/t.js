// @flow

const T = {
};

export const t = (template: string[]): string => {
  const msg = template[0];
  if (T[msg] === undefined) console.error("Missing", msg);
  return msg;
};
