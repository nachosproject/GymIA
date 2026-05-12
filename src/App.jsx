<!DOCTYPE html>

<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CoachIA — Tu Entrenador Personal con IA</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

```
:root {
  --fire: #ff4500;
  --fire2: #ff8c00;
  --dark: #080808;
  --dark2: #111;
  --dark3: #1a1a1a;
  --text: #f0f0f0;
  --muted: #888;
}

html { scroll-behavior: smooth; }

body {
  background: var(--dark);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

/* NAV */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 32px;
  background: rgba(8,8,8,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,69,0,0.15);
}
.nav-logo { font-family: 'Bebas Neue', sans-serif; font-size: 26px; color: var(--fire); letter-spacing: 2px; }
.nav-cta {
  background: linear-gradient(135deg, var(--fire), var(--fire2));
  color: #fff; border: none; padding: 10px 24px;
  border-radius: 30px; font-weight: 700; font-size: 14px;
  cursor: pointer; text-decoration: none;
  box-shadow: 0 4px 20px rgba(255,69,0,0.35);
  transition: transform 0.2s, box-shadow 0.2s;
}
.nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,69,0,0.5); }

/* HERO */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; padding: 120px 24px 80px;
  position: relative; overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,69,0,0.12) 0%, transparent 70%);
  pointer-events: none;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,69,0,0.1); border: 1px solid rgba(255,69,0,0.3);
  color: var(--fire2); font-size: 13px; font-weight: 600;
  padding: 8px 18px; border-radius: 30px; margin-bottom: 28px;
  letter-spacing: 0.5px;
}
.hero h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(52px, 10vw, 100px);
  line-height: 0.95;
  letter-spacing: 2px;
  margin-bottom: 24px;
}
.hero h1 span {
  background: linear-gradient(135deg, var(--fire), var(--fire2));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.hero-sub {
  font-size: clamp(16px, 2.5vw, 20px);
  color: #bbb; max-width: 580px; line-height: 1.6; margin-bottom: 40px;
}
.hero-cta {
  display: inline-block;
  background: linear-gradient(135deg, var(--fire), var(--fire2));
  color: #fff; font-size: 18px; font-weight: 800;
  padding: 18px 48px; border-radius: 50px;
  text-decoration: none; cursor: pointer; border: none;
  box-shadow: 0 8px 40px rgba(255,69,0,0.45);
  transition: transform 0.2s, box-shadow 0.2s;
  letter-spacing: 0.5px;
}
.hero-cta:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 50px rgba(255,69,0,0.6); }
.hero-price { margin-top: 16px; color: var(--muted); font-size: 14px; }
.hero-price strong { color: var(--fire2); font-size: 18px; }

/* PREVIEW MOCKUP */
.mockup-wrap {
  margin-top: 60px;
  position: relative; display: inline-block;
  max-width: 600px; width: 100%;
}
.mockup {
  background: var(--dark2);
  border: 1px solid rgba(255,69,0,0.25);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 20px 80px rgba(255,69,0,0.2);
}
.mockup-bar {
  display: flex; gap: 7px; margin-bottom: 16px;
}
.mockup-bar span {
  width: 12px; height: 12px; border-radius: 50%;
}
.mockup-msg {
  display: flex; gap: 10px; margin-bottom: 12px; align-items: flex-end;
}
.mockup-avatar {
  width: 32px; height: 32px; border-radius: 50%;
  background: linear-gradient(135deg, var(--fire), var(--fire2));
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; flex-shrink: 0;
}
.mockup-bubble {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,69,0,0.15);
  border-radius: 16px 16px 16px 4px;
  padding: 10px 14px; font-size: 13px; line-height: 1.5; color: #ddd;
  max-width: 400px; text-align: left;
}
.mockup-bubble.user {
  background: linear-gradient(135deg, var(--fire), #ff6a00);
  border: none; border-radius: 16px 16px 4px 16px; color: #fff; margin-left: auto;
}
.mockup-msg.user { flex-direction: row-reverse; }

/* PAIN SECTION */
.section { padding: 80px 24px; max-width: 900px; margin: 0 auto; }
.section-label {
  font-size: 12px; font-weight: 700; letter-spacing: 3px;
  text-transform: uppercase; color: var(--fire); margin-bottom: 16px;
}
.section h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(36px, 6vw, 60px);
  line-height: 1; margin-bottom: 24px; letter-spacing: 1px;
}

/* PAIN CARDS */
.pain-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px; margin-top: 40px;
}
.pain-card {
  background: var(--dark2);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px; padding: 24px;
  transition: border-color 0.2s;
}
.pain-card:hover { border-color: rgba(255,69,0,0.3); }
.pain-icon { font-size: 28px; margin-bottom: 12px; }
.pain-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; }
.pain-card p { font-size: 13px; color: var(--muted); line-height: 1.5; }

/* FEATURES */
.features-wrap { background: var(--dark2); padding: 80px 24px; }
.features-inner { max-width: 900px; margin: 0 auto; }
.features-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px; margin-top: 48px;
}
.feature-card {
  background: var(--dark3);
  border: 1px solid rgba(255,69,0,0.15);
  border-radius: 20px; padding: 28px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(255,69,0,0.15); }
.feature-num {
  font-family: 'Bebas Neue', sans-serif; font-size: 48px;
  background: linear-gradient(135deg, var(--fire), var(--fire2));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  line-height: 1; margin-bottom: 12px;
}
.feature-card h3 { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
.feature-card p { font-size: 13px; color: var(--muted); line-height: 1.6; }

/* TESTIMONIALS */
.testi-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px; margin-top: 48px;
}
.testi-card {
  background: var(--dark2); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px; padding: 24px;
}
.testi-stars { color: var(--fire2); font-size: 16px; margin-bottom: 12px; }
.testi-text { font-size: 14px; line-height: 1.6; color: #ccc; margin-bottom: 16px; font-style: italic; }
.testi-author { display: flex; align-items: center; gap: 10px; }
.testi-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--fire), var(--fire2));
  display: flex; align-items: center; justify-content: center; font-size: 16px;
}
.testi-name { font-size: 13px; font-weight: 700; }
.testi-loc { font-size: 11px; color: var(--muted); }

/* PRICING */
.pricing-card {
  max-width: 460px; margin: 48px auto 0;
  background: var(--dark2);
  border: 2px solid var(--fire);
  border-radius: 24px; padding: 40px;
  text-align: center;
  box-shadow: 0 0 60px rgba(255,69,0,0.2);
  position: relative; overflow: hidden;
}
.pricing-card::before {
  content: '🔥 MÁS POPULAR';
  position: absolute; top: 20px; right: -30px;
  background: linear-gradient(135deg, var(--fire), var(--fire2));
  color: #fff; font-size: 11px; font-weight: 800;
  padding: 6px 40px; transform: rotate(45deg);
  letter-spacing: 1px;
}
.pricing-original { color: var(--muted); font-size: 16px; text-decoration: line-through; margin-bottom: 4px; }
.pricing-price {
  font-family: 'Bebas Neue', sans-serif; font-size: 80px;
  background: linear-gradient(135deg, var(--fire), var(--fire2));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  line-height: 1;
}
.pricing-period { color: var(--muted); font-size: 14px; margin-bottom: 32px; }
.pricing-features { list-style: none; margin-bottom: 32px; text-align: left; }
.pricing-features li {
  padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
  font-size: 14px; display: flex; align-items: center; gap: 10px;
}
.pricing-features li::before { content: '✓'; color: var(--fire2); font-weight: 800; }
.pricing-btn {
  display: block; width: 100%;
  background: linear-gradient(135deg, var(--fire), var(--fire2));
  color: #fff; font-size: 17px; font-weight: 800;
  padding: 18px; border-radius: 50px; border: none;
  cursor: pointer; text-decoration: none;
  box-shadow: 0 8px 30px rgba(255,69,0,0.4);
  transition: transform 0.2s, box-shadow 0.2s;
  letter-spacing: 0.5px;
}
.pricing-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(255,69,0,0.55); }
.pricing-guarantee { margin-top: 16px; font-size: 12px; color: var(--muted); }

/* FAQ */
.faq-list { margin-top: 40px; display: flex; flex-direction: column; gap: 12px; }
.faq-item {
  background: var(--dark2); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px; padding: 20px 24px; cursor: pointer;
  transition: border-color 0.2s;
}
.faq-item:hover { border-color: rgba(255,69,0,0.3); }
.faq-q { font-size: 15px; font-weight: 600; display: flex; justify-content: space-between; align-items: center; }
.faq-a { font-size: 13px; color: var(--muted); line-height: 1.6; margin-top: 12px; display: none; }
.faq-item.open .faq-a { display: block; }
.faq-item.open { border-color: rgba(255,69,0,0.4); }

/* FOOTER */
footer {
  background: #050505; border-top: 1px solid rgba(255,69,0,0.1);
  text-align: center; padding: 40px 24px;
  color: var(--muted); font-size: 13px;
}
footer .footer-logo { font-family: 'Bebas Neue', sans-serif; font-size: 28px; color: var(--fire); margin-bottom: 12px; }

/* STICKY CTA MOBILE */
.sticky-cta {
  display: none;
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 99;
  background: rgba(8,8,8,0.95); border-top: 1px solid rgba(255,69,0,0.2);
  padding: 12px 20px;
}
@media (max-width: 640px) {
  .sticky-cta { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .sticky-cta span { font-size: 13px; color: #bbb; }
  .sticky-cta a {
    background: linear-gradient(135deg, var(--fire), var(--fire2));
    color: #fff; font-weight: 800; font-size: 14px;
    padding: 12px 24px; border-radius: 30px; text-decoration: none; white-space: nowrap;
  }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero > * { animation: fadeUp 0.6s ease both; }
.hero > *:nth-child(1) { animation-delay: 0.1s; }
.hero > *:nth-child(2) { animation-delay: 0.2s; }
.hero > *:nth-child(3) { animation-delay: 0.3s; }
.hero > *:nth-child(4) { animation-delay: 0.4s; }
.hero > *:nth-child(5) { animation-delay: 0.5s; }
```

  </style>
