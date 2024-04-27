//****************** Challenge 1 **************************
// let firstName ="zahra ";
// let lastName="mohammadi ";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName+lastName)
//****************** Challenge 2 **************************
//  let birthYear=1994;
//  let nowYear=2024;
// let weeks=Math.floor(((nowYear-birthYear)*365)/7);
// console.log(weeks);
//****************** Challenge 3 ==> (Area of circle) **************************
// function calculateArea( radius ){
//     let area= (((radius)**2)*3.14)
//     console.log("The area of circle with radius "+ radius +" is "+ area)
// }
// calculateArea(2);
//****************** Challenge 4 **************************
// function detectedRole(role){
//     if (role==="ADMIN")return ("The role is ADMIN")
//     if(role === "TEACHER")return("The role is TEACHER")
//     if(role === "MERCHANT")return("The role is MERCHANT")

//     return("The role is udefind !!!")
// }
// console.log(detectedRole("TEACHERs"))
//****************** Challenge 4  by SWICH CASE**************************
// function detectedRole(role){
// switch (role){
//     case "ADMIN":
// return ("The role is ADMIN")
// case "TEACHER":
//     return ("The role is TEACHER")
//     case "MERCHANT":
//         return ("The role is MERCHANT")
//      default:
//         return("The role is udefind !!!")
// }

// }
//  console.log (detectedRole("MERCHANT"))

//****************** Challenge 5 ==>(max number)**************************
// function maxNum(num1,num2){
//     return (num1>num2)?num1:num2;
// }
// console.log(maxNum(-200,20))
//****************** Challenge 6 ==>(fizz Buzz)**************************
// function fizzBuzz(num){
//     if(typeof num !=="number") return console.log("please enter a valid number")
//     if (num%15===0) return console.log("FizzBuzz")
//     if (num%5===0) return console.log("Buzz")
//     if (num%3===0) return console.log("Fizz")
// return console.log("not divisible number")

// }
// fizzBuzz(4)
//****************** Challenge 7 ==>(calculate Discount)**************************
// function calcuateDiscount(totalPrices){
//     const minprice=100;
//     const discountPerPrice=10;
//     const discountStep=3;
//     const maxDiscount=25;
// if(totalPrices<minprice+discountPerPrice)return ("not Discount");

//     let discount= Math.floor((totalPrices-minprice)/10)*discountStep
//     discount= (discount<=maxDiscount?discount:maxDiscount);
//     return ("your discount for shopping is equal :" + discount+"%")

// }
// console.log(calcuateDiscount(800))
//********************************************
// let arr1=[1,2];
// let arr2=[3,4,[5,6,[7]]];
// console.log(...arr1,...arr2)
// const tags=["a","b","c"];
// const newTags =[...tags,"d"  ]
// console.log(newTags)
//*****************************chapter 5=> rest operator in function ***************
// function cslculateTotalPrice(discount,...prices){
// let totalPrices=0;
// for (const price of prices) totalPrices +=price;
// let bill =(1-discount)*totalPrices;
// console.log(bill)
// }
//*****************************chapter 5=> part 7***************
// const roles=["ADMIN","ADMIN","TEACHER","EDITOR","CONTENT-MANAGER"];
// const uniqueRoles=[...new Set(roles)]
// console.log(uniqueRoles)
//***************************** chapter 6 => part 2 ***************
// const calculate = (discount, ...prices) => {
//   let totalPrices = 0;
//   for (const price of prices) totalPrices += price;
//   let bill = (1 - discount) * totalPrices;
//   console.log(bill);
// };
// c  alculate(0.3, 1, 2, 3, 4, 50);
//***************************** chapter 6 => part 4 ***************
// function calculateOfPrices(prices, discount) {
//   let total = 0;
//   for (const items of prices) {
//     total += items;
//   }
//   let bill = (1 - discount) * total;
//   console.log(bill);

// }
// calculateOfPrices([1, 2, 3, 4, 50], 0.3);
//***************************** chapter 6 => part 8 ***************
// let arr1 = [2, 4, 6];
// let add = (arr, num) => {
//   const newArr = [];
//   arr.forEach((element) => {
//     newArr.push(element + num );
//   });
//   console.log(newArr);
// };
// add(arr1, 2);
//***************************** chapter 7 => part 3 ***************
// const string = 'zahRa mohammadi';

