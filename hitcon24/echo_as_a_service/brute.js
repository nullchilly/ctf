const LIM = 59140

import { $ } from "bun";

const startCharCode = 33;
const endCharCode = 126;

let characters = [];
for (let i = startCharCode; i <= endCharCode; i++) {
  characters.push(String.fromCharCode(i));
}

const totalChars = characters.length;

let lim = 0;
for (let i = 0; i < totalChars; i++) {
  for (let j = 0; j < totalChars; j++) {
    for (let k = 0; k < totalChars; k++) {
      for (let l = 0; l < totalChars; l++) {
        for (let m = 0; m < totalChars; m++) {
          let combination = characters[i] + characters[j] + characters[k] + characters[l] + characters[m];
          if ($.escape(combination) == combination) {
            try {
              lim++;
              if (lim >= LIM) {
                await new Promise(resolve => setTimeout(resolve, 1000));
              }
              console.log(combination);
              await $`echo ${combination}`;
            } catch {
            }
          }
        }
      }
    }
  }
}