class tip {
    constructor(quality, total) {
        this.quality = quality;
        this.total = total
    }

    calc_porcentagem(porcentagem) {
        let retornoValor = 0
        return retornoValor = (this.total * porcentagem) / 100
    }

    calc_tip() {
        if (this.quality === 'Good') {
            return this.calc_porcentagem(20)
        }
        if (this.quality === 'Regular') {
            return this.calc_porcentagem(10)
        }
        if (this.quality === 'Bad') {
            return this.calc_porcentagem(5)
        }
    }
}



document.addEventListener('click', el => {
    if(el.target.classList.contains('calculate_tip')){
        el.preventDefault()
        const valorTotal = document.getElementById('valorTotal').value;
        const qualidadeServ = document.querySelector('input[name="service_quality"]:checked');
    
        if (valorTotal === "") {
           return
        }
        else if (!qualidadeServ) {
            return
        }
        else {
            const valorGorjeta = new tip(qualidadeServ.value, valorTotal)
            const p = document.createElement('p')
            p.classList.add('valorResultado')
            const valorResultado = document.querySelector('.valorResultado')
            if(valorResultado){
                valorResultado.remove()
            }
            const resultadoGorjeta = document.querySelector('.resultado_gorjeta')
            p.innerText = valorGorjeta.calc_tip()
            resultadoGorjeta.appendChild(p)
        }
    
    
    }
   

})