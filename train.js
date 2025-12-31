const { text } = require("express");


function countNumbers(element) {
  let count = 0;

  for (let i = 0; i < element.length; i++) {
    if (element[i] >= "0" && element[i] <= "9") {
      count++;
    }
  }

  return count;
}

console.log(countNumbers("xA9kP3mZ7qL2eR0T"));



// TASK A

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi


// masalani yechimi:

// function countLetter(letter, word) {
//     let count = 0;

//     for (let ele = 0; ele < word.length; ele++) {
//         if (word[ele]=== letter) {
//             count++;
//         }
//     }
//    return count; 
// }
// console.log(countLetter ("s", "discussion"));



// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo`ling", // 0-20
//     "to`g`ri boshliq tanglang va ko`proq hato qiling", // 20-30
//     "o`zingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bo`lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling , foydasi yoq endi", // 60
// ];

// CALLBACK FUNCTIONS

// function maslahatBering(a, callback ) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback (null, list [0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else{
//         setTimeout(function(){
//              callback(null, list[5]);

//         }, 5000);
       
//     }
// }

// maslahatBering (22, (err, data) =>{
//     if(err) console.log(`ERROR:`, err);
//     console.log(`answer:`, data);
// })

// console.log(`passsed here 0`);
// maslahatBering (65, (err, data) =>{
//     if(err) console.log(`ERROR:`, err);
//     else {
//         console.log(`answer:`, data);
  
//     }
    
// });
// console.log(`passsed here 1`);

// console.log("========================================");

// ASYNCHRONOUS

// async function maslahatBering(a) {
// function maslahatBering(a, callback) {
   
// if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if(a > 20 && a <=30) return list[1];
//     else if(a > 30 && a <=40) return list[2];
//     else if(a > 40 && a <=50) return list[3];
//     else if(a > 50 && a <=60) return list[4];

//     else {
      //  return list [5];
     
     
      // async setTimeout:

    //   return new Promise((resolve, reject ) => {
    //     setTimeout(() => {
    //         resolve(list[5]);
    //     }, 5000);
    //   });

    // callback/ setInterval:
//     setInterval(function() {
//         callback(null, list[5]);
//     }, 1000); 
//  }
// } 

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//     if (err) console.log("ERROR:", err );
//     else {
//         console.log(data);
//     }
// });
// console.log("Passed here 1");


//console.log("==========================");

// then/catch
    
// console.log("passed here o");
// maslahatBering(25)
// .then((data) => {
//     console.log("answer:", data);
// })
// .catch((err) =>{
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");


// console.log("===========================");

// async/await: 

// async function run() {
//     let answer = await maslahatBering(25);
//     console.log(answer);

//     answer = await maslahatBering(70);
//     console.log(answer);

//     answer = await maslahatBering(41);
//     console.log(answer);
// }
// run ();
