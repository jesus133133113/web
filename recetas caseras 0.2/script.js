// Recetas Naturales STP - JS Mejorado para concurso
// Autor: STP J, L, R

const recetasBase = {
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
    advertencia: {
      es: "No usar si tienes piel muy sensible, eczema o alergia a alguno de los ingredientes.",
      en: "Do not use if you have very sensitive skin, eczema or allergies to any ingredient."
    },
    apto: ["grasa", "mixta", "seca"],
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
    advertencia: {
      es: "No aplicar si tienes alergia a plátano, avena o aceites. Evitar en piel grasa.",
      en: "Do not apply if you have allergies to banana, oats or oils. Avoid on oily skin."
    },
    apto: ["seca", "mixta"],
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
    advertencia: {
      es: "No usar si eres alérgico a pepino, yogur o miel. Evitar en piel con acné severo.",
      en: "Do not use if allergic to cucumber, yogurt or honey. Avoid on severely acneic skin."
    },
    apto: ["mixta", "seca", "sensible"],
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
    advertencia: {
      es: "No usar si tienes piel muy fina o heridas abiertas. Evitar en pieles muy secas.",
      en: "Do not use if you have very thin skin or open wounds. Avoid on very dry skin."
    },
    apto: ["sensible", "grasa", "mixta"],
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
    advertencia: {
      es: "No usar si eres alérgico a cacao, miel o aceites.",
      en: "Do not use if allergic to cocoa, honey or oils."
    },
    apto: ["labios"],
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
    advertencia: {
      es: "No usar si eres alérgico a sábila, ricino o romero.",
      en: "Do not use if allergic to aloe, castor or rosemary."
    },
    apto: ["cabello"],
    color: "#d9f0c7"
  },
  avena: {
    id: "avena",
    titulo: { es: "🍚 Mascarilla de Avena Calmante", en: "🍚 Soothing Oat Mask" },
    tipo: "sensible",
    img: "img/avena.jpg",
    ingredientes: {
      es: ["Avena molida", "Agua mineral", "Miel (opcional)"],
      en: ["Ground oats", "Mineral water", "Honey (optional)"]
    },
    preparacion: {
      es: ["Mezcla 2 cdas de avena con agua hasta formar pasta.", "Agrega miel si quieres más hidratación."],
      en: ["Mix 2 tbsp oats with water to form a paste.", "Add honey for extra hydration."]
    },
    consejos: {
      es: ["Aplica sobre piel limpia.", "Dejar 10 minutos y enjuagar con agua fresca."],
      en: ["Apply on clean skin.", "Leave for 10 min and rinse."]
    },
    advertencia: {
      es: "Evitar si tienes alergia a avena. Ideal para piel sensible y con rojeces.",
      en: "Avoid if allergic to oats. Perfect for sensitive, redness-prone skin."
    },
    apto: ["sensible", "seca", "mixta"],
    color: "#fff2db"
  },
  arcilla: {
    id: "arcilla",
    titulo: { es: "🌋 Mascarilla de Arcilla Verde", en: "🌋 Green Clay Mask" },
    tipo: "grasa",
    img: "img/arcilla.jpg",
    ingredientes: {
      es: ["Arcilla verde en polvo", "Agua mineral", "Aceite esencial de árbol de té (opcional)"],
      en: ["Green clay powder", "Mineral water", "Tea tree oil (optional)"]
    },
    preparacion: {
      es: ["Mezcla 1 cda de arcilla con agua hasta obtener pasta.", "Agrega 2 gotas de aceite si deseas."],
      en: ["Mix 1 tbsp clay with water to make a paste.", "Add 2 drops of oil if desired."]
    },
    consejos: {
      es: ["Dejar actuar 10 minutos.", "Enjuagar y aplicar hidratante suave."],
      en: ["Leave for 10 min.", "Rinse and apply gentle moisturizer."]
    },
    advertencia: {
      es: "No usar en piel seca o muy sensible. Puede resecar si se usa seguido.",
      en: "Avoid on dry or very sensitive skin. May dry out if used too often."
    },
    apto: ["grasa", "mixta"],
    color: "#dbe8cb"
  },
  miel: {
    id: "miel",
    titulo: { es: "🍯 Mascarilla de Miel y Yogur", en: "🍯 Honey & Yogurt Mask" },
    tipo: "seca",
    img: "img/miel.jpg",
    ingredientes: {
      es: ["Miel cruda", "Yogur natural", "Aceite de almendras"],
      en: ["Raw honey", "Plain yogurt", "Almond oil"]
    },
    preparacion: {
      es: ["Mezcla 2 cdas de yogur con 1 cda de miel y 1 cdita de aceite."],
      en: ["Mix 2 tbsp yogurt with 1 tbsp honey and 1 tsp oil."]
    },
    consejos: {
      es: ["Ideal para piel seca y apagada.", "Dejar 15 minutos y enjuagar con agua tibia."],
      en: ["Perfect for dry, dull skin.", "Leave for 15 min and rinse."]
    },
    advertencia: {
      es: "No usar si eres alérgico a miel, yogur o almendras.",
      en: "Do not use if allergic to honey, yogurt or almonds."
    },
    apto: ["seca", "mixta"],
    color: "#fffce0"
  },
  rosas: {
    id: "rosas",
    titulo: { es: "🌹 Tónico de Agua de Rosas", en: "🌹 Rose Water Toner" },
    tipo: "sensible",
    img: "img/rosas.jpg",
    ingredientes: {
      es: ["Agua de rosas pura", "Algodón"],
      en: ["Pure rose water", "Cotton"]
    },
    preparacion: {
      es: ["Empapa algodón en agua de rosas.", "Aplica suavemente sobre rostro limpio."],
      en: ["Soak cotton in rose water.", "Gently apply on clean face."]
    },
    consejos: {
      es: ["Usar cada mañana y noche.", "Ideal para pieles sensibles y deshidratadas."],
      en: ["Use every morning and night.", "Perfect for sensitive and dehydrated skin."]
    },
    advertencia: {
      es: "Evitar si tienes alergia a rosas.",
      en: "Avoid if allergic to roses."
    },
    apto: ["sensible", "seca", "mixta"],
    color: "#ffd7e6"
  },
  // RECETAS EXTRA
  mascarilla_frutas: {
    id: "mascarilla_frutas",
    titulo: { es: "🍎 Mascarilla de Frutas Mixtas", en: "🍎 Mixed Fruits Mask" },
    tipo: "seca",
    img: "img/frutas.jpg",
    ingredientes: {
      es: ["Banana madura", "Fresa", "Yogur natural"],
      en: ["Ripe banana", "Strawberry", "Natural yogurt"]
    },
    preparacion: {
      es: ["Tritura la banana y la fresa.", "Mezcla con el yogur hasta formar pasta.", "Aplica sobre el rostro y deja 15 minutos."],
      en: ["Mash banana and strawberry.", "Mix with yogurt to form a paste.", "Apply on face and leave for 15 minutes."]
    },
    consejos: {
      es: ["Ideal para piel seca y apagada.", "Enjuaga con agua tibia."],
      en: ["Great for dry, dull skin.", "Rinse with warm water."]
    },
    advertencia: {
      es: "No usar si eres alérgico a frutas rojas o lácteos.",
      en: "Do not use if allergic to red fruits or dairy."
    },
    apto: ["seca", "mixta", "sensible"],
    color: "#ffe9f0"
  },
  mascarilla_manzana: {
    id: "mascarilla_manzana",
    titulo: { es: "🍏 Mascarilla de Manzana y Miel", en: "🍏 Apple & Honey Mask" },
    tipo: "mixta",
    img: "img/manzana.jpg",
    ingredientes: {
      es: ["Manzana verde", "Miel", "Aceite de oliva"],
      en: ["Green apple", "Honey", "Olive oil"]
    },
    preparacion: {
      es: ["Ralla media manzana.", "Mezcla con una cucharada de miel y media de aceite.", "Aplica 10 minutos y retira."],
      en: ["Grate half an apple.", "Mix with one spoon honey and half olive oil.", "Apply 10 min and remove."]
    },
    consejos: {
      es: ["Refrescante e hidratante.", "Ideal para piel mixta."],
      en: ["Refreshing and moisturizing.", "Ideal for mixed skin."]
    },
    advertencia: {
      es: "No usar en piel con alergia a manzana o miel.",
      en: "Do not use on skin allergic to apple or honey."
    },
    apto: ["mixta", "seca"],
    color: "#d7f8e4"
  },
  tonico_te_verde: {
    id: "tonico_te_verde",
    titulo: { es: "🍵 Tónico de Té Verde Antioxidante", en: "🍵 Green Tea Antioxidant Toner" },
    tipo: "grasa",
    img: "img/teverde.jpg",
    ingredientes: {
      es: ["Té verde", "Algodón", "Agua mineral"],
      en: ["Green tea", "Cotton", "Mineral water"]
    },
    preparacion: {
      es: ["Prepara una infusión fuerte de té verde.", "Deja enfriar y aplica con algodón."],
      en: ["Make a strong green tea infusion.", "Let cool and apply with cotton."]
    },
    consejos: {
      es: ["Reduce inflamación y equilibra grasa.", "Usar cada mañana."],
      en: ["Reduces inflammation and balances oil.", "Use every morning."]
    },
    advertencia: {
      es: "Evitar si tienes alergia al té.",
      en: "Avoid if allergic to tea."
    },
    apto: ["grasa", "mixta", "sensible"],
    color: "#d0ffe7"
  },
  mascarilla_avocado: {
    id: "mascarilla_avocado",
    titulo: { es: "🥑 Mascarilla de Aguacate Nutritiva", en: "🥑 Nutritive Avocado Mask" },
    tipo: "seca",
    img: "img/aguacate.jpg",
    ingredientes: {
      es: ["Aguacate maduro", "Aceite de coco", "Miel"],
      en: ["Ripe avocado", "Coconut oil", "Honey"]
    },
    preparacion: {
      es: ["Machaca 1/2 aguacate.", "Mezcla con 1 cda de aceite y 1 cdita de miel.", "Aplica en piel y deja 20 minutos."],
      en: ["Mash 1/2 avocado.", "Mix with 1 tbsp oil and 1 tsp honey.", "Apply on skin and leave 20 min."]
    },
    consejos: {
      es: ["Perfecta para piel seca y deshidratada.", "Enjuaga con agua tibia."],
      en: ["Perfect for dry and dehydrated skin.", "Rinse with warm water."]
    },
    advertencia: {
      es: "No usar si eres alérgico a aguacate, coco o miel.",
      en: "Do not use if allergic to avocado, coconut or honey."
    },
    apto: ["seca", "mixta"],
    color: "#eaffcd"
  },
  shampoo_bicarbonato: {
    id: "shampoo_bicarbonato",
    titulo: { es: "🧴 Shampoo Casero de Bicarbonato", en: "🧴 Homemade Baking Soda Shampoo" },
    tipo: "cabello",
    img: "img/bicarbonato.jpg",
    ingredientes: {
      es: ["Bicarbonato de sodio", "Agua tibia", "Aceite esencial (opcional)"],
      en: ["Baking soda", "Warm water", "Essential oil (optional)"]
    },
    preparacion: {
      es: ["Mezcla 1 cda de bicarbonato en 1 taza de agua.", "Agrega unas gotas de aceite esencial si deseas.", "Usa como shampoo y enjuaga bien."],
      en: ["Mix 1 tbsp baking soda in 1 cup water.", "Add essential oil drops if desired.", "Use as shampoo and rinse well."]
    },
    consejos: {
      es: ["No usar más de 1 vez por semana.", "Ideal para cabello graso."],
      en: ["Do not use more than once a week.", "Ideal for oily hair."]
    },
    advertencia: {
      es: "Evitar si tienes cuero cabelludo sensible o seco.",
      en: "Avoid if you have sensitive or dry scalp."
    },
    apto: ["cabello", "grasa"],
    color: "#fafafc"
  },
  crema_manos: {
    id: "crema_manos",
    titulo: { es: "👐 Crema Reparadora para Manos", en: "👐 Repairing Hand Cream" },
    tipo: "seca",
    img: "img/manos.jpg",
    ingredientes: {
      es: ["Aceite de almendras", "Manteca de karité", "Vitamina E"],
      en: ["Almond oil", "Shea butter", "Vitamin E"]
    },
    preparacion: {
      es: ["Mezcla 2 cdas de aceite, 1 cda de manteca y 5 gotas de vitamina E.", "Aplica en manos limpias antes de dormir."],
      en: ["Mix 2 tbsp oil, 1 tbsp butter, 5 drops vitamin E.", "Apply on clean hands before sleep."]
    },
    consejos: {
      es: ["Usa guantes de algodón para mayor efecto.", "Ideal para manos secas y agrietadas."],
      en: ["Use cotton gloves for better effect.", "Ideal for dry, cracked hands."]
    },
    advertencia: {
      es: "No usar si eres alérgico a almendras o karité.",
      en: "Do not use if allergic to almonds or shea."
    },
    apto: ["seca", "sensible"],
    color: "#fff9f2"
  },
  mascarilla_zanahoria: {
    id: "mascarilla_zanahoria",
    titulo: { es: "🥕 Mascarilla de Zanahoria y Miel", en: "🥕 Carrot & Honey Mask" },
    tipo: "mixta",
    img: "img/zanahoria.jpg",
    ingredientes: {
      es: ["Zanahoria rallada", "Miel", "Yogur natural"],
      en: ["Grated carrot", "Honey", "Natural yogurt"]
    },
    preparacion: {
      es: ["Ralla una zanahoria.", "Mezcla con 1 cda de miel y 1 cda de yogur.", "Aplica 15 minutos y enjuaga."],
      en: ["Grate a carrot.", "Mix with 1 tbsp honey and 1 tbsp yogurt.", "Apply 15 min and rinse."]
    },
    consejos: {
      es: ["Da luminosidad y suavidad.", "Ideal para piel mixta y cansada."],
      en: ["Gives brightness and softness.", "Ideal for mixed and tired skin."]
    },
    advertencia: {
      es: "No usar si eres alérgico a zanahoria, miel o lácteos.",
      en: "Do not use if allergic to carrot, honey or dairy."
    },
    apto: ["mixta", "seca", "sensible"],
    color: "#fff5e0"
  },
  tonico_manzanilla: {
    id: "tonico_manzanilla",
    titulo: { es: "🌼 Tónico Calmante de Manzanilla", en: "🌼 Chamomile Soothing Toner" },
    tipo: "sensible",
    img: "img/manzanilla.jpg",
    ingredientes: {
      es: ["Infusión de manzanilla", "Agua mineral", "Algodón"],
      en: ["Chamomile tea", "Mineral water", "Cotton"]
    },
    preparacion: {
      es: ["Prepara una infusión fuerte.", "Deja enfriar y aplica con algodón sobre rostro."],
      en: ["Make strong infusion.", "Let cool and apply with cotton on face."]
    },
    consejos: {
      es: ["Calma irritaciones y rojeces.", "Ideal para piel sensible y niños."],
      en: ["Soothes irritation and redness.", "Great for sensitive skin and kids."]
    },
    advertencia: {
      es: "Evitar si tienes alergia a manzanilla.",
      en: "Avoid if allergic to chamomile."
    },
    apto: ["sensible", "seca", "mixta"],
    color: "#ffeccc"
  },
  mascarilla_tomate: {
    id: "mascarilla_tomate",
    titulo: { es: "🍅 Mascarilla Refrescante de Tomate y Limón", en: "🍅 Tomato & Lemon Mask" },
    tipo: "grasa",
    img: "img/tomate.jpg",
    ingredientes: {
      es: ["Tomate", "Jugo de limón", "Clara de huevo"],
      en: ["Tomato", "Lemon juice", "Egg white"]
    },
    preparacion: {
      es: ["Tritura tomate, mezcla con jugo de 1/2 limón y una clara.", "Aplica y deja 8 minutos.", "Enjuaga con agua fría."],
      en: ["Crush tomato, mix with juice of 1/2 lemon and an egg white.", "Apply and leave 8 min.", "Rinse with cold water."]
    },
    consejos: {
      es: ["Reduce grasa, da frescura.", "No exponerse al sol tras usarla."],
      en: ["Reduces oil, refreshes.", "Do not expose to sun after use."]
    },
    advertencia: {
      es: "No usar si eres alérgico a huevo, tomate o cítricos. Evitar en piel sensible.",
      en: "Do not use if allergic to egg, tomato or citrus. Avoid on sensitive skin."
    },
    apto: ["grasa", "mixta"],
    color: "#ffe6ec"
  },
};

