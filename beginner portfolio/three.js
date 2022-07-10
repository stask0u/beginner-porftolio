let color=['grey', "#c27453"]
let beat = new Audio('mixkit-soap-bubble-sound-2925.wav');

function square (){
    let section = document.querySelector("body");

    let square = document.createElement('span')
    
    let size=Math.random()* 50;
    
    square.style.width=30+size+"px";
    
    square.style.height=30+size+"px";
    
    square.style.top=Math.random()*innerHeight+"px";
    square.style.left=Math.random()*innerWidth+"px";
    let bg= color[Math.floor(Math.random()*color.length)];
    square.style.background=bg;
    square.style.animation="ani 2s linear infinite";
    section.appendChild(square);

    square.addEventListener('click', e => {
        
        square.remove();
        beat.play(); 
    })
    
    setTimeout(() => {
        square.remove();
    }, 5000);
    
    
}
setInterval(square,100);

