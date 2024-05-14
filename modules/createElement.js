"use strict";

import { mainEl } from "./queryDom.js";
import { createTimerBtn } from "./createTimerBtn.js";

function createElement(data) {
  const elements = `
        <div>
          <h3>ADVICE #${data.slip.id}</h3>
          <p>"${data.slip.advice}"</p>
          <img
            src="images/pattern-divider-mobile.png"
            alt="pattern-divider-desktop"
          />
        </div>
      `;
  mainEl.insertAdjacentHTML("afterbegin", elements);
  createTimerBtn();
  const btnElement = document.querySelectorAll("button");
  return btnElement;
}

export default createElement;
