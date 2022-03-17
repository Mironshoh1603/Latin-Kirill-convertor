"use strict";
// // let grades = Array(prompt("Baholar arrayini kiriting:"));

// // function gradingStudents(grades) {
// //   let divide,
// //     remind,
// //     arr = [];
// //   for (let i = 0; i < grades.length; i++) {
// //     divide = Math.ceil(grades[i] / 5);
// //     remind = divide * 5 - grades[i];
// //     if (grades[i] >= 38 && grades[i] <= 100) {
// //       if (remind < 3) {
// //         arr.push(divide * 5);
// //       } else {
// //         arr.push(grades[i]);
// //       }
// //     } else {
// //       arr.push(grades[i]);
// //     }
// //   }

// //   return arr;
// // }

// // console.log(gradingStudents([73, 67, 38, 33]));

// let nums = [2, 7, 11, 15];
// let target = 18;
// let arrSet = new Set();
// let arr;
// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < nums.length; j++) {
//     if (i !== j) {
//       if (nums[i] + nums[j] == target) {
//         arrSet.add(i);
//         arrSet.add(j);
//         break;
//       }
//     }
//   }
// }
// arr = [...arrSet];
// console.log(arr);
let latinArr = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ".split("");
let kirilArr = "абcдефгҳижклмнопқрстувхйзАБCДEФГҲИЖКЛМНОПҚРСТУВХЙЗ".split("");
document.querySelector(".z1asCe").addEventListener("click", function () {
  let a = document.querySelector(".section-1-h2").textContent;
  let b = document.querySelector(".section-2-h2").textContent;
  [a, b] = [b, a];
  document.querySelector(".section-1-h2").textContent = a;
  document.querySelector(".section-2-h2").textContent = b;
  let t1 = document.querySelector(".textArea-1").value;
  let t2 = document.querySelector(".textArea-2").value;
  [t1, t2] = [t2, t1];
  document.querySelector(".textArea-1").value = t1;
  document.querySelector(".textArea-2").value = t2;
});

function swapLetter(str) {
  str = str.split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (document.querySelector(".section-1-h2").textContent == "Latin") {
      if (latinArr.includes(str[i])) {
        arr.push(kirilArr[latinArr.indexOf(str[i])]);
      } else {
        arr.push(str[i]);
      }
    } else if (
      document.querySelector(".section-1-h2").textContent == "Kirill"
    ) {
      if (kirilArr.includes(str[i])) {
        arr.push(latinArr[kirilArr.indexOf(str[i])]);
      } else {
        arr.push(str[i]);
      }
    }
  }
  return arr.join("");
}
setInterval(function () {
  let a = document.querySelector(".textArea-1").value;
  document.querySelector(".textArea-2").value = swapLetter(a);
}, 100);
