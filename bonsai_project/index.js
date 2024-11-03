let monthlyEl = document.getElementById("monthly-el")
let yearlyEl = document.getElementById("yearly-el")
let checkboxEL = document.getElementById("checkbox-el")
let billedELs = document.querySelectorAll(".billed-el")
let sPricingEl = document.querySelector(".spricing-el")
let pPricingEl = document.querySelector(".ppricing-el")
let bPricingEl = document.querySelector(".bpricing-el")
var acc = document.getElementsByClassName("accordion")
var i

monthlyEl.style.color = 'black'
checkboxEL.addEventListener("change", function() {
    if (checkboxEL.checked){
        yearlyEl.style.color = 'black'
        monthlyEl.style.color = 'grey'
        billedELs.forEach(billedEL => billedEL.style.visibility = "visible")
        sPricingEl.textContent = "17€"
        pPricingEl.textContent = "32€"
        bPricingEl.textContent = "52€"
    } else {
        monthlyEl.style.color = 'black'
        yearlyEl.style.color = 'grey'
        billedELs.forEach(billedEL => billedEL.style.visibility = "hidden")
        sPricingEl.textContent = "24€"
        pPricingEl.textContent = "39€"
        bPricingEl.textContent = "79€"
    }
})

for (i=0; i< acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active")

        var panel = this.nextElementSibling
        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }
    })
}