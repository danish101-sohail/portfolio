function togglemenu(){
    const menu =document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
  
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Full Stack Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Software Engineer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Web Designer";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);