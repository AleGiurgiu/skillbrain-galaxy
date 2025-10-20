const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");
const diceButton = document.getElementById("dice-button");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
    const data = await response.json();

    const advice = data.slip;
    adviceText.textContent = `"${advice.advice}"`;
    adviceId.textContent = advice.id;
  } catch (error) {
    adviceText.textContent = "Eroare la preluarea sfatului 😞";
    adviceId.textContent = "--";
    console.error("Eroare:", error);
  }
}

diceButton.addEventListener("click", getAdvice);

getAdvice();
