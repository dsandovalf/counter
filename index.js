let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  count++;
  countEl.innerText = count;
}

function save() {
  let previousCount = ` ${count} - `;
  saveEl.innerText += previousCount;
}

function reset() {
    window.location.reload();
}