let idioma = localStorage.getItem("idioma") || "es";
let modoOscuro = JSON.parse(localStorage.getItem("modoOscuro") || "false");
let favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
let recetasPersonalizadas = JSON.parse(localStorage.getItem("recetasPersonalizadas") || "[]");
let testimonios = JSON.parse(localStorage.getItem("testimonios") || "[]");
let recetaActual = "";
let recetas = {};

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
    guardarBtn: "Guardar",
    advertencia_piel: "Advertencia: Esta receta NO es recomendada para tu tipo de piel.",
    apto_piel: "Esta receta es adecuada para tu tipo de piel."
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
    guardarBtn: "Save",
    advertencia_piel: "Warning: This recipe is NOT recommended for your skin type.",
    apto_piel: "This recipe is suitable for your skin type."
  }
};

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  recetas = { ...recetasBase };
  recetasPersonalizadas.forEach(r => recetas[r.id] = r);

  if (modoOscuro) document.body.classList.add("modo-oscuro");
  setIdiomaTextos();

  // Oculta todo menos portada al inicio
  document.getElementById("barraSuperior").classList.add("oculto");
  document.getElementById("buscadorInteligente")?.classList.add("oculto");
  document.getElementById("botonesRecetas").classList.add("oculto");
  document.getElementById("contenedorRecetaActiva").classList.add("oculto");
  document.getElementById("controlesSuperiores").classList.add("oculto");
  document.getElementById("notaMedidas").classList.add("oculto");
  document.getElementById("pieLegal").classList.add("oculto");
  document.getElementById("accionesReceta").classList.add("oculto");
  document.getElementById("testimonios").classList.add("oculto");

  document.getElementById("entrarBtn").addEventListener("click", iniciarApp);
  document.getElementById("modoBtn").addEventListener("click", alternarModo);
  document.getElementById("musicaBtn").addEventListener("click", alternarMusica);
  document.getElementById("idiomaBtn").addEventListener("click", cambiarIdioma);
  document.getElementById("filtroPiel").addEventListener("change", filtrarRecetas);
  document.getElementById("busquedaReceta").addEventListener("input", filtrarRecetas);
  document.getElementById("favoritoBtn").addEventListener("click", toggleFavorito);
  document.getElementById("descargarTxtBtn").addEventListener("click", descargarReceta);
  document.getElementById("descargarPdfBtn").addEventListener("click", descargarRecetaPDF);
  document.getElementById("compartirBtn").addEventListener("click", compartirReceta);
  document.getElementById("añadirRecetaBtn").addEventListener("click", abrirModalPersonalizada);
  document.getElementById("cerrarPersonalizadaBtn").addEventListener("click", cerrarModalPersonalizada);
  document.getElementById("guardarPersonalizadaBtn").addEventListener("click", guardarPersonalizada);
  document.getElementById("añadirTestimonioBtn").addEventListener("click", abrirModalTestimonio);
  document.getElementById("cerrarTestimonioBtn").addEventListener("click", cerrarModalTestimonio);
  document.getElementById("guardarTestimonioBtn").addEventListener("click", guardarTestimonio);

  // Buscador inteligente funcionalidad
  document.getElementById("btnBuscarInteligente")?.addEventListener("click", buscarInteligente);
  document.getElementById("inputBuscadorInteligente")?.addEventListener("input", buscarInteligente);

  renderBotonesRecetas();
  renderRecetaActiva();
  renderTestimonios();
});

