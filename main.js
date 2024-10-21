onload = () =>{
    document.body.classList.remove("container");
};

const body = document.querySelector("body");

body.addEventListener("mousemove",(event)=>{
    console.log("moved");
    const Xposition = event.offsetX;
    const yposition = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = Xposition + "px";
    spanEl.style.top = yposition + "px";

    const size = Math.random() *100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    body.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);


})