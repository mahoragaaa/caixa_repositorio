const itens = document.getElementById("lista_itens")

function atualizarTotal() {
    let qtJogos = document.querySelectorAll(".jogo")

    let total  = 0
    for(let i = 0; i < qtJogos.length; i++) {
        const ExibirTotal = document.getElementById("valorTotal")
		
        qtJogos[i].children[3].textContent = qtJogos[i].children[1].textContent * qtJogos[i].children[2].firstChild.value

        total = total + parseFloat(qtJogos[i].children[3].textContent)

        ExibirTotal.textContent = "Valor: " + total.toFixed(2)
    }

    setTimeout(atualizarTotal,1000)
}

function excluirItem(item) {
	const jogoSelecionado = item.parentElement.parentElement
	
	jogoSelecionado.remove()
}

function adicionar(item) {
    if(itens.innerHTML.includes(item.name)) {
	document.getElementById(item.parentElement.id).value =  parseInt(document.getElementById(item.parentElement.id).value) + 1
	console.log(parseInt(document.getElementById(item.parentElement.id).value))
        atualizarTotal()
    } else { 
	    const tablerow = document.createElement("tr")
	    tablerow.className = "jogo"
	    const nameTD = document.createElement("td")
	    const nameText = document.createTextNode(item.name)
	    nameTD.appendChild(nameText)
	    const valueTD = document.createElement("td")
	    const valueText = document.createTextNode(item.value)
	    valueTD.appendChild(valueText)
	    const inputTD = document.createElement("td")
	    const input =  document.createElement("input")
	    input.type = "number"
	    input.value = "1"
		input.min = "1"
	    input.id = item.parentElement.id
	    inputTD.appendChild(input)
	    const totalTD = document.createElement("td")
	    const total = document.createTextNode(item.value)
	    totalTD.appendChild(total)
		const excluirTD = document.createElement("td")
		const excluir = document.createElement("button")
		const excluirText = document.createTextNode("Excluir")
		excluir.onclick = function() {excluirItem(this)}
		excluir.appendChild(excluirText)
		excluir.className = "excluir"
		excluirTD.appendChild(excluir)

	    tablerow.appendChild(nameTD)
	    tablerow.appendChild(valueTD)
	    tablerow.appendChild(inputTD)
	    tablerow.appendChild(totalTD)
		tablerow.appendChild(excluirTD)
	    itens.appendChild(tablerow)
    }
}