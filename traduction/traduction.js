const cambiarTexto = document.querySelectorAll("[data-section] [data-value]");
const btncambio = document.getElementById("btnLeguaje");

async function cambioIdioma(idioma) {
  try {
    const requestjson = await fetch(`./${idioma}.json`);
    const text = await requestjson.json();

    cambiarTexto.forEach((i) => {
      const section = i.dataset.section;
      const value = i.dataset.value;
      if (
        i.tagName.toLowerCase() === "input" ||
        i.tagName.toLowerCase() === "textarea"
      ) {
        i.placeholder = text[section][value];
      } else {
        i.textContent = text[section][value];
      }
    });
  } catch (error) {
    console.error("Error al cargar el archivo Json", error);
  }
}

btncambio.addEventListener("click", (evento) => {
  cambioIdioma(evento.target.parentElement.dataset.lenguage);
  console.log(evento.target.parentElement.dataset.lenguage);
});
