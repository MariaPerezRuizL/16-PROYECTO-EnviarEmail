//Variables

const btnSend=document.getElementById("enviar")

//eventListeners

eventListeners();
function eventListeners(){
    //Add de load of main app
    document.addEventListener('DOMContentLoaded', initializeApp);

}

//Functions

function initializeApp(){
    console.log("App initializating...");
    btnSend.disabled=true;
    btnSend.classList.add("cursor-not-allowed", "opacity-50"); // Clases de tailwind
}