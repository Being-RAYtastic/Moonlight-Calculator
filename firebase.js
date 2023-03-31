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
    var newNameForm = moonlightCalculatorDB.push()
    
    newNameForm.set({
        name1: yourNameVal,
        name2: otherNameVal,
        percentage: percentageVal + "%",
    })
}