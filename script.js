function obtenerIniciales(nombreCompleto) {
    if (typeof nombreCompleto !== 'string' || nombreCompleto.trim() === '') {
        return "Entrada inválida";
    }
    const palabras = nombreCompleto.trim().split(' ').filter(palabra => palabra !== '');

    // Extraemos la primera letra de cada palabra en mayúscula y las unimos
    const iniciales = palabras.map(palabra => palabra[0].toUpperCase()).join('');

    return iniciales;
}

// --- Pruebas por consola ---
console.log("Prueba 1:", obtenerIniciales("ana maria lópez"));          // AML
console.log("Prueba 2:", obtenerIniciales("carlos alberto gomez"));     // CAG
console.log("Prueba 3:", obtenerIniciales("   juan   camilo  ruiz "));  // JCR
console.log("Prueba 4 (vacío):", obtenerIniciales(""));               
console.log("Prueba 5 (tipo no string):", obtenerIniciales(12345));     