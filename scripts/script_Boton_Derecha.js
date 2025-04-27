// Obtener el botón y lo que contiene del apartado SOBRE MI
let Boton_Mi = document.getElementById("Boton_Sobre_Mi");
let Texto_Mi = document.getElementById("Contenedor_Sobre_Mi");

// Cambiar el estado del cuadro y el texto del botón al hacer clic
Boton_Mi.onclick = function() {
    if (Texto_Mi.style.display === "none") {
        Texto_Mi.style.display = "block";
        Boton_Mi.textContent = "‒";
    } else {
        Texto_Mi.style.display = "none";
        Boton_Mi.textContent = "+";
    }
};


// Obtener el botón y lo que contiene del apartado EXPERIENCIA
let Boton_Exp = document.getElementById("Boton_Experiencia");
let Texto_Exp = document.getElementById("Contenedor_Experiencia");

// Cambiar el estado del cuadro y el texto del botón al hacer clic
Boton_Exp.onclick = function() {
    if (Texto_Exp.style.display === "none") {
        Texto_Exp.style.display = "block";
        Boton_Exp.textContent = "‒";
    } else {
        Texto_Exp.style.display = "none";
        Boton_Exp.textContent = "+";
    }
};


// Obtener el botón y lo que contiene del apartado EXPERIENCIA
let Boton_Edu = document.getElementById("Boton_Educacion");
let Texto_Edu = document.getElementById("Contenedor_Educacion");

// Cambiar el estado del cuadro y el texto del botón al hacer clic
Boton_Edu.onclick = function() {
    if (Texto_Edu.style.display === "none") {
        Texto_Edu.style.display = "block";
        Boton_Edu.textContent = "‒";
    } else {
        Texto_Edu.style.display = "none";
        Boton_Edu.textContent = "+";
    }
};


// Obtener el botón y lo que contiene del apartado EXPERIENCIA
let Boton_Hab = document.getElementById("Boton_Habilidades");
let Texto_Hab = document.getElementById("Contenedor_Habilidades");

// Cambiar el estado del cuadro y el texto del botón al hacer clic
Boton_Hab.onclick = function() {
    if (Texto_Hab.style.display === "none") {
        Texto_Hab.style.display = "block";
        Boton_Hab.textContent = "‒";
    } else {
        Texto_Hab.style.display = "none";
        Boton_Hab.textContent = "+";
    }
};