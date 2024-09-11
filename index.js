//    ***********  Problem 1 complete *********

// function calculateTax(income, expenses) {
//     if(income < 0 || expenses < 0 || expenses > income){
//         return 'Invalid Input'
//     }
//     let result = income - expenses;
//     let total = result * 0.2;
//     return total;
// }

// console.log(calculateTax(10000, 3000))
// console.log(calculateTax(34000, 1753))
// console.log(calculateTax(5000, 1500))
// console.log(calculateTax(7000, 7000))
// console.log(calculateTax(-5000, 2000))
// console.log(calculateTax(6000, -1500))

//     **********  Problem 2  complete **************

// function sendNotification(email) {
//     if(email.includes('@') === false){
//         return 'Invalid Email'
//     }
//     let atRate = email.split('@');
//     let userName = atRate[0]
//     let domainName = atRate[1]
//     let output = userName + ' sent you an email from ' + domainName;
//     return output;
// }
// console.log(sendNotification('zihad@gmail.com'))
// console.log(sendNotification('farhan34@yahoo.com'))
// console.log(sendNotification('nadim.naem5@outlook.com'))
// console.log(sendNotification('fahim234.hotmail.com'))
// console.log(sendNotification('sadia8icloud.com'))

//     *******  Problem  3 complete *******

// function checkDigitsInName(name){
//     if (typeof name !== 'string') {
//         return 'Invalid Input';
//     }
//     for(let i = 0; i < name.length; i++){
//         let result = name[i]
//         if(!isNaN(result)){
//             return true;
//         }
//     }
//     return false
// }
    
// console.log(checkDigitsInName('Raj123'))
// console.log(checkDigitsInName('n9ayeem'))
// console.log(checkDigitsInName('e1mu3'))
// console.log(checkDigitsInName('Suman'))
// console.log(checkDigitsInName('Name2024'))
// console.log(checkDigitsInName('!@#'))
// console.log(checkDigitsInName(["Raj"]))

//    ********  Problem 4  complete **********

// function calculateFinalScore(obj){
//     if(typeof obj !== 'object'){
//         return 'Invalid Input'
//     }
//     let total = obj.testScore + obj.schoolGrade;
//    if(obj.isFFamily){
//     total += 20;
//    }
//     if(total >= 80){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }))
// console.log(calculateFinalScore("hello"))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }))

//     *********  Problem 5 complete **********

// function  waitingTime(waitingTimes, serialNumber) {
//     if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
//         return 'Invalid Input';
//     }
//     let sum = 0;
//     for(let i = 0; i < waitingTimes.length; i++){
//         sum += waitingTimes[i]
//     }
//     let avarage = sum / waitingTimes.length;
//     let roundAvarage = Math.round(avarage);
//     let serial = serialNumber - 1;
//     let total = serial - waitingTimes.length
//     return total * roundAvarage;
    
// }

// console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10))
// console.log(waitingTime([13, 2], 6))
// console.log(waitingTime([13, 2, 6, 7, 10], 6))
// console.log(waitingTime([6], 4))
// console.log(waitingTime(7, 10))
// console.log(waitingTime("[6,2]", 9))
// console.log(waitingTime([7, 8, 3, 4, 5], "9"))