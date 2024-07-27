//selecting button!


const input=document.querySelector("#input");
const add=document.querySelector("#add");
const reset=document.querySelector("#reset");
const note=document.querySelector(".note");
const card=document.querySelector(".clear");


//adding event!


var j=1;
add.addEventListener("click",function (){



const div=document.createElement("p");   document.querySelector(".card").append(div);
div.setAttribute("class","clear");


 const element=document.createElement("p");   document.querySelector(".clear").append(element);
   

   element.setAttribute("class","note")
    element.innerText=j+"/"+input.value;
    input.value="";
    j++;
    
    
    
})


//reseting all

reset.addEventListener("click",function (){
    document.querySelector(".clear").remove();
    j=1;
});