</head>
<body>

<!-- NAV -->

<nav>
  <div class="nav-logo">💪 CoachIA</div>
  <a href="#pricing" class="nav-cta">Obtener acceso →</a>
</nav>

<!-- HERO -->

<section class="hero">
  <div class="hero-badge">🤖 Inteligencia Artificial + Fitness</div>
  <h1>TU ENTRENADOR<br/><span>PERSONAL CON IA</span></h1>
  <p class="hero-sub">Generá rutinas de gimnasio 100% personalizadas en segundos. Sin excusas, sin perder tiempo. Solo resultados.</p>
  <a href="#pricing" class="hero-cta">🔥 Quiero mi rutina ahora</a>
  <p class="hero-price">Acceso de por vida por solo <strong>$30.000 ARS</strong></p>

  <!-- Mockup -->

  <div class="mockup-wrap">
    <div class="mockup">
      <div class="mockup-bar">
        <span style="background:#ff5f57"></span>
        <span style="background:#febc2e"></span>
        <span style="background:#28c840"></span>
      </div>
      <div class="mockup-msg user">
        <div class="mockup-bubble user">Hola! Quiero ganar músculo, soy principiante y tengo 4 días por semana 💪</div>
      </div>
      <div class="mockup-msg">
        <div class="mockup-avatar">💪</div>
        <div class="mockup-bubble">¡Perfecto! Acá va tu rutina de 4 días para ganar músculo siendo principiante:<br/><br/>
          <strong>Día 1 — Pecho + Tríceps</strong><br/>
          • Press banca 3x10 • Fondos 3x8<br/><br/>
          <strong>Día 2 — Espalda + Bíceps</strong><br/>
          • Dominadas 3x8 • Remo 3x12 🔥
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PAIN -->

