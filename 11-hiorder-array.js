
/*high order functions inside the array ;

1.for each - just to print out the array. cant manipulate the elements of arrays.
2.map - can use to both find, print and manipulate the elements of arrays
3.find - use to findout if the given value is present in array.
4.findindex - use to find out the index of given array.
5.includes - return boolean value(true/false) after checking the elements presented in array.
6. filter - filter and pick the value that statisfies the condition.
7. Slice - use to take any required part of an array.
8.splice - remove an elements from array and return it to new array.
*/



//--------------------------------------------------1.for each

// let students =[1,9,7,2];

// function vall  ( n )
{
//     n=n*3
//     return n ;
// }

//  let result = students.forEach(vall);
//  console.log(result);


//--------------------------------------------------2.map


// function print(n)
// {
//     console.log(n);
// }

// students.map((print)=>
// {
//     console.log(print+' acharya');
// });


//---------------------------------------------2.map

// let num=[2,4,6,8]

// num.map(value)

// function value (n)
// {
//     console.log(n);
// }

//-----------------------------------------------------2.map


// let num =[2,4,6,8,10]

// function value(x)
// {
//     return x=x*3;
// }


// let neww = num.map(value)
// console.log(neww);

//-------------------------------------------------------4.findIndex


/*
let num =[2,4,6,8,10

let test = num.findIndex((yes)=> yes === 8) 
console.log(num[test]);
*/

//---------------------------------------------------5.includes

// let num =[2,4,6,8,10]

// let yes = num.includes((check)=> check === 4);

// console.log(yes);
 ///-------------------------------------------------6.filter
/* 
const num =[2,3,7,8,10]
const checkk = num.filter((neew) => neew % 2 ===0 );

 console.log(checkk);

*/

//-------------------------------------------------------7.slice
/*
let num =[1,2,3,4,5,6,7,8,9]

let nowww = num.slice(1, 4+1);// doesnt count last element. for eg ; if we say "4" ; it will go upto 3 with excluding 4.
console.log(nowww);

*/
//--------------------------------------------------------8.splice


let num =[1,2,3,4,5,6,7,8,9]
let newww = num.splice(2,5); // 2 means starting index and 5 means how much elements after index 2.

console.log(newww);
console.log(num);
