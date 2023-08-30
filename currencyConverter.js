const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Mensaje de bienvenida y explicación
console.log("-------------------------------------------");
console.log("Bienvenido al Conversor de Moneda");
console.log("Este programa convierte dólares a euros.");
console.log("-------------------------------------------");

// Capturar la cantidad en dólares
rl.question("Ingresa la cantidad en dólares: ", (dolar) => {
  // Definir la tasa de cambio
  const dolareuro = 0.85; // 1 dólar = 0.85 euros

  // Realizar el cálculo de conversión
  const euros = dolar * dolareuro;

  // Mostrar el resultado
  console.log("-------------------------------------------");
  console.log(`${dolar} dólares son aproximadamente ${euros.toFixed(2)} euros.`);

  rl.close();
});


