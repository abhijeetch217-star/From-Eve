// PAGE SWITCH
function next(n){
document.getElementById("p"+n).classList.remove("active");
document.getElementById("p"+(n+1)).classList.add("active");
}

function prev(n){
document.getElementById("p"+n).classList.remove("active");
document.getElementById("p"+(n-1)).classList.add("active");
}

// BACKGROUND HEART FLOAT
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for(let i=0;i<40;i++){
hearts.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:6+Math.random()*4,
speed:0.5+Math.random()
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(255,100,150,0.6)";

hearts.forEach(h=>{
ctx.beginPath();
ctx.arc(h.x,h.y,h.size,0,Math.PI*2);
ctx.fill();

h.y -= h.speed;

if(h.y<0){
h.y=canvas.height;
h.x=Math.random()*canvas.width;
}
});

requestAnimationFrame(draw);
}

draw();

// HEART RAIN (LAST BUTTON)
function heartRain(){

for(let i=0;i<60;i++){

let heart=document.createElement("div");
heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-50px";
heart.style.fontSize="22px";
heart.style.zIndex="999";

document.body.appendChild(heart);

let fall=setInterval(()=>{
heart.style.top=parseInt(heart.style.top)+4+"px";

if(parseInt(heart.style.top)>window.innerHeight){
heart.remove();
clearInterval(fall);
}
},20);

}

}
