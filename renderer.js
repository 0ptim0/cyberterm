const setButton = document.getElementById("btn");
const titleInput = document.getElementById("cmd");
const titleOutput = document.getElementById("resp");

setButton.addEventListener("click", () => {
  const cmd = titleInput.value;
  window.electronAPI.setText(cmd);
});
