const lampada1 = document.getElementById('lampada1')

lampada1.addEventListener('click', () => {
    if(lampada1.src.match ("lampada.jpg")){
        lampada1.src = 'lampada-on.jpg'
    }
    else{
        lampada1.src = 'lampada.jpg'
    }
})

const lampada2 = document.getElementById('lampada2')

lampada2.addEventListener('mouseover', () =>{
    lampada2.src = 'lampada-on.jpg'
})

lampada2.addEventListener('mouseout', () =>{
    lampada2.src = 'lampada.jpg'
})