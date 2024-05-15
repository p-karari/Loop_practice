// GROUP ASSIGNMENT
// example 3
// *
// **
// ***
// ****
// *****
// ******

// example 4
// ******
// *****
// ****
// ***
// **
// *

// example 5
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *


// example 6
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// example 7
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *

// example 8
//*******
//*
//*
//*
//*
//*
//*

console.log("Exercise 1");
let x = '*';
let arr = [];

for(let i = 1;i <= 6; ++i) {
    console.log(x);
    x += '*';
    arr.push('*');
    
}


console.log("Exercise 2");

for (let j = 7;j >= 1;j-- ) {
    console.log(arr.join(''));
    arr.pop()
}

console.log("Exercise 3");

let y = [' ', ' ', ' ', ' ', ' '];
console.log(y);
for (let a = 4; a >=0;a--) {
    y[a] = '*';
    console.log(y.join(''));
}
for (let b = 0; b <= 4;b++) {
    y[b] = ' ';
    console.log(y.join(''));
}

let d = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let m = 5;
let multiplier
console.log(y);
for (let a = 5; a >=0;a--) {
    d[a] = '*';

    console.log(d.join(''));
}

for(m = 5;m <= 8;m++) {
    d[m] = '*';
    console.log(d.join(''))
}

console.log(d.join(''));
for (let b = 0; b <= 4;b++) {
    d[b] = ' ';
    console.log(d.join(''));
}

console.log(("Exercise 5"));

let r = ['*', '*', '*', '*', '*', '*', '*'];
let v = [' ', ' ', ' ',' ' , ' ', ' ', '*'];
console.log(r.join(''));
for(let p = 0;p <= 6; p++) { 
    console.log(v.join(''))
}

// console.log("Exercise 6")

// let n = ['*', ' ', ' ',' ' , ' ', ' ', ' '];
// console.log(r.join(''));
// for(let p = 0;p <= 6; p++) { 
//     console.log(n.join(''))
// }



