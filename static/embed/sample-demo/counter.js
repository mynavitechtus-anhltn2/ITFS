const button = document.querySelector("#counter");
let count = 0;

button.addEventListener("click", () => {
  count += 1;
  button.textContent = `Đã bấm ${count} lần`;
});