function setIdiomaTextos() {
  document.getElementById("bienvenidaTitulo").textContent = textos[idioma].bienvenida;
  document.getElementById("bienvenidaSub").textContent = textos[idioma].sub;
  document.getElementById("tituloPrincipal").textContent = textos[idioma].principal;
  document.getElementById("busquedaReceta").placeholder = textos[idioma].buscar;
  document.getElementById("añadirRecetaBtn").innerText = textos[idioma].añadir;
  document.getElementById("añadirTestimonioBtn").innerText = textos[idioma].testimonioBtn;
  document.getElementById("modalTestimonioTitulo") && (document.getElementById("modalTestimonioTitulo").innerText = textos[idioma].testimonios);
  document.getElementById("modalPersonalizadaTitulo") && (document.getElementById("modalPersonalizadaTitulo").innerText = textos[idioma].añadir);
  document.querySelectorAll('.modal-cerrar').forEach(b => b.setAttribute("aria-label", textos[idioma].cerrar));
  document.getElementById("guardarPersonalizadaBtn").innerText = textos[idioma].guardarBtn;
  document.getElementById("guardarTestimonioBtn").innerText = textos[idioma].guardarBtn;
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
  // Advertencia por tipo de piel
  const tipoSeleccionado = document.getElementById("filtroPiel") ? document.getElementById("filtroPiel").value : "todas";
  let advertenciaPiel = "";
  if (tipoSeleccionado !== "todas" && receta.apto && !receta.apto.includes(tipoSeleccionado)) {
    advertenciaPiel = `<div style="color:red; font-weight:bold; margin-bottom:8px;">${textos[idioma].advertencia_piel}</div>`;
  } else if (tipoSeleccionado !== "todas" && receta.apto && receta.apto.includes(tipoSeleccionado)) {
    advertenciaPiel = `<div style="color:green; font-weight:bold; margin-bottom:8px;">${textos[idioma].apto_piel}</div>`;
  }
  main.innerHTML = `
    <section class="receta mostrar animada" id="${receta.id}" data-piel="${receta.tipo}" role="region" aria-label="${receta.titulo[idioma] || receta.titulo['es']}">
      <div class="contenido-receta" style="background-color:${receta.color}">
        <img src="${receta.img}" alt="${receta.titulo[idioma] || receta.titulo["es"]}" class="img-receta" loading="lazy">
        <h2>${receta.titulo[idioma] || receta.titulo["es"]}</h2>
        ${advertenciaPiel}
        <h3>🌿 ${idioma === "es" ? "Ingredientes" : "Ingredients"}:</h3>
        <ul>${receta.ingredientes[idioma].map(i => `<li>✅ ${i}</li>`).join("")}</ul>
        <h3>🛠️ ${idioma === "es" ? "Preparación" : "Preparation"}:</h3>
        <ol>${receta.preparacion[idioma].map(p => `<li>${p}</li>`).join("")}</ol>
        <h3>📌 ${idioma === "es" ? "Consejos de aplicación" : "Tips"}:</h3>
        <ul>${receta.consejos[idioma].map(c => `<li>💡 ${c}</li>`).join("")}</ul>
        <h3>⚠️ ${idioma === "es" ? "Advertencia" : "Warning"}:</h3>
        <div style="color:#c44;">${receta.advertencia[idioma]}</div>
      </div>
    </section>
  `;
  setFavoritoBtn();
}

