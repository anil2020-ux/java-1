/*

function hello()
{
    console.log("namaste");
}

hello(); // calling fucntion

*/

 //--------------------------------------------------



/*
 function add(a,b)
 {

    return a*b;

 }

 R = add(5,10);
 console.log("your answer is " +R);
 */

//------------------------------------------------------------




function unlimited()
{
let ans=0;
    for(let i=0; i<arguments.length; i++)
        {
            ans= ans+arguments[i];
        }
   return ans;
}

let R= unlimited(1,2,3,4,5,6);
console.log(R);
