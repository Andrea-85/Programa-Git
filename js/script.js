// Variables con contenido dinámico
const title = "Tutorial de Fundamentos de HTML y CSS";
const intro = "En este tutorial aprenderás los conceptos básicos de HTML y CSS.";
const temas = [
    { id: "tema1", titulo: "¿Qué es HTML?", imagen: "img/logo-html.png", descripcion: "HTML es un lenguaje de marcado que se usa para estructurar y presentar contenido en la web." },
    { id: "tema2", titulo: "Estructura básica de una página HTML", imagen: "img/estructura.png", descripcion: "Una página HTML se compone de etiquetas como <html>, <head> y <body>, que organizan el contenido." },
    { id: "tema3", titulo: "CSS: Estilizando HTML", imagen: "img/logo-css.png", descripcion: "CSS es un lenguaje de estilos que permite dar formato a las páginas HTML, cambiando colores, tamaños, márgenes, y más." },
    { id: "tema4", titulo: "Selectores en CSS", imagen: "img/selector.png", descripcion: "Los selectores en CSS permiten seleccionar elementos específicos de HTML para aplicarles estilos." }
];
const footerText = "Creado por [Andrea Londoño].";

// Insertar el contenido dinámico
document.getElementById("title").textContent = title;
document.getElementById("intro").textContent = intro;
document.getElementById("footer-text").textContent = footerText;

// Generar la lista de temas
const temasLista = document.getElementById("temas-lista");
temas.forEach((tema) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${tema.id}`;
    link.textContent = tema.titulo;
    li.appendChild(link);
    temasLista.appendChild(li);
});

// Generar el contenido de cada tema
const contenido = document.getElementById("contenido");
temas.forEach((tema) => {
    const section = document.createElement("section");
    section.id = tema.id;

    const h3 = document.createElement("h3");
    h3.textContent = tema.titulo;

    const img = document.createElement("img");
    img.src = tema.imagen;
    img.alt = tema.titulo;

    const p = document.createElement("p");
    p.textContent = tema.descripcion;

    section.appendChild(h3);
    section.appendChild(img);
    section.appendChild(p);

    contenido.appendChild(section);
});


