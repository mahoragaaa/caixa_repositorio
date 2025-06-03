const itens = document.getElementById("lista_itens")

let q = {}
q.quantidade = 0;

function adicionar(item) {
    const qt = q()

    if(itens.innerHTML.includes(item.name)) {
        qt.quantidade++
    } else { itens.innerHTML +=  "<tr>" +
                                "<td>" + item.name + "</td>" +
                                "<td>" + item.value + "</td>" +
                                "<td>" + qt.quantidade + "</td>" +
                                "<td>" + (item.value * qt.quantidade) + "</td>" +
                            "</tr>"
    }

    console.log(itens)
}

