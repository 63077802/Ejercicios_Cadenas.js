//*Ejercicio 1: Verificar Edad para Ingresar a una Discoteca

function verificarEdad() {
    let edad = prompt("Ingresa tu edad:");
    edad = parseInt(edad);

    if (isNaN(edad) || edad < 0) {
        console.log("Por favor, ingresa una edad válida.");
    } else if (edad >= 18) {
        console.log("Puedes ingresar a la discoteca.");
    } else {
        console.log("No puedes ingresar a la discoteca.");
    }
}

verificarEdad();

//Ejercicio 2: Clasificación de Calificaciones

function clasificarCalificacion() {
    let calificacion = parseFloat(prompt("Ingresa tu calificación (0-100):"));

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        console.log("Por favor, ingresa una calificación válida entre 0 y 100.");
    } else if (calificacion >= 90) {
        console.log("A");
    } else if (calificacion >= 80) {
        console.log("B");
    } else if (calificacion >= 70) {
        console.log("C");
    } else if (calificacion >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}

clasificarCalificacion();

//Ejercicio 3: Determinar el Día de la Semana

function determinarDia() {
    let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));

    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Por favor, ingresa un número válido del 1 al 7.");
    }
}

determinarDia();

//Ejercicio 4: Evaluación de Números

function evaluarNumero() {
    let numero = parseFloat(prompt("Ingresa un número:"));

    if (isNaN(numero)) {
        console.log("Por favor, ingresa un número válido.");
    } else if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
}

evaluarNumero();