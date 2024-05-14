"use strict";

import { updateUiText } from "./updateUI.js";
function refreshApi(apiUrl) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      updateUiText(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export { refreshApi };
