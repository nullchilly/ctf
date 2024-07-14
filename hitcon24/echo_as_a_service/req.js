import { $ } from "bun";

let cmd = "`sh<flag.sh`"
console.log($.escape(cmd));
await $`echo ${cmd}`;