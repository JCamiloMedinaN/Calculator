class Display{
    constructor(pantallaValorAnterior, pantallaValorActual){
        this.pantallaValorActual = pantallaValorActual
        this.pantallaValorAnterior = pantallaValorAnterior
        this.calculadora = new Calculadora()
        this.tipoOperacion = undefined
        this.valorActual = ''
        this.valorAnterior = ''
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: '*',
            restar: '-'
        }
    }

    delete(){
        this.valorActual = this.valorActual.toString().slice(0,-1)
        this.imprimirValores()
    }

    deleteAll(){
        this.valorActual = ''
        this.valorAnterior = ''
        this.tipoOperacion = undefined
        this.imprimirValores()
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular()
        this.tipoOperacion = tipo
        this.valorAnterior = this.valorActual || this.valorAnterior
        this.valorActual = ''
        this.imprimirValores()
    }
    addNumbers(numero){
        if(numero === '.' && this.valorActual.includes('.'))return
        this.valorActual = this.valorActual.toString() + numero.toString()
        this.imprimirValores()
    }

    imprimirValores(){
        this.pantallaValorActual.textContent = this.valorActual
        this.pantallaValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)

        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual)
    }
}