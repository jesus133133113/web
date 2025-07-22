// Estado y datos
let idioma = localStorage.getItem("idioma") || "es";
let modoOscuro = JSON.parse(localStorage.getItem("modoOscuro") || "false");
let favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
let recetasPersonalizadas = JSON.parse(localStorage.getItem("recetasPersonalizadas") || "[]");
let testimonios = JSON.parse(localStorage.getItem("testimonios") || "[]");
let recetaActual = "";
let recetas = {};
let recetasBase = {
  cicatricure: {
    id: "cicatricure",
    titulo: { es: "🧴 Cicatricure Casero", en: "🧴 Homemade Cicatricure" },
    tipo: "grasa",
    img: "img/cicatricure.jpg",
    ingredientes: {
      es: ["Gel de aloe vera", "Aceite de coco", "Miel pura"],
      en: ["Aloe vera gel", "Coconut oil", "Pure honey"]
    },
    preparacion: {
      es: ["Mezcla 2 cucharadas de aloe con 1 de aceite de coco.", "Agrega 1 cucharadita de miel."],
      en: ["Mix 2 tablespoons of aloe with 1 of coconut oil.", "Add 1 teaspoon of honey."]
    },
    consejos: {
      es: ["Aplicar en la noche sobre cicatrices limpias.", "Dejar actuar por 30 minutos y enjuagar.", "Usar 3 veces por semana."],
      en: ["Apply at night on clean scars.", "Leave on for 30 minutes and rinse.", "Use 3 times a week."]
    },
    color: "#f4dada"
  },
  antiestrias: {
    id: "antiestrias",
    titulo: { es: "💪 Antiestrías Natural", en: "💪 Natural Anti-stretch marks" },
    tipo: "seca",
    img: "img/antiestrias.jpg",
    ingredientes: {
      es: ["Puré de plátano", "Aceite de oliva", "Avena molida"],
      en: ["Mashed banana", "Olive oil", "Ground oats"]
    },
    preparacion: {
      es: ["Tritura 1 plátano maduro.", "Agrega 1 cda de aceite y 1 cda de avena."],
      en: ["Mash 1 ripe banana.", "Add 1 tbsp of oil and 1 tbsp of oats."]
    },
    consejos: {
      es: ["Aplica en zonas con estrías con masajes circulares.", "Déjalo 20 minutos y retira con agua tibia."],
      en: ["Apply on areas with stretch marks using circular massages.", "Leave for 20 minutes and remove with warm water."]
    },
    color: "#ffe4b3"
  },
  hidratante: {
    id: "hidratante",
    titulo: { es: "💧 Hidratante de Pepino", en: "💧 Cucumber Moisturizer" },
    tipo: "mixta",
    img: "img/hidratante.jpg",
    ingredientes: {
      es: ["Medio pepino", "Yogur natural", "Miel cruda"],
      en: ["Half cucumber", "Plain yogurt", "Raw honey"]
    },
    preparacion: {
      es: ["Licúa el pepino pelado.", "Mezcla con 2 cdas de yogur y 1 cdita de miel."],
      en: ["Blend the peeled cucumber.", "Mix with 2 tbsp of yogurt and 1 tsp of honey."]
    },
    consejos: {
      es: ["Ideal para hidratar por la mañana.", "Aplicar 15 minutos y enjuagar con agua fría."],
      en: ["Ideal for morning hydration.", "Apply for 15 minutes and rinse with cold water."]
    },
    color: "#ccf2e7"
  },
  exfoliante: {
    id: "exfoliante",
    titulo: { es: "🌾 Exfoliante de Azúcar", en: "🌾 Sugar Scrub" },
    tipo: "sensible",
    img: "img/exfoliante.jpg",
    ingredientes: {
      es: ["Azúcar morena", "Aceite de coco", "Limón"],
      en: ["Brown sugar", "Coconut oil", "Lemon"]
    },
    preparacion: {
      es: ["Mezcla 2 cdas de azúcar con 1 cda de aceite.", "Agrega unas gotas de limón (opcional)."],
      en: ["Mix 2 tbsp of sugar with 1 tbsp of oil.", "Add a few drops of lemon (optional)."]
    },
    consejos: {
      es: ["Masajear suavemente una vez por semana.", "Evitar el sol si usas limón."],
      en: ["Massage gently once a week.", "Avoid sun exposure if you use lemon."]
    },
    color: "#ffe9c6"
  },
  labios: {
    id: "labios",
    titulo: { es: "💋 Bálsamo para Labios", en: "💋 Lip Balm" },
    tipo: "labios",
    img: "img/labios.jpg",
    ingredientes: {
      es: ["Manteca de cacao", "Aceite de oliva", "Miel"],
      en: ["Cocoa butter", "Olive oil", "Honey"]
    },
    preparacion: {
      es: ["Derrite la manteca y mézclala con miel y aceite.", "Deja enfriar y usa como bálsamo."],
      en: ["Melt the butter and mix it with honey and oil.", "Let cool and use as a balm."]
    },
    consejos: {
      es: ["Úsalo en las noches para labios suaves."],
      en: ["Use at night for soft lips."]
    },
    color: "#f8d1e0"
  },
  cabello: {
    id: "cabello",
    titulo: { es: "🦰 Mascarilla Capilar Natural", en: "🦰 Natural Hair Mask" },
    tipo: "cabello",
    img: "img/cabello.jpg",
    ingredientes: {
      es: ["Gel de sábila", "Aceite de ricino", "Romero"],
      en: ["Aloe gel", "Castor oil", "Rosemary"]
    },
    preparacion: {
      es: ["Licúa 4 cdas de sábila con 2 de aceite.", "Agrega infusión de romero."],
      en: ["Blend 4 tbsp of aloe with 2 of oil.", "Add rosemary infusion."]
    },
    consejos: {
      es: ["Aplica en cuero cabelludo limpio.", "Deja actuar 30 min y enjuaga."],
      en: ["Apply on clean scalp.", "Leave for 30 min and rinse."]
    },
    color: "#d9f0c7"
  }
};

