//G-TASK

function getHighestIndex(arr) {

    let max = arr[0];
    let maxIndex = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {

            max = arr[i];
            maxIndex = i;

        }
    }

    return maxIndex;
}

console.log(getHighestIndex([5, 212, 122, 21, 8]));






//F-TASK 

// function findDoublers (a) {
//     let seen = "";
//     for (let i =0;
//     i < a.length; i++) {
//     let letter = a[i];
//     if (seen.includes(letter)) {
//         return true;
//     }
//     seen += letter;
//     }
//     return false;
// }

// console.log(findDoublers("hello"));





// //E-TASK 

// function getReverse ( a ) {

//     const reversedStr = a.split("").reverse().join("")
//     return reversedStr;
// }

// console.log(getReverse ("hello"));




//D-TASK 

// function checkContent(a,b) {

//     if (a.length !== b.length) {
//     return false;
//     }
//     let aArr = a.split("");
//     let bArr = b.split("");

//     aArr.sort();
//     bArr.sort();

//     let newA = aArr.join("");
//     let newB = bArr.join("");

//     return newA === newB;
// }


// console.log(checkContent ("mitgroup","gmtiprou"));









//c-TASK

// class Shop{
//     #non;
//     #lagmon;
//     #cola;

//     constructor(non, lagmon, cola){
//         this.#non = non;
//         this.#lagmon = lagmon;
//         this.#cola = cola;
//     }

//     time(){
//         return moment().format("HH:mm:");
//     }

//     qoldiq(){
//         console.log(`Hozir ${this.time()}'da ${this.#non}ta non, ${this.#lagmon}ta lag'mon va ${this.#cola}ta cola mavjud`);
//     }

//     sotish(name, number){
//     if(name === "non"){
//         this.#non -= number;
//     }else if(name === "lagmon"){
//         this.#lagmon -= number;
//     }else if(name === "cola"){
//         this.#cola -= number;
//     }else return console.log("Bunaqa mahsulot hozircha sotilmaydi!")
    
//     console.log(`${name} ${number} dona sotildi`);
    
// }

//     qabul(name, number){
//     if(name === "non"){
//         this.#non += number;
//     }else if(name === "lagmon"){
//         this.#lagmon += number;
//     }else if(name === "cola"){
//         this.#cola += number;
//     }else return console.log("Bu mahsulot Qabul qilinmaydi!")
    

//     console.log(`${name} ${number} dona qabul qilindi`);
//     };
// }


// const shop = new Shop(2, 10, 7)

// s1.qoldiq();
// s1.sotish("non", 1);
// s1.sotish("cola", 5);
// s1.qabul("lagmon", 25);
// s1.qoldiq();






//b-TASK

// 


//A-TASK

// let count = 0;
// function number(word, letter){
// for(let i = 0; i <= word.length; i++ ) {
//     if(word[i] === letter) {
//         count++;
//     }
// }
// return count;
// }
// console.log(number("engineer", "e"));






// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxsh talaba bo'ling", //0-20
//     "togri boshliq tanlang va koproq xato qiling", //20-30
//     "uzingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga invistitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq endi", //60
// ];

// //COLLBACK fungtion
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a nomber", null);
//     else if(a <= 20) callback(null,list[0]);
//     else if(a >20 && a <=30) callback(null, list[1])
//     else if(a >30 && a <=40) callback(null, list[2])
//     else if(a >40 && a <=50) callback(null, list[3])
//     else if(a >50 && a <=60) callback(null, list[4])
//     else {
//      setTimeout(function () {
//         callback(null, list[5]);
//       }, 3000)
    
//     }
// }


// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR', err);
//     else{
//     console.log('javob:', data);
//     }
// });
// console.log("passed here 1");


//ASYNC fungtion
// async function maslahatBering(a) {
//     if(typeof a !== 'number')throw new Error("insert a nomber");
//     else if(a <= 20) return list[0];
//     else if(a >20 && a <=30) return list[1];
//     else if(a >30 && a <=40) return list[2];
//     else if(a >40 && a <=50) return list[3];
//     else if(a >50 && a <=60) return list[4];
//     else {
//         // return list[5];
        
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 3000);
//         });
//     }
// }


//call via then/catch
// console.log("passed here 0");
// maslahatBering(35)
// .then((data) => {
//     console.log('javob:', data);
// })
// .catch((err) => {
//     console.log("ERROR:",err);
// });
// console.log("passed here 1");


// call via async/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

 