// 1. syntax

/*
let say = () => {
    console.log("arrow fucntion.")
};

say();

*/
//-----------------------------------------------------------------------------------------------------------

/*

let add =(a,b) => a*b; // one liner function

r=add(5,7);
console.log(add(5,7));
console.log(r)

*/

//-----------------------------------------------------------------------------------------------------------








//2 Arguments keyword
//---------------

/*
cant use arguments in arrow fucntion.

let unlimited = () =>  

    {
        r=0;
        for(i=0; i<arguments.length ; i=i+1)
{
    r= r+arguments[i];
}
return r;
      
    }

 console.log(unlimited(1,2,3,4,5,6,56,6,6,6,6));

 */

 //-----------------------

 /*

 let unlimited=(...num) =>
    {
        console.log(num);
    };
    unlimited(1,2,3,4,5,6);

    */

    //-----------------------------------------------------------------------------------------------------


// 3. Hoisting - fucntion can be called either before or after the fuction
// but in arrow fuction hosting isnt avaiable

/*

let hello=() =>
    {
        console.log("hey there")
    }

    hello();

*/








// 4.this keyboard
//---------------------------------------------
 const obj =
 {
    value:20,
    myfunction: function ()
    {
       console.log("value is "+this.value);
    }
 };
 obj.myfunction();






