let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  let previousCount = ` ${count} - `;
  saveEl.textContent += previousCount;
  countEl.textContent = 0
  count = 0
}

function reset() {
    window.location.reload();
}
