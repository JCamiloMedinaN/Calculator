const pantallaValorAnterior = document.getElementById('valor-anterior')
const pantallaValorActual = document.getElementById('valor-actual')
const buttonsNumbers = document.querySelectorAll('.numero')
const buttonsOperators = document.querySelectorAll('.operador')

const display = new Display(pantallaValorAnterior, pantallaValorActual)
buttonsNumbers.forEach(btn =>{
    btn.addEventListener('click', () => display.addNumbers(btn.innerHTML))
})

buttonsOperators.forEach(btn => {
    btn.addEventListener('click', () => display.computar(btn.value))
})