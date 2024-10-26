function calculateMCD() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent =
      "Por favor, ingrese ambos números.";
    return;
  }
  let a = Math.abs(num1);
  let b = Math.abs(num2);
  while (b) {
    [a, b] = [b, a % b];
  }
  document.getElementById("result").textContent = `El MCD es: ${a}`;
}

