"use strict";
import { mainEl } from "./queryDom.js";

function createTimerBtn() {
  const timerBtn = `
      <section>
        <button>10secs</button>
      </section>
    `;
  mainEl.insertAdjacentHTML("beforeend", timerBtn);
}

export { createTimerBtn };