// const charPresence = (char) => {
//   const result = string.toLocaleLowerCase().includes(char)
//     ? string.indexOf(char)
//     : 'There is no character with this specification';
//   console.log(result);
// };
// charPresence('moh');
// //*******************the second way
// function searchInString(srting, searchTerm) {
//   const indexOf = string
//     .toLocaleLowerCase()
//     .trim()
//     .indexOf(searchTerm.toLocaleLowerCase().trim());
//   if (indexOf >= 0)
//     return `the first occurance of ${searchTerm} in the string is ${indexOf}`;
//   return 'not includes';
// }
// console.log(searchInString(string, 'moh'));
//***************************** chapter 7 => part 5 ***************
// const str = 'zahRa mohaMmadi  \n';
// const pascalCaseNaming = (str) => {
//   let result = [];
//   let arr = str.toLowerCase().trim().split(' ');
//   for (const item of arr) {
//     const items = item.split('');
//     items[0] = items[0].toUpperCase();
//     result.push(items.join(''));
//   }

//   return result.join(' ');
// };
// console.log(pascalCaseNaming(str));

//*******************the second way
// function capitilizerFirstLetter(str) {
//   const loweredStringArray = str.toLowerCase().trim().split(' ');
//   let result = [];
//   for (const item of loweredStringArray) {
//     const newString = item[0].toUpperCase() + item.slice(1);
//     result.push(newString);
//   }
//   return result.join(' ');
// }
// console.log(capitilizerFirstLetter(str));

//*******************the third way
// function capitilizerFirstLetter(str) {
//   const loweredStringArray = str.toLowerCase().trim().split(' ');
//   let result = [];
//   for (const item of loweredStringArray) {
//     const newString = item.replace(item[0], item[0].toUpperCase());
//     result.push(newString);
//   }
//   return result.join(' ');
// }
// console.log(capitilizerFirstLetter(str));
//***************************** chapter 7 => part 7 ***************
// const time = '2:6:9';
// function padTime(time) {
//   const timeArray = time.split(':');
//   const newTime = [];
//   for (const item of timeArray) {
//     newTime.push(item.padStart(2, '0'));
//   }
//   console.log(newTime.join(':'));
// }
// padTime(time);
// //*******************the second way
// const time = '2:6:9';
// function padTime(time) {
//   let [hr, min, sec] = time.split(':');
//   hr = hr.padStart(2, '0');
//   min = min.padStart(2, '0');
//   sec = sec.padStart(2, '0');
//   const newTime = [hr, min, sec];
//   console.log(newTime.join(':'));
// }
// padTime(time);
//***************************** chapter 7 => part 7 ***************
// function maskCreditCard(numbers ) {
//   const numArr = numbers.split('');
//   const newnum = [];
//   for (let i = 0; i < 4; i++) {
//     newnum.push(numArr[i]);
//   }

//   console.log(newnum.join("").padStart(16, '*'));
// }
// maskCreditCard('1234567890-');
// //*******************the second way
// function maskCreditCard(cardNumber) {
//   const str = String(cardNumber).replaceAll(' ', '').replaceAll('-', '');
//   const last = str.slice(-4);
//   console.log(last.padStart(str.length, '*'));
// }
// maskCreditCard('123456---7890');
// //***************************** chapter 8 => part 5 ***************
// const userData = [
//   {
//     id: 1,
//     name: 'zahra',
//     age: 30,
//     isActive: true,
//     role: 'ADMIN',
//     price: '25$',
//     quantity: 2,
//   },
//   {
//     id: 2,
//     name: 'zohre',
//     age: 32,
//     isActive: true,
//     role: 'TEACHER',
//     price: '25$',
//     quantity: 3,
//   },
//   {
//     id: 3,
//     name: 'hossein',
//     age: 30,
//     isActive: false,
//     role: 'ADMIN',
//     price: '25$',
//     quantity: 1,
//   },
//   {
//     id: 4,
//     name: 'hamid',
//     age: 35,
//     isActive: false,
//     role: 'DOCTOR',
//     price: '25$',
//     quantity: 2,
//   },
// ];

