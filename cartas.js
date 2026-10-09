/* =====================================================
   AJUSTES DEL JUEGO  (cambia los números cuando quieras)
   ===================================================== */
const AJUSTES = {
  titulo: "Mi Álbum",
  monedasIniciales: 50,
  precioSobre: 30,
  cartasPorSobre: 5,
  bonusRepetida: 5,        // monedas que da una carta repetida
  bonusPagina: 100,        // monedas por completar una página (9 cartas)
  diaria: { base: 20, extra: 5, max: 50 },  // recompensa diaria y aumento por racha
  /* RAREZAS: de más común a más rara. Puedes añadir, quitar o renombrar.
     id = el nombre que usas en cada carta | prob = probabilidad relativa de salir
     color = color del borde | brillo = true para que la carta brille
     Si una rareza aún no tiene cartas, simplemente no sale. */
  rarezas: [
    { id: "comun",      prob: 70, color: "#8a8a8a" },
    { id: "rara",       prob: 25, color: "#2f7bd0" },
    { id: "epica",      prob: 5,  color: "#b0389c", brillo: true },
    { id: "legendaria", prob: 1,  color: "#e8a317", brillo: true }
  ],
  sobre: "sobre.png",    // tu diseño de sobre, p. ej. "sobre.png" (proporción 17:25). Vacío = sobre por defecto
  reverso: ""   // tu reverso de carta, p. ej. "reverso.png" (proporción 2:3). Vacío = por defecto
};

/* =====================================================
   TUS CARTAS
   - Cada línea es una carta. Cada 9 cartas = 1 página del álbum.
   - AÑADE SIEMPRE LAS NUEVAS AL FINAL. No borres ni reordenes las
     existentes, o el álbum de quienes ya juegan se desordenará.
   - n: nombre | rareza: el id de una de las rarezas de arriba
   - img: ruta de tu imagen, p. ej. "cartas/dragon.png" (proporción 2:3)
   - e: emoji provisional, se usa solo si no pones img
   Ejemplo con imagen:
     {n:"Dragón", rareza:"epica", img:"cartas/dragon.png"},
   ===================================================== */
const CARTAS = [
  {n:"Santo_Entierro", rareza:"comun", img:"cartas/escudo_santoentierro.png"},
  {n:"Veracruz", rareza:"comun", img:"cartas/benedicardsveracruz.png"},
  {n:"Paz_y_Amor", rareza:"comun", img:"cartas/benedicardspazyamor.png"},
  {n:"Zorro", rareza:"comun", e:"🦊"},
  {n:"Salud_San_Rafael", rareza:"comun", img:"cartas/benedicardssanrafael.png"},
  {n:"Dolores", rareza:"comun", img:"cartas/benedicardsdolores.png"},
  {n:"Rocío", rareza:"comun", img:"cartas/benedicardsrocio.png"},
  {n:"Resurrección", rareza:"comun", img:"cartas/escudo_resurreccion.png"},
  {n:"Santa_Faz", rareza:"comun", img:"cartas/escudo_santafaz.png"},
  {n:"Rana", rareza:"comun", e:"🐸"},
  {n:"Oso", rareza:"comun", e:"🐻"},
  {n:"Ciervo", rareza:"rara", e:"🦌"},
  {n:"Mariposa", rareza:"comun", e:"🦋"},
  {n:"Cangrejo", rareza:"comun", e:"🦀"},
  {n:"Cebra", rareza:"rara", e:"🦓"},
  {n:"Koala", rareza:"comun", e:"🐨"},
  {n:"Pingüino", rareza:"comun", e:"🐧"},
  {n:"Camaleón", rareza:"epica", e:"🦎"},
  {n:"Unicornio", rareza:"comun", e:"🦄"},
  {n:"Gato", rareza:"comun", e:"🐱"},
  {n:"Perro", rareza:"rara", e:"🐶"},
  {n:"Tortuga", rareza:"comun", e:"🐢"},
  {n:"Delfín", rareza:"comun", e:"🐬"},
  {n:"León", rareza:"rara", e:"🦁"},
  {n:"Elefante", rareza:"comun", e:"🐘"},
  {n:"Pantera", rareza:"comun", e:"🐆"},
  {n:"Jirafa", rareza:"epica", e:"🦒"},
];
