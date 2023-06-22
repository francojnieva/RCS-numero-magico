const btnStart = document.getElementById("btnStart")
const btnSend = document.getElementById("btnSend")
const numberAdd = document.getElementById("numberAdd")
const alerts = document.getElementById("alerts")

btnStart.addEventListener("click", () => {
    btnStart.classList.add("disabled")
    btnStart.innerText = "En juego..."
    const numRamdom = Math.floor(Math.random()*100)+1

    btnSend.addEventListener("click", () => {
        
        if (numRamdom == numberAdd.value) {
           return alerts.innerHTML = `<div class="alert alert-success text-center" role="alert">
           ¡Felicidades, adivinaste el Número Mágico!
        </div>`
        } 

        if (numRamdom !== numberAdd.value && numRamdom > numberAdd.value) {
            return alerts.innerHTML = `<div class="alert alert-warning text-center" role="alert">
            No adivinaste. <br> Pista: El Número Mágico es mayor. 
            </div>`
        } 

        if (numRamdom !== numberAdd.value && numRamdom < numberAdd.value) {
            return alerts.innerHTML = `<div class="alert alert-warning text-center" role="alert">
            No adivinaste. <br> Pista: El Número Mágico es menor. 
            </div>`
        } 
    })
})