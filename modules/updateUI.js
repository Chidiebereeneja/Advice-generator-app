"use strict";

function updateUiText(data) {
  const h3 = document.querySelector("h3");
  const p = document.querySelector("p");
  h3.textContent = `ADVICE #${data.slip.id}`;
  p.textContent = `"${data.slip.advice}"`;
}

export { updateUiText };
