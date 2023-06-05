const btnStart = document.getElementById("btnStart")
const btnSend = document.getElementById("btnSend")
const numberAdd = document.getElementById("numberAdd")
const alerts = document.getElementById("alerts")

btnStart.addEventListener("click", () => {
    const numRamdom = Math.floor(Math.random()*100)+1

    btnSend.addEventListener("click", () => {
        if (numRamdom == numberAdd.value) {
          alerts.innerHTML = `<div class="alert alert-success text-center" role="alert">
           ¡Felicidades, adivinaste el Número Mágico!
        </div>`
        } else {
            alerts.innerHTML = `<div class="alert alert-warning text-center" role="alert">
            No adivinaste el Número Mágico.
        </div> `
        }
    })
})


