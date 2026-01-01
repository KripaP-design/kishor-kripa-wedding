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
.bg-overlay {
  position: fixed;
  inset: 0;
  background:
    linear-gradient(
      rgba(15,15,20,0.88),
      rgba(15,15,20,0.88)
    ),
    url("https://i.pinimg.com/originals/d0/08/9c/d0089c27cf5c67c60ad66c9fe1d87394.jpg") center center / cover no-repeat;
  z-index: -3;
}


.bg-couple {
  position: fixed;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
  opacity: 0.25;
  animation: coupleFloat 6s ease-in-out infinite;
  z-index: -1;
}

@keyframes coupleFloat {
  0% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -10px); }
  100% { transform: translate(-50%, 0); }
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

// h1 {
//   font-family: 'Playfair Display', serif;
//   font-size: 34px;
//   margin: 8px 0;
// }
/* Name container */
.names {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  overflow: hidden;
}

/* Groom animation */
.groom {
  opacity: 0;
  transform: translateX(-60px);
  animation: groomFloat 1.4s ease-out forwards;
}

/* Bride animation */
.bride {
  opacity: 0;
  transform: translateX(60px);
  animation: brideFloat 1.4s ease-out forwards;
  animation-delay: 0.2s;
}

/* Ampersand */
.and {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.9s;
}

/* Keyframes */
@keyframes groomFloat {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes brideFloat {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

// .and {
//   color: #d4af37;
//   font-size: 18px;
// }
.blessing {
  font-size: 13px;
  color: rgba(255,255,255,0.75);
  line-height: 1.6;
  margin-top: 10px;
  margin-bottom: 6px;
  font-style: italic;
}

.invite {
  color: #d4af37;
  letter-spacing: 1px;
  margin-top: 20px;
  font-size: 13px;
}
.invite-line {
  margin-top: 14px;
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255,255,255,0.78);
  font-style: italic;
}

.divider {
  width: 60px;
  height: 2px;
  background: #d4af37;
  margin: 25px auto;
}

// .date {
//   font-size: 18px;
// }
.muhurtham-box {
  margin: 28px 0;
  padding: 20px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.35);
  text-align: center;
}

.muhurtham-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  letter-spacing: 1px;
  color: #d4af37;
  margin-bottom: 10px;
}

.muhurtham-date {
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 6px;
}

.muhurtham-time {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  font-style: italic;
}
.diya {
  font-size: 26px;
  margin-bottom: 6px;
  animation: diyaGlow 2.5s ease-in-out infinite;
}

@keyframes diyaGlow {
  0%, 100% {
    text-shadow: 0 0 6px rgba(212,175,55,0.6);
  }
  50% {
    text-shadow: 0 0 14px rgba(212,175,55,1);
  }
}

.venue-box {
  margin: 26px 0;
  text-align: center;
}

.venue-title {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  color: #d4af37;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.venue-name {
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
}

.venue-place {
  font-size: 14px;
  opacity: 0.75;
  margin-top: 2px;
}

// .prewedding-box {
//   margin-top: 30px;
//   padding: 18px 14px;
//   background: rgba(255,255,255,0.06);
//   backdrop-filter: blur(8px);
//   text-align: center;
// }

// .prewedding-title {
//   font-family: 'Playfair Display', serif;
//   font-size: 16px;
//   color: #d4af37;
//   margin-bottom: 10px;
// }

// .prewedding-detail {
//   font-size: 13px;
//   line-height: 1.6;
//   opacity: 0.85;
//   margin-bottom: 8px;
// }

// .prewedding-location {
//   font-size: 13px;
//   opacity: 0.9;
// }

.location-icon {
  margin-left: 6px;
  cursor: pointer;
}

.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 12px 26px;
  border-radius: 30px;
  background: linear-gradient(135deg, #d4af37, #f5e28a);
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
}
.heart {
  font-size: 22px;
  color: #d4af37;
  margin-top: 18px;
  margin-bottom: 12px;
  animation: heartGlow 2.5s ease-in-out infinite;
}

