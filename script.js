var container = document.getElementById("container");


function createDivs(kare){
    for(i=0;i<kare**2;i++){
        console.log(i);
        const myDiv =document.createElement("div");
        myDiv.style.backgroundColor="red";
        myDiv.className=("myDivs");
        myDiv.addEventListener("mouseover",()=>{
        myDiv.style.backgroundColor="blue";
    });
    /*
    myDiv.addEventListener("mouseout",()=>{
        myDiv.style.backgroundColor="red";
    })*/
    container.appendChild(myDiv);
}}

function reset(){
    let inputt=document.getElementById("inputt").value;
    if (inputt>70){
        inputt=70;
    }
    inputt=parseInt(inputt);
    console.log(inputt);
    document.querySelectorAll(".myDivs").forEach((e)=>e.parentNode.removeChild(e));
    container.style.gridTemplateColumns="repeat("+inputt+",1fr)";
    container.style.gridTemplateRows="repeat("+inputt+",1fr)";
    createDivs(inputt);
    




}




