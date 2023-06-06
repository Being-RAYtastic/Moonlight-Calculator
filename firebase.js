const firebaseConfig = {

    apiKey: FIREBASE_API_KEY,

    authDomain: FIREBASE_AUTH_DOMAIN,

    databaseURL: FIREBASE_DATABASE_URL,

    projectId: FIREBASE_PROJECT_ID,

    storageBucket: FIREBASE_STORAGE_BUCKET,

    messagingSenderId: MESSAGING_SENDER_ID,

    appId: FIREBASE_APP_ID,

    measurementId: MEASUREMENT_ID

};

// initialize database
const app = firebase.initializeApp(firebaseConfig)

// reference database
const moonlightCalculatorDB = firebase.database().ref(firebaseConfig.projectId)

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
