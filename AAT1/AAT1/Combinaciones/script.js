function calcularCombinaciones() {
    // Obtener valores de n y k
    const n = parseInt(document.getElementById("n").value);
    const k = parseInt(document.getElementById("k").value);
    
    // Validar valores
    if (isNaN(n) || isNaN(k) || n < 0 || k < 0) {
        document.getElementById("resultado").innerHTML = "Por favor, introduce valores numéricos no negativos.";
        return;
    }
    if (k > n) {
        document.getElementById("resultado").innerHTML = "Error: k no puede ser mayor que n.";
        return;
    }
    
    // Calcular combinaciones
    const resultado = calcularFactorial(n) / (calcularFactorial(k) * calcularFactorial(n - k));
    
    // Mostrar resultado
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
    
    // Generar fórmula LaTeX
    const formula = `C(${n},${k}) = \\frac{${n}!}{${k}!(${n}-${k})!} = ${resultado}`;
    document.getElementById("formula").innerHTML = `$$${formula}$$`;
    
    // Renderizar fórmula con MathJax
    MathJax.typesetPromise();
}

function calcularFactorial(num) {
    if (num <= 1) return 1;
    return num * calcularFactorial(num - 1);
}