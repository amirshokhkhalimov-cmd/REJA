// TASK (C)


// TASK-C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

// yechim:
class Shop {
  constructor(apple, pienapple, strawberry) {
    this.apple = apple;
    this.pienapple = pienapple;
    this.strawberry = strawberry;
  }

  // vaqt
  getTime() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, "0");
    return `${h}:${m}`;
  }

  // qoldiq
  leftOver() {
    console.log(
      `Now ${this.getTime()} da ${this.apple} apple, ${this.pienapple} pineapple va ${this.strawberry} strawberry mavjud`
    );
  }

  // sotish
  sell(fruit, count) {
    this[fruit] -= count;
    console.log(
      `${this.getTime()} da ${count} ta ${fruit} sotildi`
    );
  }

  // qabul
  get(fruit, count) {
    this[fruit] += count;
    console.log(
      `${this.getTime()} da ${count} ta ${fruit} qabul qilindi`
    );
  }
}
const shop= new Shop(6,2,5);
shop.leftOver();

shop.sell("apple",3);
shop.get("strawberry",2);
shop.leftOver();














//TASK (B)

// const { text } = require("express");


// function countNumbers(element) {
//   let count = 0;

//   for (let i = 0; i < element.length; i++) {
//     if (element[i] >= "0" && element[i] <= "9") {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countNumbers("xA9kP3mZ7qL2eR0T"));



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
