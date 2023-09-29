const parrafoId = document.getElementById("parrafo-dos");
// const parrafosTagName = document.getElementsByTagName("p");
// const parrafosClassName = document.getElementsByClassName("destacado");

const parrafo = document.querySelector("footer p.destacado");

const parrafos = document.querySelectorAll("section p");

// ---

const main = document.querySelector("main");

// const section = document.createElement("section");
// const h2 = document.createElement("h2");
// const h2Texto = document.createTextNode("Sección 2");
// const p = document.createElement("p");
// const pTexto = document.createTextNode("lorem...");

// h2.appendChild(h2Texto);
// p.appendChild(pTexto);
// section.appendChild(h2);
// section.appendChild(p);

// main.appendChild(section);

// ---

const secciones = [
  {
    h2: "Sección 2",
    p: "1 Lorem, ipsum dolor.",
    foto: "https://picsum.photos/100/50?random=1",
  },
  {
    h2: "Sección 3",
    p: "2 Lorem, ipsum dolor.",
    foto: "https://picsum.photos/100/50?random=2",
  },
  {
    h2: "Sección 4",
    p: "3 Lorem, ipsum dolor.",
    foto: "https://picsum.photos/100/50?random=3",
  },
];

secciones.forEach((seccion) => {
  const html = `
        <section>
            <h2 class="h2-dinamico">${seccion.h2}</h2>
            <p>${seccion.p}</p>
        </section>
    `;

  main.innerHTML += html;
});

const tbody = document.querySelector("tbody");

secciones.forEach((seccion) => {
  const html = `
        <tr>
            <td>${seccion.h2}</td>
            <td>${seccion.p}</td>
            <td><img src="${seccion.foto}" alt="Lorem Picsum"></td>
        </tr>
      `;

  tbody.innerHTML += html;
});

// ---

const h1 = document.querySelector("h1");

// h1.onclick = () => {
//   console.log("1. Click en h1");
// };

// h1.onclick = () => {
//   console.log("2. Click en h1");
// };

h1.addEventListener("click", () => {
  console.log("1. Click en h1");
});

h1.addEventListener("click", () => {
  console.log("2. Click en h1");
});

const h2Dinamico = document.querySelector(".h2-dinamico");

h2Dinamico.addEventListener("click", (event) => {
  //   event.target.style.display = "none";
  console.log("Click en h2 dinámico");
});
