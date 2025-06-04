const itens = document.getElementById("lista_itens")

function atualizarTotal() {
    let qtJogos = document.querySelectorAll(".jogo")

    let total  = 0
    for(let i = 0; i < qtJogos.length; i++) {
        const ExibirTotal = document.getElementById("valorTotal")

        qtJogos[i].lastChild.textContent = qtJogos[i].children[1].textContent * qtJogos[i].children[2].firstChild.value

        total = total + parseFloat(qtJogos[i].lastChild.textContent)

        ExibirTotal.textContent = "Valor: " + total.toFixed(2)
    }

    setTimeout(atualizarTotal,1000)
}

function adicionar(item) {
    if(itens.innerHTML.includes(item.name)) {
	document.getElementById(item.parentElement.id).value =  parseInt(document.getElementById(item.parentElement.id).value) + 1
	console.log(parseInt(document.getElementById(item.parentElement.id).value))
        atualizarTotal()
    } else { 
	    const tablerow = document.createElement("tr");
	    tablerow.className = "jogo";
	    const nameTD = document.createElement("td");
	    const nameText = document.createTextNode(item.name);
	    nameTD.appendChild(nameText);
	    const valueTD = document.createElement("td");
	    const valueText = document.createTextNode(item.value);
	    valueTD.appendChild(valueText);
	    const inputTD = document.createElement("td");
	    const input =  document.createElement("input");
	    input.type = "text";
	    input.value = "1";
	    input.id = item.parentElement.id
	    inputTD.appendChild(input);
	    const totalTD = document.createElement("td");
	    const total = document.createTextNode(item.value);
	    totalTD.appendChild(total);

	    tablerow.appendChild(nameTD);
	    tablerow.appendChild(valueTD);
	    tablerow.appendChild(inputTD);
	    tablerow.appendChild(totalTD);
	    itens.appendChild(tablerow);
    }
}
