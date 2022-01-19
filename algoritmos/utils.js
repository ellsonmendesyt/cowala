// procurar o fibonacci

let fibo =document.querySelector("[data-video='fibonacci']");
let fiboOldContent = fibo.innerHTML;
let fiboVideo = fibo.querySelector(".video");

fibo.addEventListener('mouseenter', ()=>{
    fibo.innerHTML=`<h1> Video </h1>`;
})
fibo.addEventListener("mouseleave", ()=>{
    fibo.innerHTML=fiboOldContent;
})