const textos = {
  es: {
    bienvenida: "Bienvenido a Recetas Naturales STP",
    sub: "💚 Elige tu tipo de piel y descubre recetas caseras perfectas para ti 💚",
    principal: "🌿 Belleza Casera 🌸",
    guardar: "Receta guardada localmente.",
    favoritoA: "Agregada a favoritos.",
    favoritoQ: "Quitada de favoritos.",
    recetaPDF: "Descargando PDF...",
    compartir: "Enlace copiado o compartido",
    testimonio: "¡Gracias por tu testimonio!",
    recetaPers: "Receta personalizada guardada.",
    idioma: "Idioma cambiado.",
    modoOscuro: "Modo oscuro activado",
    modoClaro: "Modo claro activado",
    filtro: "Filtrado por",
    buscar: "Buscar receta...",
    añadir: "➕ Añadir receta",
    testimonioBtn: "💬 Testimonio",
    testimonios: "💬 Testimonios",
    cerrar: "Cerrar ventana",
    guardarBtn: "Guardar"
  },
  en: {
    bienvenida: "Welcome to Natural Recipes STP",
    sub: "💚 Choose your skin type and discover homemade recipes for you 💚",
    principal: "🌿 Homemade Beauty 🌸",
    guardar: "Recipe saved locally.",
    favoritoA: "Added to favorites.",
    favoritoQ: "Removed from favorites.",
    recetaPDF: "Downloading PDF...",
    compartir: "Link copied or shared",
    testimonio: "Thanks for your review!",
    recetaPers: "Custom recipe saved.",
    idioma: "Language changed.",
    modoOscuro: "Dark mode on",
    modoClaro: "Light mode on",
    filtro: "Filtered by",
    buscar: "Search recipe...",
    añadir: "➕ Add recipe",
    testimonioBtn: "💬 Testimony",
    testimonios: "💬 Reviews",
    cerrar: "Close window",
    guardarBtn: "Save"
  }
};

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  recetas = { ...recetasBase };
  recetasPersonalizadas.forEach(r => recetas[r.id] = r);

  if (modoOscuro) document.body.classList.add("modo-oscuro");
  setIdiomaTextos();

  renderBotonesRecetas();
  renderRecetaActiva();
  renderTestimonios();
});

