const { setTimeout } = require("timers/promises")

//Task 1
function userprofile(name) {
    console.log("Hello " + name)
    
}userprofile("Poongodi")

//Task 2
let double = (num) => num*2
console.log(double(2))

//Task 3
let anonymous = function () {
    console.log("This message is delayed by 2 seconds")
}
setTimeout(anonymous, 2000)

//Task 4
function getUserData(params) {
    setTimeout(() => {
        console.log("Call Back Function")
        
    }, 2000);
    
}