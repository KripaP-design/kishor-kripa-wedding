export default {
  fetch(request) {
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
      margin: 10px 0;
    }
    .and { color: #d4af37; }
    .invite { color: #d4af37; letter-spacing: 1px; margin-top: 20px; }
    .divider {
      width: 60px;
      height: 2px;
      background: #d4af37;
      margin: 25px auto;
    }
    footer { margin-top: 40px; font-size: 11px; opacity: 0.6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="lang-switch">
      <button onclick="switchLang()">English / മലയാളം</button>
    </div>

    <div id="en">
      <div class="invite">WEDDING INVITATION</div>
      <h1>Kishor</h1>
      <div class="and">&</div>
      <h1>Kripa</h1>
      <div class="divider"></div>
      <div>11 January 2026</div>
      <div>11:56 AM – 12:50 PM</div>
      <div class="divider"></div>
      <div>
        Souparnika Auditorium<br/>
        Bovikanam, Kasargod
      </div>
    </div>

    <div id="ml" style="display:none;">
      <div class="invite">വിവാഹ ക്ഷണം</div>
      <h1>കിഷോർ</h1>
      <div class="and">&</div>
      <h1>കൃപ</h1>
      <div class="divider"></div>
      <div>2026 ജനുവരി 11</div>
      <div>11:56 AM – 12:50 PM</div>
      <div class="divider"></div>
      <div>
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
  </script>
</body>
</html>
    `, {
      headers: { "content-type": "text/html;charset=UTF-8" }
    });
  }
};
