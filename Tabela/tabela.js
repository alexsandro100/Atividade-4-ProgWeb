function adicionarLinha() {
    let linhas = document.getElementById('quantidade').value
    
    for(let i = 1; i <= linhas; i++) {
        let nova_linha = table.insertRow(table.length)
        cell1 = nova_linha.insertCell(0)
        cell2 = nova_linha.insertCell(1)
        cell3 = nova_linha.insertCell(2)
        cell4 = nova_linha.insertCell(3)
        time = 'Time ' + Math.floor(Math.random() * 100)
        jogos = Math.floor(Math.random() * 100)
        pontos = Math.floor(Math.random() * 100)
        remover = document.getElementById('remover').value

        cell1.innerHTML = time
        cell2.innerHTML = jogos
        cell3.innerHTML = pontos
        cell4.innerHTML = `<button onClick="this.parentNode.parentNode.remove();">X</button>`
    }
}