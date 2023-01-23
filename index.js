const a= new Audio("sound/do-80236.mp3");
const b= new Audio("sound/fa-78409.mp3")
const c= new Audio("sound/mi-80239.mp3")
const d= new Audio("sound/re-78500.mp3")
const e= new Audio("sound/si-80238.mp3")



const playSound=audio=>{
    const clone=audio.cloneNode();
    clone.play();
    setTimeout(()=>(clone.volume=0.8),400)
    setTimeout(()=>(clone.volume=0.6),800)
    setTimeout(()=>(clone.volume=0.4),1200)
    setTimeout(()=>(clone.volume=0.2),1600)
    setTimeout(()=>(clone.volume=0),2000)

}


//a
const aKey=document.querySelector('.a')
const playa=()=>{
    playSound(a);
    aKey.classList.add('active')
    
    setTimeout(()=>aKey.classList.remove('active'),200)
    

}
aKey.addEventListener('click',playa)

//b
const bKey=document.querySelector('.b')
const playb=()=>{
    playSound(b);
    bKey.classList.add('active')
    setTimeout(()=>bKey.classList.remove('active'),200)

}
bKey.addEventListener('click',playb)

//c
const cKey=document.querySelector('.c')
const playc=()=>{
    playSound(c);
    cKey.classList.add('active')
    setTimeout(()=>cKey.classList.remove('active'),200)

}
cKey.addEventListener('click',playc)

//d
const dKey=document.querySelector('.d')
const playd=()=>{
    playSound(d);
    dKey.classList.add('active')
    setTimeout(()=>dKey.classList.remove('active'),200)

}
dKey.addEventListener('click',playd)

//e
const eKey=document.querySelector('.e')
const playe=()=>{
    playSound(e);
    eKey.classList.add('active')
    setTimeout(()=>eKey.classList.remove('active'),200)

}
eKey.addEventListener('click',playe)



window.addEventListener('keydown',(data)=>{
    // console.log(data.key,'key')
    if(data.key==='a') return playa();

    if(data.key==='b') return playb();

    if(data.key==='c') return playc();

    if(data.key==='d') return playd();

    if(data.key==='e') return playe();
})