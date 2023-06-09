const yourName = document.querySelector('#yourName')
const otherName = document.querySelector('#otherName')

const percent_el = document.querySelector('#percent')
const calc_button = document.querySelector('#calc_button')
const status_el = document.querySelector('#status')


let width = 0   // progress of the bar 

// Functionality of the Calculate Button
function calculate() {
    const yourName_value = yourName.value.toUpperCase() 
    const otherName_value = otherName.value.toUpperCase()

    if (!yourName_value == "" && !otherName_value == "" && yourName_value != otherName_value) {
        width = Math.floor(Math.random() * 101)     // Just generates a random number between 0 and 100
        
        // Sets the Random Number as Percentage
        percent_el.style.width = width + "%"        
        percent_el.innerHTML = width  + "%"

        result_review()    // Changes the status element according to percentage

        //console.log(yourName_value, otherName_value)
        saveNames(yourName_value, otherName_value, width)   // Save the names in the Firebase Database
    }


}

// Function of the Status Element
function result_review(){
    if(width == 100) status_el.innerHTML = 'Looks like you are Lucky'
    else if (width >= 60 && width < 100) status_el.innerHTML = 'Pretty Good Chances'
    else if (width >= 50 && width < 60) status_el.innerHTML = 'It is either yes or no'
    else if (width >= 25 && width < 50) status_el.innerHTML = 'Low Chances'
    else if (width >= 0 && width < 25) status_el.innerHTML = 'Unlucky, looks like you have no chance at all'
}

// Clears the progress bar 
function clearBar() {
    percent_el.style.width = 0
    percent_el.innerHTML = ""
    status_el.innerHTML = ""
}



