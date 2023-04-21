const numberEl = document.querySelector(".counter");
const loadEl = document.querySelector(".front");

let num = 0;
updateLoad();

function updateLoad() {
  numberEl.innerText = num + "%";
  loadEl.style.width = num + "%";
  num++;

  if (num < 101) {
    setTimeout(updateLoad, 50);
  }

  if (num === 100) {
    numberEl.style.color = "cyan";
    loadEl.style = "background-color:cyan";
  }
}
