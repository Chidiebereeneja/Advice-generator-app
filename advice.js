"use strict";

import createElement from "./modules/createElement.js";
import { apiUrl, imgDiceBtn } from "./modules/queryDom.js";
import { refreshApi } from "./modules/refreshApi.js";
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const btnInterval = createElement(data);
    imgDiceBtn.addEventListener("click", btnEventHandle);
    iterationTask(btnInterval);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function btnEventHandle() {
  refreshApi(apiUrl);
}

let intervalTracker = false;
let intervalId = 0;

function setTimeIntervalTask(numInterval) {
  if (!intervalTracker) {
    const interval = setInterval(() => {
      refreshApi(apiUrl);
    }, numInterval);
    intervalId = interval;
    intervalTracker = true;
  } else {
    clearInterval(intervalId);
    intervalTracker = false;
  }
}

function iterationTask(arr) {
  arr.forEach((element) => {
    element.addEventListener("click", (e) => {
      (e.target.textContent === "Next") ?
        refreshApi(apiUrl) :
        setTimeIntervalTask(10000);
    });
  });
}
