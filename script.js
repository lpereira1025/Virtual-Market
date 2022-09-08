let products = [
    {
        id: 1,
        descricao: 'Uva Crimson',
        preco: 44.99
    },
    {
        id: 2,
        descricao: 'Vinho Canção',
        preco: 17.98
    },
    {
        id: 3,
        descricao: 'Água de coco',
        preco: 8.99
    },
    {
        id: 4,
        descricao: 'Mamão',
        preco: 9.98
    },
    {
        id: 5,
        descricao: 'Água Tônica',
        preco: 17.98
    }
    ]
    
    
    const body = document.querySelector('body')
    
    let main = document.createElement('main')
    body.appendChild(main)
    
    let titulo = document.createElement('h1')
    main.appendChild(titulo)
    titulo.innerText = 'Virtual Market'
    titulo.className = 'titulo'
    
    
    let itens = document.createElement('div')
    main.appendChild(itens)
    itens.className = 'Superior'
    
    let item = document.createElement('p')
    itens.appendChild(item)
    item.innerText = 'Item'
    
    let valor = document.createElement('p')
    itens.appendChild(valor)
    valor.innerText = 'Valor'
    
    let lista = document.createElement('ul')
    main.appendChild(lista)
    
    lista.className = 'lista'
    
    let result = 0
    
    for(let i = 0; i < products.length; i++){
       
        let lista2 = document.createElement('li')
        let descricao = document.createElement('p')
        let preco = document.createElement('span')
        lista2.className = 'classe'
        result = result + products[i].preco
            
        descricao.innerText = products[i].descricao
        preco.innerText = `R$ ${products[i].preco.toString().replace('.',',')}`
    
        lista2.append(descricao, preco)
    
        lista.appendChild(lista2)
    }
    
    
    let feito = result.toString().replace('.', ',')
    
    
    let secao = document.createElement('section')
    main.appendChild(secao)
    
    let div = document.createElement('div')
    secao.appendChild(div)
    
    let total = document.createElement('p')
    let totalPreco = document.createElement('p')
    
    total.innerText = `Total`
    totalPreco.innerText = `R$ ${feito}`
    div.append(total, totalPreco)
    div.className = 'Resultado'
    
    let botaoDiv = document.createElement('div')
    secao.appendChild(botaoDiv)
    
    let botao = document.createElement('button')
    botaoDiv.appendChild(botao)
    
    botaoDiv.className = 'Botao'
    botao.appendChild(document.createTextNode('Finalizar compra'))