function setIdiomaTextos() {
  document.getElementById("bienvenidaTitulo").textContent = textos[idioma].bienvenida;
  document.getElementById("bienvenidaSub").textContent = textos[idioma].sub;
  document.getElementById("tituloPrincipal").textContent = textos[idioma].principal;
  document.getElementById("busquedaReceta").placeholder = textos[idioma].buscar;
  document.querySelectorAll('button[onclick="abrirModalPersonalizada()"]').forEach(b => b.innerText = textos[idioma].añadir);
  document.querySelectorAll('button[onclick="abrirModalTestimonio()"]').forEach(b => b.innerText = textos[idioma].testimonioBtn);
  document.getElementById("modalTestimonioTitulo") && (document.getElementById("modalTestimonioTitulo").innerText = textos[idioma].testimonios);
  document.getElementById("modalPersonalizadaTitulo") && (document.getElementById("modalPersonalizadaTitulo").innerText = textos[idioma].añadir);
  document.querySelectorAll('.modal-cerrar').forEach(b => b.setAttribute("aria-label", textos[idioma].cerrar));
  document.querySelectorAll('.modal-contenido button').forEach(b => b.innerText = textos[idioma].guardarBtn);
  document.getElementById("testimonios") && (document.getElementById("testimonios").querySelector("h2").innerText = textos[idioma].testimonios);
}

function renderBotonesRecetas() {
  const nav = document.getElementById("botonesRecetas");
  nav.innerHTML = "";
  Object.values(recetas).forEach(receta => {
    const btn = document.createElement("button");
    btn.innerText = receta.titulo[idioma] || receta.titulo["es"];
    btn.setAttribute("tabindex", "0");
    btn.setAttribute("aria-label", btn.innerText);
    btn.onclick = () => mostrarReceta(receta.id);
    if (favoritos.includes(receta.id)) btn.dataset.favorito = "true";
    nav.appendChild(btn);
  });
  filtrarRecetas();
}

function renderRecetaActiva() {
  const main = document.getElementById("contenedorRecetaActiva");
  if (!recetaActual) recetaActual = Object.keys(recetas)[0];
  const receta = recetas[recetaActual];
  if (!receta) {
    main.innerHTML = "<p>Receta no encontrada.</p>";
    return;
  }
  main.innerHTML = `
    <section class="receta mostrar animada" id="${receta.id}" data-piel="${receta.tipo}" role="region" aria-label="${receta.titulo[idioma] || receta.titulo['es']}">
      <div class="contenido-receta" style="background-color:${receta.color}">
        <img src="${receta.img}" alt="${receta.titulo[idioma] || receta.titulo["es"]}" class="img-receta" loading="lazy">
        <h2>${receta.titulo[idioma] || receta.titulo["es"]}</h2>
        <h3>🌿 ${idioma === "es" ? "Ingredientes" : "Ingredients"}:</h3>
        <ul>${receta.ingredientes[idioma].map(i => `<li>✅ ${i}</li>`).join("")}</ul>
        <h3>🛠️ ${idioma === "es" ? "Preparación" : "Preparation"}:</h3>
        <ol>${receta.preparacion[idioma].map(p => `<li>${p}</li>`).join("")}</ol>
        <h3>📌 ${idioma === "es" ? "Consejos de aplicación" : "Tips"}:</h3>
        <ul>${receta.consejos[idioma].map(c => `<li>💡 ${c}</li>`).join("")}</ul>
      </div>
    </section>
  `;
  setFavoritoBtn();
}

// Filtros y búsqueda
function filtrarRecetas() {
  const tipo = document.getElementById("filtroPiel").value;
  const q = document.getElementById("busquedaReceta").value.trim().toLowerCase();
  const nav = document.getElementById("botonesRecetas");
  Object.values(recetas).forEach(receta => {
    let visible = (tipo === "todas" || receta.tipo === tipo);
    if (q) {
      const txt = (receta.titulo[idioma] + " " + receta.ingredientes[idioma].join(" ")).toLowerCase();
      visible = visible && txt.includes(q);
    }
    const btn = Array.from(nav.children).find(b => b.innerText === (receta.titulo[idioma] || receta.titulo["es"]));
    if (btn) btn.style.display = visible ? "" : "none";
  });
}