function filtrarRecetas() {
  const tipo = document.getElementById("filtroPiel").value;
  const q = document.getElementById("busquedaReceta").value.trim().toLowerCase();
  const nav = document.getElementById("botonesRecetas");
  Object.values(recetas).forEach(receta => {
    let visible = (tipo === "todas" || receta.apto.includes(tipo) || receta.tipo === tipo);
    if (q) {
      const txt = (receta.titulo[idioma] + " " + receta.ingredientes[idioma].join(" ")).toLowerCase();
      visible = visible && txt.includes(q);
    }
    const btn = Array.from(nav.children).find(b => b.innerText === (receta.titulo[idioma] || receta.titulo["es"]));
    if (btn) btn.style.display = visible ? "" : "none";
  });
  // Si la receta activa no es visible, mostrar la primera visible
  const primeroVisible = Array.from(nav.children).find(b => b.style.display !== "none");
  if (primeroVisible && recetas) {
    const id = Object.values(recetas).find(r => r.titulo[idioma] === primeroVisible.innerText || r.titulo["es"] === primeroVisible.innerText)?.id;
    if (id) mostrarReceta(id);
  }
}

function iniciarApp() {
  document.getElementById("portada").classList.add("oculto");
  document.getElementById("barraSuperior").classList.remove("oculto");
  document.getElementById("buscadorInteligente")?.classList.remove("oculto");
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

// FAVORITOS
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

// RECETA PERSONALIZADA
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
    color: "#e4ffd4",
    advertencia: { [idioma]: "" },
    apto: [tipo]
  };
  recetas[id] = nueva;
  recetasPersonalizadas.push(nueva);
  localStorage.setItem("recetasPersonalizadas", JSON.stringify(recetasPersonalizadas));
  cerrarModalPersonalizada();
  renderBotonesRecetas();
  renderRecetaActiva();
  showToast(textos[idioma].recetaPers);
}

