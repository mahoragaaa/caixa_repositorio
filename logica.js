const itens = document.getElementById("lista_itens")

function atualizarTotal() {
    let qtJogos = document.querySelectorAll(".jogo")

    for(let i = 0; i < qtJogos.length; i++) {
        const ExibirTotal = document.getElementById("valorTotal")

        qtJogos[i].lastChild.textContent = qtJogos[i].children[1].textContent * qtJogos[i].children[2].firstChild.value

        let total  = 0
        total = total + parseFloat(qtJogos[i].children[1].textContent)

        console.log(qtJogos[i].lastChild.textContent) //Total
        console.log(qtJogos[i].children[1].textContent) //Valor do jogo
        console.log(qtJogos[i].children[2].firstChild.value)  //Quantidade especificada

        ExibirTotal.textContent = "Valor: " + total
    }

    //setTimeout(atualizarTotal,1000)
}

function adicionar(item) {
    if(itens.innerHTML.includes(item.name)) {
        console.log("jogo já incluido")
        atualizarTotal()
    } else { itens.innerHTML +=  "<tr class='jogo'>" +
                                "<td>" + item.name + "</td>" +
                                "<td>" + item.value + "</td>" +
                                "<td><input type='text' value='1' id="+item.parentElement.id+"></input></td>" +
                                "<td>"+ item.value +"</td>" +
                            "</tr>"
    }

    //console.log(document.getElementById(item.parentElement.id).parentElement.parentElement.lastChild)
    //console.log(itens)
}