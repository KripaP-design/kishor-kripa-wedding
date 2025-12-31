export default {
  fetch() {
    return new Response(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Kishor & Kripa | Wedding Invitation</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">

<style>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #0f0f14, #1a1a24);
  color: #fff;
  text-align: center;
}

.container {
  max-width: 420px;
  margin: auto;
  padding: 30px 20px 50px;
}

.fade-in {
  animation: fadeInUp 1.6s ease forwards;
  opacity: 0;
}
.sparkle {
  position: fixed;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #ffd700 0%, rgba(255,215,0,0) 70%);
  border-radius: 50%;
  animation: float 6s linear infinite;
  opacity: 0.6;
  pointer-events: none;
}

@keyframes float {
  0% {
    transform: translateY(100vh) scale(0.6);
    opacity: 0;
  }
  20% { opacity: 0.6; }
  100% {
    transform: translateY(-10vh) scale(1);
    opacity: 0;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.lang-switch {
  text-align: right;
  margin-bottom: 20px;
}

.lang-switch button {
  background: transparent;
  border: 1px solid #d4af37;
  color: #d4af37;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 34px;
  margin: 8px 0;
}

.and {
  color: #d4af37;
  font-size: 18px;
}

.invite {
  color: #d4af37;
  letter-spacing: 1px;
  margin-top: 20px;
  font-size: 13px;
}

.divider {
  width: 60px;
  height: 2px;
  background: #d4af37;
  margin: 25px auto;
}

.date {
  font-size: 18px;
}

.time, .venue {
  font-size: 14px;
  opacity: 0.9;
  margin-top: 6px;
}

.btn {
  display: inline-block;
  margin-top: 18px;
  padding: 12px 26px;
  border-radius: 30px;
  background: linear-gradient(135deg, #d4af37, #f5e28a);
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
}

footer {
  margin-top: 40px;
  font-size: 11px;
  opacity: 0.6;
}
</style>
</head>

<body>
<div class="container fade-in">

<div class="lang-switch">
  <button onclick="switchLang()">English / മലയാളം</button>
</div>
<div style="text-align:right; margin-bottom:10px;">
  <button onclick="toggleMusic()" style="
    background:transparent;
    border:1px solid #d4af37;
    color:#d4af37;
    padding:6px 12px;
    border-radius:20px;
    font-size:12px;
    cursor:pointer;">
    🎶 Music
  </button>
</div>

<audio id="bgMusic" loop>
  <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_0f3d4a45b5.mp3?filename=soft-piano-ambient-110624.mp3" type="audio/mpeg">
</audio>

<!-- ENGLISH -->
<div id="en">
  <div class="invite">WEDDING INVITATION</div>

  <h1>Kishor</h1>
  <div class="and">&</div>
  <h1>Kripa</h1>

  <div class="divider"></div>

  <div class="date">11 January 2026</div>
  <div class="time">11:56 AM – 12:50 PM (IST)</div>

  <div class="divider"></div>

  <div class="venue">
    Souparnika Auditorium<br/>
    Bovikanam, Kasargod
  </div>

  <a class="btn" href="https://maps.app.goo.gl/4SfaKnjbH7BnubxLA" target="_blank">
    📍 Open Location
  </a>

  <br/>

  <a class="btn" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kishor+%26+Kripa+Wedding&dates=20260111T062600Z/20260111T072000Z&location=Souparnika+Auditorium+Bovikanam+Kasargod&details=Wedding+Ceremony+of+Kishor+and+Kripa" target="_blank">
    📆 Add to Calendar
  </a>
</div>

<!-- MALAYALAM -->
<div id="ml" style="display:none;">
  <div class="invite">വിവാഹ ക്ഷണം</div>

  <h1>കിഷോർ</h1>
  <div class="and">&</div>
  <h1>കൃപ</h1>

  <div class="divider"></div>

  <div class="date">2026 ജനുവരി 11</div>
  <div class="time">11:56 AM – 12:50 PM</div>

  <div class="divider"></div>

  <div class="venue">
    സൗപർണിക ഓഡിറ്റോറിയം<br/>
    ബോവികാനം, കാസർഗോഡ്
  </div>
</div>

<footer>With love & gratitude 💛</footer>

</div>

<script>
function switchLang() {
  const en = document.getElementById("en");
  const ml = document.getElementById("ml");
  en.style.display = en.style.display === "none" ? "block" : "none";
  ml.style.display = ml.style.display === "none" ? "block" : "none";
}
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 6000);
}

setInterval(createSparkle, 350);
let musicPlaying = false;
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (!musicPlaying) {
    music.play();
  } else {
    music.pause();
  }
  musicPlaying = !musicPlaying;
}

</script>

</body>
</html>
`, {
  headers: { "content-type": "text/html;charset=UTF-8" }
});
}
};
