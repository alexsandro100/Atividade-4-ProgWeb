let cont = 1
let margem_esquerda = 0
let margem_superior = 0

const imagens = ['chara-1.png', 'chara-2.png', 'chara-3.png']

setInterval(function(){
    urso = document.getElementById('urso')
    urso.src = imagens[cont]
    urso.style.marginLeft = margem_esquerda+'%'
    urso.style.marginTop = (margem_superior)+'%'
    margem_esquerda+=1
    cont++
    if(margem_esquerda === 100){
        margem_esquerda = -5
        margem_superior+=5  
    }
    if(margem_superior === 45){
        margem_superior = 0
    }
    if(cont > 2) {
		cont = 0
	}
}, 70)