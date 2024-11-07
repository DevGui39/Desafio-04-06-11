function carro (Nome, tipo, cor, preço) {

    this.Nome = Nome    
    this.tipo = tipo
    this.cor = cor  
    this.preço = preço

}


let Camaro = new carro ("camaro", "esportivo", "amarelo", 1500000)

for (const propriedades in Camaro) {

    console.log(`${propriedades} : ${Camaro[propriedades]}`)

}