// Portada y navegación
function iniciarApp() {
  document.getElementById("portada").classList.add("oculto");
  document.getElementById("barraSuperior").classList.remove("oculto");
  document.getElementById("botonesRecetas").classList.remove("oculto");
  document.getElementById("contenedorRecetaActiva").classList.remove("oculto");
  document.getElementById("controlesSuperiores").classList.remove("oculto");
  document.getElementById("notaMedidas").classList.remove("oculto");
  document.getElementById("pieLegal").classList.remove("oculto");
  document.getElementById("accionesReceta").classList.remove("oculto");
  document.getElementById("testimonios").classList.remove("oculto");
  mostrarBienvenida();
  mostrarReceta(Object.keys(recetas)[0]);
}

function mostrarReceta(id) {
  recetaActual = id;
  renderRecetaActiva();
  window.scrollTo({ top: 150, behavior: "smooth" });
}

// Favoritos
function setFavoritoBtn() {
  const btn = document.getElementById("favoritoBtn");
  const esFav = favoritos.includes(recetaActual);
  btn.dataset.favorito = esFav ? "true" : "false";
  btn.innerText = esFav ? "★ Favorito" : "🤍 Favorito";
}
function toggleFavorito() {
  const idx = favoritos.indexOf(recetaActual);
  if (idx === -1) {
    favoritos.push(recetaActual);
    showToast(textos[idioma].favoritoA);
  } else {
    favoritos.splice(idx, 1);
    showToast(textos[idioma].favoritoQ);
  }
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  setFavoritoBtn();
  renderBotonesRecetas();
}

// Añadir receta personalizada
function abrirModalPersonalizada() {
  document.getElementById("modalPersonalizada").classList.remove("oculto");
}
function cerrarModalPersonalizada() {
  document.getElementById("modalPersonalizada").classList.add("oculto");
}
function guardarPersonalizada() {
  const id = "pers_" + Date.now();
  const titulo = document.getElementById("nuevaTitulo").value.trim();
  const tipo = document.getElementById("nuevaTipo").value.trim().toLowerCase();
  const img = document.getElementById("nuevaImg").value.trim() || "img/personalizada.jpg";
  const ingredientes = document.getElementById("nuevaIngredientes").value.split(",").map(x => x.trim());
  const preparacion = document.getElementById("nuevaPreparacion").value.split(";").map(x => x.trim());
  const consejos = document.getElementById("nuevaConsejos").value.split(";").map(x => x.trim());
  if (!titulo || !tipo || ingredientes.length < 1 || preparacion.length < 1) {
    showToast("Completa toda la información.");
    return;
  }
  const nueva = {
    id,
    titulo: { [idioma]: titulo },
    tipo, img,
    ingredientes: { [idioma]: ingredientes },
    preparacion: { [idioma]: preparacion },
    consejos: { [idioma]: consejos.length ? consejos : [""] },
    color: "#e4ffd4"
  };
  recetas[id] = nueva;
  recetasPersonalizadas.push(nueva);
  localStorage.setItem("recetasPersonalizadas", JSON.stringify(recetasPersonalizadas));
  cerrarModalPersonalizada();
  renderBotonesRecetas();
  renderRecetaActiva();
  showToast(textos[idioma].recetaPers);
}

// Compartir receta
function compartirReceta() {
  const receta = recetas[recetaActual];
  let text = `${receta.titulo[idioma] || receta.titulo["es"]}\n\n`;
  text += `${idioma === "es" ? "Ingredientes" : "Ingredients"}: ${receta.ingredientes[idioma].join(", ")}\n`;
  text += `${idioma === "es" ? "Preparación" : "Preparation"}: ${receta.preparacion[idioma].join(". ")}\n`;
  text += `${idioma === "es" ? "Consejos" : "Tips"}: ${receta.consejos[idioma].join(". ")}\n`;

  if (navigator.share) {
    navigator.share({ title: receta.titulo[idioma], text, url: window.location.href });
    showToast(textos[idioma].compartir);
  } else {
    navigator.clipboard.writeText(text + "\n" + window.location.href);
    showToast(textos[idioma].compartir);
  }
}

