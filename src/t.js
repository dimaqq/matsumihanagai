// @flow

const T = {
  Mon: "月",
  Tue: "火",
  Wed: "水",
  Thu: "木",
  Fri: "金",
  Sat: "土",
  Sun: "日",
};

const en = s => s;
const ja = s => T[s] || s;
const dg = s => `${ s } ${ T[s] }`;

let tr = en;

export const set_language = (name: string) => {
  if (name === "en") tr = en;
  else if (name === "ja") tr = ja;
  else tr = dg;
};

export const t = (template: string[]): string => {
  const msg = template[0];
  if (T[msg] === undefined) console.error("Missing", msg);
  return tr(msg);
};
