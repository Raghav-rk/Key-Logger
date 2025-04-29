const logDiv = document.getElementById("log");
const statediv = document.getElementById("state");
const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");

startbtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown)
    document.addEventListener("keyup",handleUp)
   
})

stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown)
    document.removeEventListener("keyup",handleUp)
    logDiv.textContent = "";
    statediv.textContent ="";
   
    
})

function handleDown(e) {
    logDiv.textContent = `key ${e.key} press down`;
    statediv.textContent = "key is down";
    
}

function handleUp(e) {
    logDiv.textContent = `key ${e.key} press Up`;
    statediv.textContent = "key is Up";
    
}


