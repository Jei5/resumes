// Obtener el botón y lo que contiene del apartado SOBRE MI
let Boton_Con = document.getElementById("Boton_Contacto");
let Texto_Con = document.getElementById("Contenedor_Contacto");

// Cambiar el estado del cuadro y el texto del botón al hacer clic
Boton_Con.onclick = function() {
    if (Texto_Con.style.display === "none") {
        Texto_Con.style.display = "block";
    } else {
        Texto_Con.style.display = "none";
    }
};


// Obtener el botón y lo que contiene del apartado SOBRE MI
let Boton_Ref = document.getElementById("Boton_Referencias");
let Texto_Ref = document.getElementById("Contenedor_Referencias");

// Cambiar el estado del cuadro y el texto del botón al hacer clic
Boton_Ref.onclick = function() {
    if (Texto_Ref.style.display === "none") {
        Texto_Ref.style.display = "block";
    } else {
        Texto_Ref.style.display = "none";
    }
};

// Obtener el botón y lo que contiene del apartado SOBRE MI
let Boton_Idi = document.getElementById("Boton_Idioma");
let Texto_Idi = document.getElementById("Contenedor_Idioma");

// Cambiar el estado del cuadro y el texto del botón al hacer clic
Boton_Idi.onclick = function() {
    if (Texto_Idi.style.display === "none") {
        Texto_Idi.style.display = "flex";
    } else {
        Texto_Idi.style.display = "none";
    }
};