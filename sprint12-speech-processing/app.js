window.addEventListener("load", () => {
  // Elemente
  const speakBtn = document.getElementById("btn-speak");
  const jokeBtn = document.getElementById("btn-tell-a-joke");
  const speakTextEl = document.getElementById("speak-text");
  const emojiContainer = document.getElementById("emoji-reactions");
  const feedbackEl = document.getElementById("emoji-feedback");

  // Istoric reacții (opțional)
  const reactionsHistory = [];

  // Evenimente
  speakBtn.addEventListener("click", () => {
    const text = speakTextEl.value.trim();
    if (text) {
      speak(text);
      checkSpeakButtonStatus();
    }
  });

  speakTextEl.addEventListener("input", checkSpeakButtonStatus);

  jokeBtn.addEventListener("click", async () => {
    try {
      const data = await fetchJoke();
      const jokeText = extractJokeText(data);
      speakTextEl.value = jokeText;
      checkSpeakButtonStatus();
      emojiContainer.classList.remove("hidden");
    } catch (err) {
      console.error("Eroare la preluarea glumei:", err);
      speakTextEl.value = "Oops! Nu am putut obține o glumă.";
    }
  });

  document.querySelectorAll(".emoji-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const reaction = e.target.dataset.reaction;
      const joke = speakTextEl.value.trim();
      reactionsHistory.push({
        joke,
        reaction,
        timestamp: new Date().toISOString(),
      });

      feedbackEl.classList.remove("hidden");
      setTimeout(() => feedbackEl.classList.add("hidden"), 2000);
      emojiContainer.classList.add("hidden");

      console.log("Reacție:", reaction);
    });
  });

  // Funcții
  function checkSpeakButtonStatus() {
    const text = speakTextEl.value.trim();
    speakBtn.disabled = text.length === 0;
  }

  function speak(text) {
    console.log("Speaking:", text);
    VoiceRSS.speech({
      key: "52bfbd75e1c24955831329926a53c5ed",
      src: text,
      hl: "en-us",
      v: "Linda",
      r: 0,
      c: "mp3",
      f: "44khz_16bit_stereo",
      ssml: false,
    });
  }

  async function fetchJoke() {
    const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas?blacklistFlags=religious,racist,sexist";
    const response = await fetch(url);
    return await response.json();
  }

  function extractJokeText(data) {
    if (data.type === "twopart") {
      return `${data.setup}\n---------------------\n${data.delivery}`;
    }
    if (data.type === "single") {
      return data.joke;
    }
    throw new Error("Unknown joke type");
  }
});