@keyframes heartGlow {
  0%   { opacity: 0.6; transform: scale(1); }
  50%  { opacity: 1;   transform: scale(1.08); }
  100% { opacity: 0.6; transform: scale(1); }
}
/* Remove outer box styling */
.countdown-box {
  margin-top: 34px;
  padding: 0;
  background: none;
  border: none;
  text-align: center;
}

.countdown-title {
  font-size: 13px;
  margin-bottom: 14px;
  color: rgba(255,255,255,0.8);
  font-style: italic;
}

/* Grid of time boxes */
.countdown {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

/* Individual time box */
.time-box {
  background: #f6f1e7; /* light cream */
  border-radius: 14px;
  padding: 14px 6px;
}

/* Numbers */
.time-box span {
  display: block;
  font-size: 22px;
  font-weight: 700;
  color: #3b2f1c;
  font-family: 'Playfair Display', serif;
}

/* Labels */
.time-box small {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #6a5b3b;
}


footer {
  margin-top: 40px;
  font-size: 11px;
  opacity: 0.6;
}
</style>
</head>

<body>
<div class="bg-overlay"></div>

<img
  src="https://i.pinimg.com/originals/d0/08/9c/d0089c27cf5c67c60ad66c9fe1d87394.jpg"
  alt="Bride and Groom Illustration"
  class="bg-couple"
/>

<div class="container fade-in">

<div class="lang-switch">
  <button onclick="switchLang()">English / മലയാളം</button>
</div>

<!-- ENGLISH -->
<div id="en">
  <div class="invite">WEDDING INVITATION</div>
  <div class="heart">♥</div>
<div class="blessing">
  With hearts full of gratitude and the blessings of our families
</div>


 <h1 class="names">
  <span class="groom">Kishor</span>
  <span class="and">&</span>
  <span class="bride">Kripa</span>
</h1>

<div class="invite-line">
  We joyfully invite you to witness the beginning of our forever.
</div>
 <div class="muhurtham-box">
  <div class="diya">🪔</div>

  <div class="muhurtham-title">Muhurtham</div>

  <div class="muhurtham-date">
    11 January 2026
  </div>

  <div class="muhurtham-time">
    11:56 AM – 12:50 PM
  </div>
</div>


  <div class="divider"></div>
<div class="venue-box">
  <div class="venue-title">Wedding at</div>
  <div class="venue-name">Souparnika Auditorium, Bovikanam</div>
  <div class="venue-place">Kasaragod</div>
</div>

  <a class="btn" href="https://maps.app.goo.gl/4SfaKnjbH7BnubxLA" target="_blank">
    📍 Open Location
  </a>
// <div class="prewedding-box">
//   <div class="prewedding-title">Pre-Wedding Event</div>

//   <div class="prewedding-detail">
//   10 January 2026<br>
//    6:30 PM – 9:00 PM
//   </div>

//   <div class="prewedding-location">
//      Groom’s Home
//     <span class="location-icon"><a href="https://www.google.com/maps?q=12.5314767,75.1392283&z=17&hl=en" target="_blank">📌</a></span>
//   </div>
// </div>

  <br/>
<div class="divider"></div>
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
<div class="countdown-box">
  <div class="countdown-title">Only a little while to go</div>

  <div class="countdown">
    <div class="time-box">
      <span id="days">0</span>
      <small>Days</small>
    </div>
    <div class="time-box">
      <span id="hours">0</span>
      <small>Hours</small>
    </div>
    <div class="time-box">
      <span id="minutes">0</span>
      <small>Minutes</small>
    </div>
    <div class="time-box">
      <span id="seconds">0</span>
      <small>Seconds</small>
    </div>
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
document.addEventListener("DOMContentLoaded", function () {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
    console.error("Countdown elements not found");
    return;
  }

  // Wedding date: 11 Jan 2026, 11:56 AM IST
  const weddingDate = new Date("2026-01-11T11:56:00+05:30").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      daysEl.innerText = "0";
      hoursEl.innerText = "0";
      minutesEl.innerText = "0";
      secondsEl.innerText = "0";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
  }

  updateCountdown();              // run immediately
  setInterval(updateCountdown, 1000); // update every second
});


</script>

</body>
</html>
`, {
  headers: { "content-type": "text/html;charset=UTF-8" }
});
}
};