// const newUsersData = userData.map((user) => {
//   return {
//     ...user,
//     msg: `Hi ${user.name}. your profile is ${
//       user.isActive ? 'activated ' : 'Not Activated '
//     } in role : ${user.role}`,
//   };
// });
// console.log(newUsersData);
// console.log(userData);
// //***************************** chapter 8 => part 6 ***************
// const filteredUser = userData.filter((user) => {
//   return user.id !== 1;
// });
// console.log(filteredUser);
// //***************************** chapter 8 => part 7 ***************
// const totalPrices = userData.reduce((acc, curr) => {
//   return acc + Number(curr.price.split('$')[0]) * curr.quantity;
// }, 0);
// console.log(totalPrices);
// //***************************** chapter 8 => part 8 ***************
// const userMarks = [9, 10, 13, 18, 20, 15, 5, 4];
//1.calculate the average of marks.
// const calcAverage = userMarks
//   .reduce((acc, curr, index, array) => {
//     return acc + curr / array.length;
//   }, 0)
//   .toFixed(2);
// console.log(calcAverage);
// //2.calculate the average of passed students.
// const passedAve = userMarks
//   .filter((item) => item >= 10)
//   .reduce((acc, curr, index, array) => {
//     return acc + curr / array.length;
//   }, 0)
//   .toFixed(2);
// console.log(passedAve);
// // 3. shift marks based +3 and recalculate the ave.
// const shiftAve = userMarks
//   .map((item) => item + 3)
//   .reduce((acc, curr, index, array) => {
//     return acc + curr / array.length;
//   }, 0)
//   .toFixed(2);
// console.log(shiftAve);
// // 3. shift marks based +3 and recalculate the ave for passed.
// const passedShiftAve = userMarks
//   .map((item) => item + 3)
//   .filter((item) => item >= 10)
//   .reduce((acc, curr, index, array) => {
//     return acc + curr / array.length;
//   }, 0)
//   .toFixed(2);
// console.log(passedShiftAve);
// //***************************** chapter 8 => part 9 ***************
// const products = [
//   { title: 'product-1', id: 1, price: '8.99$' },
//   { title: 'product-2', id: 2, price: '7.99$' },
//   { title: 'product-3', id: 3, price: '6.99$' },
//   { title: 'product-4', id: 4, price: '5.99$' },
// ];
// function filteredProducts(product, identifire) {
//   const index = product.findIndex((p) => p.id === identifire);
//   product.splice(index, 1);
//   console.log(product);
// }
// filteredProducts(products, 2);
// //***************************** chapter 8 => part 10 ***************
// const enrolledCourse = [1, 7];
// const cart = [
//   { id: 1, title: 'p-1', price: 80 },
//   { id: 2, title: 'p-2', price: 20 },
//   { id: 3, title: 'p-3', price: 30 },
//   { id: 4, title: 'p-4', price: 40 },
// ];
// const checkAlreadyEnrolled = (cart, enrolledCourse) => {
//   const cartCourseId = cart.map((c) => c.id);
//   const found = enrolledCourse.some((id) => cartCourseId.includes(id));
//   if (found) return 'you already registered in one of the courser in the cart!';
//   return 'payment is pending';
// };
// console.log(checkAlreadyEnrolled(cart, enrolledCourse));
// //***************************** chapter 8 => part 11 ***************
// const names = ['zahra', 'zohre', 'fatemeh', 'ali', 'h ossein'];
// console.log(names.sort());
// //***************************** chapter 9 => part 1 ***************
// const min = parseInt(prompt('please enter your min number: '));
// const max = parseInt(prompt('please enter your max number: '));

// function randomGenerate(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   const randomNum = Math.round(min + Math.random() * (max - min + 1));
//   console.log(randomNum);
// }
// randomGenerate(min, max);
// //***************************** chapter 9 => part 2 ***************
// const daysDiff = (end, start) => {
//   const milliSec = new Date(end) - new Date(start);
//   const days = Math.floor(milliSec / (24 * 60 * 60 * 1000));
//   return days;
// };
// console.log(daysDiff('4/24/2024', '4/12/2023'));
// const now = new Date();
// console.log(now.toLocaleString());
// //***************************** chapter 9 => part 4 ***************
const notes = [
  { id: 1, title: 'Note 1', createdAt: '2022-02-12T12:03:45.458Z' },
  { id: 2, title: 'Note 2', createdAt: '2021-07-12T12:03:45.458Z' },
  { id: 3, title: 'Note 3', createdAt: '2023-11-10T12:03:45.458Z' },
  { id: 4, title: 'Note 4', createdAt: '2020-07-12T12:03:45.458Z' },
];

function sortNoteNewest(note) {
  return [...note].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
  });
}
console.log(sortNoteNewest(notes));
