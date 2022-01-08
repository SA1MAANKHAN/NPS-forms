const trainingName = document.querySelector(".trainingName");
const generateUrlBtn = document.querySelector(".generateUrlBtn");
const displayUrl = document.querySelector(".displayUrl");

const baseUrl = "https://npsfeedbackform.web.app";

generateUrlBtn.addEventListener("click", () => {
  const value = encodeURIComponent(trainingName.value);

  generateUrlBtn.textContent = "Generating...";

  setTimeout(() => {
    trainingName.value = "";
    generateUrlBtn.textContent = "Generate URL";
    displayUrl.value = `${baseUrl}?training=${value}`;
  }, 1200);
});