// COMPARTIR RECETA
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

// DESCARGAR TXT
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

// DESCARGAR PDF
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

// GUARDAR Y NOTIFICACIONES
function guardar() {
  showToast(textos[idioma].guardar);
}

// IMPRIMIR
function imprimirReceta() {
  window.print();
}

// FEEDBACK VISUAL
function mostrarBienvenida() {
  showToast("🌿 " + (idioma === "es" ? "¡Bienvenido/a a tu recetario natural!" : "Welcome to your natural recipes!"), 2200);
}
function showToast(msg, ms = 1800) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.classList.add("mostrar");
  setTimeout(() => toast.classList.remove("mostrar"), ms);
}

// MÚSICA DE FONDO
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

// MODO OSCURO
function alternarModo() {
  modoOscuro = !modoOscuro;
  document.body.classList.toggle("modo-oscuro");
  localStorage.setItem("modoOscuro", modoOscuro);
  showToast(textos[idioma][modoOscuro ? "modoOscuro" : "modoClaro"]);
}

// CAMBIAR IDIOMA
function cambiarIdioma() {
  idioma = idioma === "es" ? "en" : "es";
  localStorage.setItem("idioma", idioma);
  setIdiomaTextos();
  renderBotonesRecetas();
  renderRecetaActiva();
  filtrarRecetas();
  showToast(textos[idioma].idioma);
}

