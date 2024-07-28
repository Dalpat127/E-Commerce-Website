const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("Sticky",this.window.scroll>0);
})
let menu=document.querySelector('#header-center');
let navmenu=document.querySelector('#header-right');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}