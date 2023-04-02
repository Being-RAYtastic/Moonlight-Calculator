const firebaseConfig = {

    apiKey: "AIzaSyCyiXQNczRyfO03rUBEe_t6CMtnC1EhCPE",

    authDomain: "moonlight-calculator.firebaseapp.com",

    databaseURL: "https://moonlight-calculator-default-rtdb.firebaseio.com",

    projectId: "moonlight-calculator",

    storageBucket: "moonlight-calculator.appspot.com",

    messagingSenderId: "232110604220",

    appId: "1:232110604220:web:9ab0af524ba767ac4535b9",

    measurementId: "G-MCM76233WH"

};

// initialize database
const app = firebase.initializeApp(firebaseConfig)

// reference database
const moonlightCalculatorDB = firebase.database().ref("moonlight-calculator")

const saveNames = (yourNameVal, otherNameVal, percentageVal) => {
    let newNameForm = moonlightCalculatorDB.push()
    
    newNameForm.set({
        name1: yourNameVal,
        name2: otherNameVal,
        percentage: percentageVal + "%",
        datetime: getDate_and_Time(),
    })
}

function getDate_and_Time() {
    let currentdate = new Date()
    
    let date = currentdate.getDate()
    let month = currentdate.getMonth() + 1
    let year = currentdate.getFullYear()

    let hour = currentdate.getHours()
    let minutes = currentdate.getMinutes()
    let seconds = currentdate.getSeconds()
    let milliseconds = currentdate.getMilliseconds()

    let datetime = `${date}/${month}/${year} @ ${hour}:${minutes}:${seconds} :${milliseconds}`
    
    return datetime
}