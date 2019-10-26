function addZero(num) {
    return num < 10 ? `0${num}` : num
}

function adicionarLinha(){
    let qtd_linhas = document.getElementById('quantidade')

    for(let i = 1; i <= qtd_linhas; i++){
        let nova_linha = table.insertRow(table.length),
            cell1 = nova_linha.insertCell(1),
            cell2 = nova_linha.insertCell(2),
            cell3 = nova_linha.insertCell(3),
            cell4 = nova_linha.insertCell(4),
            time = 'time' + addZero(Math.floor(Math.random() * 100)),
            jogos = addZero(Math.floor(Math.random() * 100)),
            pontos = addZero(Math.floor(Math.random() * 100));
            remover = document.getElementById('remover');

        cell1.innerHTML = time;
        cell2.innerHTML = jogos;
        cell3.innerHTML = pontos;
        cell4.innerHTML = `<button onClick="this.parentNode.parentNode.remove();">remover</button>`;
    }
}