<section class="section">
  <p class="section-label">El problema</p>
  <h2>¿TE SENTÍS ASÍ EN<br/>EL GIMNASIO?</h2>
  <div class="pain-grid">
    <div class="pain-card">
      <div class="pain-icon">😵</div>
      <h3>No sabés qué ejercicios hacer</h3>
      <p>Vas al gym sin un plan claro y perdés tiempo mirando a los demás.</p>
    </div>
    <div class="pain-card">
      <div class="pain-icon">💸</div>
      <h3>Un entrenador personal es caro</h3>
      <p>Los coaches cobran $50-100 USD por mes. No todos pueden pagarlo.</p>
    </div>
    <div class="pain-card">
      <div class="pain-icon">📱</div>
      <h3>Las apps genéricas no se adaptan a vos</h3>
      <p>Te dan rutinas iguales para todos, sin importar tu nivel ni objetivos.</p>
    </div>
    <div class="pain-card">
      <div class="pain-icon">🔄</div>
      <h3>Siempre hacés los mismos ejercicios</h3>
      <p>Tu cuerpo se acostumbra y dejás de progresar.</p>
    </div>
  </div>
</section>

<!-- FEATURES -->

<div class="features-wrap">
  <div class="features-inner">
    <p class="section-label">La solución</p>
    <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(36px,6vw,60px);line-height:1;letter-spacing:1px;margin-bottom:0">POR QUÉ COACHIA<br/><span style="background:linear-gradient(135deg,#ff4500,#ff8c00);-webkit-background-clip:text;-webkit-text-fill-color:transparent">CAMBIA TODO</span></h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-num">01</div>
        <h3>Rutina 100% personalizada</h3>
        <p>Le contás tu objetivo, nivel y disponibilidad. La IA crea una rutina hecha exactamente para vos.</p>
      </div>
      <div class="feature-card">
        <div class="feature-num">02</div>
        <h3>Responde al instante, 24/7</h3>
        <p>A las 6am antes del gym o a las 11pm. Siempre disponible, nunca cansado.</p>
      </div>
      <div class="feature-card">
        <div class="feature-num">03</div>
        <h3>Acceso de por vida</h3>
        <p>Pagás una sola vez y tenés acceso para siempre. Sin suscripciones ni sorpresas.</p>
      </div>
      <div class="feature-card">
        <div class="feature-num">04</div>
        <h3>Fácil de usar</h3>
        <p>Solo escribís lo que necesitás en lenguaje natural. Sin complicaciones ni tutoriales.</p>
      </div>
      <div class="feature-card">
        <div class="feature-num">05</div>
        <h3>Series, reps y descansos incluidos</h3>
        <p>Cada rutina viene con todos los detalles: ejercicios, series, repeticiones y tiempos de descanso.</p>
      </div>
      <div class="feature-card">
        <div class="feature-num">06</div>
        <h3>Precio accesible</h3>
        <p>Por menos que una sesión con un entrenador, tenés acceso ilimitado para siempre.</p>
      </div>
    </div>
  </div>
</div>

<!-- TESTIMONIALS -->

<section class="section">
  <p class="section-label">Testimonios</p>
  <h2>LO QUE DICEN<br/>NUESTROS USUARIOS</h2>
  <div class="testi-grid">
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"En 30 segundos tuve una rutina completa adaptada a mi lesión de rodilla. Increíble."</p>
      <div class="testi-author">
        <div class="testi-avatar">👨</div>
        <div>
          <div class="testi-name">Matías R.</div>
          <div class="testi-loc">Buenos Aires, Argentina</div>
        </div>
      </div>
    </div>
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"Soy principiante y no sabía nada. Me explicó todo paso a paso como un profe de verdad."</p>
      <div class="testi-author">
        <div class="testi-avatar">👩</div>
        <div>
          <div class="testi-name">Lucía M.</div>
          <div class="testi-loc">Córdoba, Argentina</div>
        </div>
      </div>
    </div>
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p class="testi-text">"Valió cada peso. Llevo 2 meses siguiendo las rutinas y ya noto los cambios."</p>
      <div class="testi-author">
        <div class="testi-avatar">🧑</div>
        <div>
          <div class="testi-name">Diego F.</div>
          <div class="testi-loc">Tucumán, Argentina</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->

<section class="section" id="pricing" style="text-align:center">
  <p class="section-label">Precio</p>
  <h2>INVERSIÓN ÚNICA,<br/>RESULTADOS DE POR VIDA</h2>
  <div class="pricing-card">
    <p class="pricing-original">$50.000 ARS</p>
    <div class="pricing-price" style="font-size:60px">$30.000</div>
    <p class="pricing-period">pesos argentinos — pago único, acceso de por vida</p>
    <ul class="pricing-features">
      <li>Rutinas personalizadas ilimitadas</li>
      <li>Disponible 24/7 desde cualquier dispositivo</li>
      <li>Adaptado a tu nivel y objetivos</li>
      <li>Series, repeticiones y descansos detallados</li>
      <li>Acceso de por vida sin suscripción</li>
      <li>Actualizaciones incluidas</li>
    </ul>
    <!-- 👇 REEMPLAZÁ este href con tu link de Hotmart o Gumroad -->
    <a href="https://hotmart.com/tu-link-aqui" class="pricing-btn" target="_blank">
      🔥 Obtener acceso ahora por $30.000 ARS
    </a>
    <p class="pricing-guarantee">🔒 Pago seguro · 7 días de garantía</p>
  </div>
</section>

<!-- FAQ -->

<section class="section">
  <p class="section-label">Preguntas frecuentes</p>
  <h2>TODO LO QUE<br/>NECESITÁS SABER</h2>
  <div class="faq-list">
    <div class="faq-item" onclick="this.classList.toggle('open')">
      <div class="faq-q">¿Necesito experiencia en el gym para usarlo? <span>+</span></div>
      <div class="faq-a">No, para nada. CoachIA se adapta a cualquier nivel: principiante, intermedio o avanzado. Solo contale tu situación y te arma la rutina ideal.</div>
    </div>
    <div class="faq-item" onclick="this.classList.toggle('open')">
      <div class="faq-q">¿Funciona si entreno en casa sin equipamiento? <span>+</span></div>
      <div class="faq-a">Sí. Podés pedirle rutinas con o sin equipamiento, para gym, casa, o incluso con equipamiento limitado.</div>
    </div>
    <div class="faq-item" onclick="this.classList.toggle('open')">
      <div class="faq-q">¿Cómo accedo después de comprar? <span>+</span></div>
      <div class="faq-a">Apenas completás el pago recibís el link de acceso por email. En menos de 2 minutos ya podés estar generando tu primera rutina.</div>
    </div>
    <div class="faq-item" onclick="this.classList.toggle('open')">
      <div class="faq-q">¿Hay garantía de devolución? <span>+</span></div>
      <div class="faq-a">Sí, tenés 7 días de garantía. Si no quedás conforme te devolvemos el dinero, sin preguntas.</div>
    </div>
    <div class="faq-item" onclick="this.classList.toggle('open')">
      <div class="faq-q">¿Puedo pagar con tarjeta argentina? <span>+</span></div>
      <div class="faq-a">Sí, podés pagar con tarjeta de crédito o débito argentina. El cobro se hace en pesos directamente.</div>
    </div>
  </div>
</section>

<!-- FINAL CTA -->

<section style="background:linear-gradient(135deg,rgba(255,69,0,0.15),rgba(255,140,0,0.1));padding:80px 24px;text-align:center;">
  <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(40px,7vw,72px);line-height:1;letter-spacing:1px;margin-bottom:20px">
    EMPEZÁ HOY.<br/>
    <span style="background:linear-gradient(135deg,#ff4500,#ff8c00);-webkit-background-clip:text;-webkit-text-fill-color:transparent">TU CUERPO NO ESPERA.</span>
  </h2>
  <p style="color:#bbb;font-size:16px;max-width:480px;margin:0 auto 36px;line-height:1.6">
    Por menos que una cena afuera, tenés un entrenador personal con IA para siempre.
  </p>
  <a href="#pricing" class="hero-cta">🔥 Quiero acceso por $30.000 ARS</a>
</section>

<!-- FOOTER -->

<footer>
  <div class="footer-logo">💪 CoachIA</div>
  <p>© 2025 CoachIA — Todos los derechos reservados</p>
  <p style="margin-top:8px">Hecho con ❤️ en Argentina 🇦🇷</p>
</footer>

<!-- STICKY MOBILE CTA -->

<div class="sticky-cta">
  <span>Acceso de por vida 🔥</span>
  <a href="#pricing">Obtener por $30.000 ARS</a>
</div>

</body>
</html>