// TESTIMONIOS
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
  const ul = document.getElementById("listaTestimonios");
  ul.innerHTML = "";
  testimonios.slice(0, 10).forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${t.nombre}</strong> <em>(${t.fecha})</em>:<br>${t.texto}`;
    ul.appendChild(li);
  });
}

// BUSCADOR INTELIGENTE
const sintomasReceta = [
  { palabra: "cicatriz", recetas: ["cicatricure"], descripcion: "Atenúa cicatrices y manchas leves." },
  { palabra: "estrías", recetas: ["antiestrias"], descripcion: "Reduce la apariencia de estrías y mejora la elasticidad." },
  { palabra: "hidratación", recetas: ["hidratante", "miel", "mascarilla_frutas"], descripcion: "Recetas que hidratan y suavizan la piel." },
  { palabra: "exfoliar", recetas: ["exfoliante"], descripcion: "Elimina células muertas y estimula la piel." },
  { palabra: "labios", recetas: ["labios"], descripcion: "Recetas para labios secos y agrietados." },
  { palabra: "cabello", recetas: ["cabello", "shampoo_bicarbonato"], descripcion: "Mascarillas para nutrir y dar brillo al cabello." },
  { palabra: "rojez", recetas: ["avena", "rosas", "tonico_manzanilla"], descripcion: "Calma la piel con rojeces o irritaciones." },
  { palabra: "acné", recetas: ["arcilla", "tonico_te_verde"], descripcion: "Recetas que ayudan en piel grasa y con acné." },
  { palabra: "manchas", recetas: ["arcilla", "rosas", "mascarilla_manzana"], descripcion: "Recetas que ayudan a aclarar manchas." },
  { palabra: "seca", recetas: ["miel", "hidratante", "mascarilla_avocado", "crema_manos"], descripcion: "Recetas para piel seca." },
  { palabra: "grasa", recetas: ["arcilla", "tonico_te_verde", "mascarilla_tomate"], descripcion: "Recetas para piel grasa." },
  { palabra: "mixta", recetas: ["mascarilla_manzana", "mascarilla_zanahoria"], descripcion: "Recetas para piel mixta." },
  { palabra: "sensible", recetas: ["avena", "rosas", "tonico_manzanilla"], descripcion: "Recetas para piel sensible." },
];

function buscarInteligente() {
  const query = document.getElementById("inputBuscadorInteligente").value.toLowerCase();
  let resultados = [];
  sintomasReceta.forEach(obj => {
    if (query.includes(obj.palabra)) {
      obj.recetas.forEach(id => {
        if (recetas[id])
          resultados.push({
            receta: recetas[id],
            descripcion: obj.descripcion
          });
      });
    }
  });
  // Si nada coincide, buscar por ingrediente en recetas
  if (resultados.length === 0 && query.length > 2) {
    Object.values(recetas).forEach(receta => {
      if (receta.ingredientes.es.some(i => i.toLowerCase().includes(query))) {
        resultados.push({ receta, descripcion: "Por ingrediente" });
      }
    });
  }
  const cont = document.getElementById("resultadosBuscador");
  if (resultados.length === 0) {
    cont.innerHTML = "<div>No se encontraron recomendaciones.</div>";
    return;
  }
  cont.innerHTML = resultados.map(r =>
    `<div style="margin-bottom:14px;">
      <strong>${r.receta.titulo.es}</strong> <span style="color:#555;">(${r.descripcion})</span><br>
      <button onclick="mostrarReceta('${r.receta.id}')">Ver receta</button>
    </div>`
  ).join("");
}

// ACCESIBILIDAD
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    cerrarModalPersonalizada();
    cerrarModalTestimonio();
  }
  if (e.key === "Enter" || e.key === " ") {
    const btn = document.activeElement;
    if (btn && btn.tagName === "BUTTON") btn.click();
  }
});