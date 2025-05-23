const birthday = new Date("2025-12-17T00:00:00").getTime();
const countdownElement = document.getElementById("countdown");
const song = document.getElementById("birthdaySong");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = birthday - now;

  if (distance < 0) {
    countdownElement.innerHTML = "Selamat Ulang Tahun!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerHTML = `${days}h ${hours}j ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function checkPin() {
  const input = document.getElementById("pinInput").value;
  if (input === "1712") {
    document.getElementById("countdownPage").classList.add("hidden");
    document.getElementById("greetingPage").classList.remove("hidden");
    song.play().catch((e) => {
      console.log("Autoplay dibatasi. Harap klik layar untuk memutar lagu.");
    });
  } else {
    alert("PIN salah. Coba lagi!");
  }
}

document.getElementById("confettiButton").addEventListener("click", () => {
  const emojis = ["🎉", "🎂", "🥳", "🎈", "💖", "🌟"];
  const container = document.getElementById("emojiContainer");
  container.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "absolute";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = Math.random() * window.innerHeight + "px";
    emoji.style.animation = "fall 2s ease-out";
    container.appendChild(emoji);
    setTimeout(() => emoji.remove(), 2000);
  }
});
