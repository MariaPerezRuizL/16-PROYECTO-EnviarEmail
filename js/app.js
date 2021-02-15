//Variables
const btnSend=document.getElementById("enviar")

//VAriables form 
const email=document.getElementById("email");
const asunto=document.getElementById("asunto");
const message=document.getElementById("mensaje");

//eventListeners - 

eventListeners();
function eventListeners(){
    //Add de load of main app
    document.addEventListener('DOMContentLoaded', initializeApp);

    //Form fields validation
    email.addEventListener('blur', validateForm)
    asunto.addEventListener('blur', validateForm)
    message.addEventListener('blur', validateForm)

}

//Functions

function initializeApp(){
    console.log("App initializating...");
    btnSend.disabled=true;
    btnSend.classList.add("cursor-not-allowed", "opacity-50"); // Clases de tailwind
}

function validateForm(e){
    //console.log("Validando...")
    //obtenemos el valor del elemento sobre el que se ha producido el evento 
    //Blur: se dispara cuando salimos del elemento
    console.log(e.target.value)
    if(e.target.value.length>0){

    }
    else{
        //e.target.style.borderBottomColor='red'; css utilizando js

        //utilizamos tailwind
        e.target.classList.add('border', 'border-red-500');
    }
}