// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://mikusweeper.chals.sekai.team/
// @grant        GM_setClipboard
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sekai.team
// @grant        none
// ==/UserScript==

(function() {
  function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
  
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });
  
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
  }
  
  function listen(fn) {
    fn = fn || console.log;
  
    let property = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data");
  
    const data = property.get;
  
    // wrapper that replaces getter
    function lookAtMessage() {
  
      let socket = this.currentTarget instanceof WebSocket;
  
      if (!socket) {
        return data.call(this);
      }
  
      let msg = data.call(this);
  
      Object.defineProperty(this, "data", { value: msg }); //anti-loop
      fn({ data: msg, socket: this.currentTarget, event: this });
      return msg;
    }
  
    property.get = lookAtMessage;
  
    Object.defineProperty(MessageEvent.prototype, "data", property);
  }
  
  listen(({ data }) => {
    console.log(data)
    const obj = JSON.parse(data)
    const player = obj["hero"]
    const map = obj["map"]
    // console.log(player, map)
    let selector = null
    let out = ""
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] == "covered") {
          out += "0"
        } else if (map[i][j] == "key") {
          selector = "#cell-" + i + "-" + j
          console.log(i, j)
          out += "9"
        } else {
          out += map[i][j].replace("c", "");
        }
      }
      out += "\n"
    }
    if (selector != null) {
      waitForElm(selector).then((elm) => {
        document.querySelector(selector).click()
      });
    }
    console.log(out);
  }
  )
  })();