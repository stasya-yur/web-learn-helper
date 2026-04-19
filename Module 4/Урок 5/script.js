const flexBtn = document.getElementById("flexBtn");
const gridBtn = document.getElementById("gridBtn");

const flexDemo = document.getElementById("flexDemo");
const gridDemo = document.getElementById("gridDemo");

flexBtn.addEventListener("click", () => {
  flexDemo.classList.remove("hidden");
  gridDemo.classList.add("hidden");
  flexBtn.classList.add("active");
  gridBtn.classList.remove("active");
});

gridBtn.addEventListener("click", () => {
  gridDemo.classList.remove("hidden");
  flexDemo.classList.add("hidden");
  gridBtn.classList.add("active");
  flexBtn.classList.remove("active");
});
