// @flow
import {useEffect} from "preact/hooks";

const time = () => Date.now() / 1000;
const sleep = seconds => new Promise(r => setTimeout(r, seconds * 1000));

const BASE = time() - 3000;

export const FULL = {tot: 42, use: 42, mt: BASE, lf: BASE-9000};
export const FREE = {...FULL, use: 41};

export const DATA: {[string]: typeof FREE} = {
};

for (let m=8; m<13; m++) {
  const month = (100 + m + "").slice(-2);
  for (let d=1; d<32; d++) {
    const day = (100 + d + "").slice(-2);
    const path = `/data/42/2021-${ month }-${ day }`;
    DATA[path] = FULL;
  }
}

DATA["/data/42/2021-09-20"] = FREE;
DATA["/data/42/2021-09-21"] = FREE;
DATA["/data/42/2021-09-22"] = FREE;

DATA["/data/42/2021-10-08"] = FREE;

export const callbacks: {[string]: (datum: (typeof FREE)) => void} = {};

const fake_update = async () => {
  for (;;)
    for (const path of Object.keys(DATA)) {
      await sleep(1);
      const cb = callbacks[path];
      if (cb) cb(DATA[path]);
    }
};

fake_update();
