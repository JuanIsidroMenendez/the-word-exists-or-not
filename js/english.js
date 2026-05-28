export function english(texto) {
    let text = texto.toLowerCase();
    return text.includes("english");

}

//export function english(texto)     Permite que la función pueda usarse desde otros archivos.
//let text= texto.toLowerCase();     Convierte todo en minúsuclas y guarda el resultado en la variable texto
//return text.includes("english")    includes comprueba si un texto contiene otro texto. Según el resultado emitirá true or false.
