console.log("Enlazado correctamente")

let boton = document.querySelector("#tema");
let body = document.querySelector("body");
let modoDark = false;
boton.addEventListener("click",()=>{
    if(modoDark == false){
        modoDark = true
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }else{
    modoDark = false;
    body.style.backgroundColor = "white";}
})
