//console.log('hello world');
//alert('close');
//document.write('this is document write');

//javascript console API
// console.log("tes");
// console.warn("test warn");
// console.error("test error");

//javascript Variables
// containers to store values
var number1 = 10;
var number2 = 20;
// console.log(number1 + number2);

// Data Types in JavaScript
//strings
var str1 = "string 1";
var str2 = "string 2";

//Number
var num1 = 23;
var num2 = 32.23;

//objects
var marks = {
  ravi: 45,
  shubham: 34,
};
// console.log(marks);

//booleans
var a = true;
var b = false;
// console.log(a);

var und = undefined;
// console.log(und);

var n = null;
// console.log(n);

/*
2 data types 
1. Primitive data types - undefined,null,boolean,string,symbol,number
2. Reference data types - arrays and objects
*/

var arr = [1, 2, 3, 4, 5];

//operators in JavaScript
// Arithmetic operators
var a = 12;
var b = 23;
// console.log('result of a + b', a+b);
// console.log('result of a - b', a-b);
// console.log('result of a * b', a*b);
// console.log('result of a / b', a/b);

// Assignment operators
// c = b;c -=2;c += 10;

//comparison operators < = >

//logical operators logical and logical or logical not

//function
function avg(a, b) {
  return (a + b) / 2;
}

c1 = avg(3, 3);
// console.log(c1);

//conditional statements
// if else

// console.log(arr);
// for(i=0;i<arr.length;i++)
// {
//     if(i==1)
//     {
//         //break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// });

let j = 0;
const ab = 1;

// while (j<arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

//JavaScript array methods
let myArr = ['mobile',12,null,true];
//myArr.length();
// myArr.pop();
// myArr.push('jay');
// myArr.shift();
// myArr.unshift('j');
// console.log(myArr);

//string methods
var myStr = 'javascript tutorial';
// console.log(myStr.length);
// console.log(myStr.indexOf('scr'));
// console.log(myStr.lastIndexOf('scr'));
// .slice , .replace , .

// Dates
let myDate = new Date();
// .getTime , .getHours etc

//Dom Manipulation
let elem = document.getElementById('click');
// console.log(elem);
let elem1 = document.getElementsByClassName('container');
// console.log(elem1);
// elem1[0].style.background = 'yellow';
// elem1[0].classList.add('bg-primary') = 'yellow';
// console.log(elem.innerHTML);
// console.log(elem.innerTEXT);

// let tn = document.getElementsByTagName('button');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = 'this is a para';
// tn[0].appendChild(createdElement);

//query selector

//events in JavaScript
// onClick , onChange , 