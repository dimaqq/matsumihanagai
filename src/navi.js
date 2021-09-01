// @flow
import {T} from "./t";

export const wardCodes: Map<string, string> = new Map();
export const wardNames: Map<string, string> = new Map();

export const wards = [
  ["42", "渋谷区", "Shibuya", "Shibuya-ku", "渋谷"],
  ["43", "大田区", "Ōta", "Ota", "Ohta", "Ōta-ku", "Ota-ku", "Ohta-ku", "大田"],
  ["44", "千代田区", "Chiyoda"],
  ["45", "中央区", "Chūō"],
  ["46", "港区", "Minato"],
];

for (let [code, ...names] of wards)
{
  const [ja, en] = names;
  wardNames.set(code, en);
  T[en] = ja;

  wardCodes.set(code, code);
  for (let name of names)
  {
    wardCodes.set(name, code);
    wardCodes.set(name.toLowerCase(), code);
  }
}
