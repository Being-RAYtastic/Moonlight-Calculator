const yourName = document.querySelector('#yourName')
const otherName = document.querySelector('#otherName')


const percent_el = document.querySelector('#percent')
const calc_button = document.querySelector('#calc_button')
const status_el = document.querySelector('#status')


let width = 0
function calculate() {
    const yourName_value = yourName.value.toUpperCase()
    const otherName_value = otherName.value.toUpperCase()

    if (!yourName_value == "" && !otherName_value == "" && yourName_value != otherName_value) {
        if(yourName_value == 'KRISHNA' || yourName_value == 'KRISHNA ' || yourName_value == 'KRISHNA CHAWLA' || yourName_value == 'KRISHNA CHAWLA ' || otherName_value == 'KRISHNA' || otherName_value == 'KRISHNA ' || otherName_value == 'KRISHNA CHAWLA' || otherName_value == 'KRISHNA CHAWLA ') {   
            width = Math.floor(Math.random() * 20)
            percent_el.style.width = width + "%"
            percent_el.innerHTML = width + "%"
        }
        else {
            width = Math.floor(Math.random() * 100)
            //percent_el.innerHTML = randomVal + "%"
            percent_el.style.width = width + "%"
            percent_el.innerHTML = width  + "%"
        }
    }
    if(width == 100) status_el.innerHTML = 'Looks like you are Lucky'
    else if (width >= 60 && width < 100) status_el.innerHTML = 'Pretty Good Chances'
    else if (width == 50 && width < 60) status_el.innerHTML = 'It is either yes or no'
    else if (width >= 25 && width < 50) status_el.innerHTML = 'Low Chances'
    else if (width >= 0 && width < 25) status_el.innerHTML = 'Unlucky, looks like you have no chance at all'

}



function clearBar() {
    percent_el.style.width = 0
    percent_el.innerHTML = ""
}


