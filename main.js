function createSnow(){
    const snow = document.createElement('div');
    snow.classList.add('snow'); 
    snow.style.left = Math.random()*100+'vh';
    snow.style.animationDuration = Math.random()+2+3+'s';
    snow.innerText = '❄'
    document.body.appendChild(snow)
}
setInterval(createSnow, 1000)

//gsap

const tl = gsap.timeline({default:{duration:.75}});
tl.fromTo(".text",{scale:0},{scale:1,ease:"elastic.out(1,0,3",duration:1});
tl.fromTo(".title", {y:100, opacity:0}, {y:0, opacity:1});
tl.fromTo(".subtitle",{x:100, opacity:0},{x:0,opacity:1},"<");
tl.fromTo(".logo-tree",{opacity:0,y:100},{opacity:1,y:0});
tl.fromTo(".logo-tree",{y:0},{y:-10,repeat:-1, yoyo:true});
//tl.fromTo(".topping",{rotation:"-2deg"},{rotation:"2deg",repeat:-1,yoyo:true},"<")

//audio

window.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento de audio
    const audio = document.getElementById("audio");
    
    // Reproducir el audio cuando la página se cargue
    audio.play(); 

});