// Descargar receta .txt
function descargarReceta() {
  const receta = recetas[recetaActual];
  let text = `${receta.titulo[idioma] || receta.titulo["es"]}\n\n`;
  text += `${idioma === "es" ? "Ingredientes" : "Ingredients"}: ${receta.ingredientes[idioma].join(", ")}\n`;
  text += `${idioma === "es" ? "Preparación" : "Preparation"}: ${receta.preparacion[idioma].join(". ")}\n`;
  text += `${idioma === "es" ? "Consejos" : "Tips"}: ${receta.consejos[idioma].join(". ")}\n`;
  const blob = new Blob([text], { type: "text/plain" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(blob);
  enlace.download = `${recetaActual}-receta.txt`;
  enlace.click();
}

// Descargar receta PDF
function descargarRecetaPDF() {
  showToast(textos[idioma].recetaPDF);
  const receta = recetas[recetaActual];
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 18;
  doc.setFontSize(24);
  doc.text(receta.titulo[idioma] || receta.titulo["es"], 10, y);
  doc.setFontSize(14);
  y += 10;
  doc.text((idioma === "es" ? "Ingredientes: " : "Ingredients: ") + receta.ingredientes[idioma].join(", "), 10, y);
  y += 10;
  doc.text((idioma === "es" ? "Preparación: " : "Preparation: ") + receta.preparacion[idioma].join(". "), 10, y);
  y += 10;
  doc.text((idioma === "es" ? "Consejos: " : "Tips: ") + receta.consejos[idioma].join(". "), 10, y);
  doc.save(`${recetaActual}-receta.pdf`);
}

// Guardar y notificaciones
function guardar() {
  showToast(textos[idioma].guardar);
}

// Imprimir
function imprimirReceta() {
  window.print();
}

// Feedback visual
function mostrarBienvenida() {
  showToast("🌿 " + (idioma === "es" ? "¡Bienvenido/a a tu recetario natural!" : "Welcome to your natural recipes!"), 2200);
}
function showToast(msg, ms = 1800) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.classList.add("mostrar");
  setTimeout(() => toast.classList.remove("mostrar"), ms);
}

// Música de fondo
function alternarMusica() {
  const musica = document.getElementById("musicaFondo");
  const btn = document.getElementById("musicaBtn");
  if (musica.paused) {
    musica.volume = 0.2;
    musica.play();
    btn.innerText = "🔊";
    showToast("🎵 Música activada");
  } else {
    musica.pause();
    btn.innerText = "🎵";
    showToast("🔇 Música pausada");
  }
}

// Modo oscuro avanzado
function alternarModo() {
  modoOscuro = !modoOscuro;
  document.body.classList.toggle("modo-oscuro");
  localStorage.setItem("modoOscuro", modoOscuro);
  showToast(textos[idioma][modoOscuro ? "modoOscuro" : "modoClaro"]);
}

// Cambiar idioma
function cambiarIdioma() {
  idioma = idioma === "es" ? "en" : "es";
  localStorage.setItem("idioma", idioma);
  setIdiomaTextos();
  renderBotonesRecetas();
  renderRecetaActiva();
  filtrarRecetas();
  showToast(textos[idioma].idioma);
}

// Testimonios
function abrirModalTestimonio() {
  document.getElementById("modalTestimonio").classList.remove("oculto");
}
function cerrarModalTestimonio() {
  document.getElementById("modalTestimonio").classList.add("oculto");
}
function guardarTestimonio() {
  const nombre = document.getElementById("nombreTestimonio").value.trim() || "Anónimo";
  const texto = document.getElementById("textoTestimonio").value.trim();
  if (!texto) {
    showToast("Escribe tu experiencia.");
    return;
  }
  testimonios.unshift({ nombre, texto, fecha: new Date().toLocaleDateString() });
  localStorage.setItem("testimonios", JSON.stringify(testimonios));
  cerrarModalTestimonio();
  renderTestimonios();
  showToast(textos[idioma].testimonio);
}
function renderTestimonios() {
  const cont = document.getElementById("testimonios");
  const ul = document.getElementById("listaTestimonios");
  ul.innerHTML = "";
  testimonios.slice(0, 10).forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${t.nombre}</strong> <em>(${t.fecha})</em>:<br>${t.texto}`;
    ul.appendChild(li);
  });
}

// Accesibilidad: navegación por teclado
document.addEventListener("keydown", e => {
  // cerrar modals con Esc
  if (e.key === "Escape") {
    cerrarModalPersonalizada();
    cerrarModalTestimonio();
  }
  // Enter en botones
  if (e.key === "Enter" || e.key === " ") {
    const btn = document.activeElement;
    if (btn && btn.tagName === "BUTTON") btn.click();
  }
});