//  function add (a,b,cb)
//  {
//     let result= a+b;
//     cb(result);
//  }

//  function high (result)
//  {
//     console.log(result);
//  }

// add(4,5, high)





// function high(result)
// {
//     console.log(result);
// }

// add(high);


function add( a,b,rn)
{
     let sum= a+b;
     rn(sum);
}

// function high(sum)
// {
//   console.log(sum);
// }

add(10,9,(high)=>console.log(high));


// add(2,3,function(say){
//     console.log(say);
// })