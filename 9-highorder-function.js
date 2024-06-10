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

// // add(high);


// function add( a,b,rn)
// {
//      let sum= a+b;
//      rn(sum);
// }

// // function high(sum)
// // {
// //   console.log(sum);
// // }

// add(10,9,(high)=>console.log(high));


// add(2,3,function(say){
//     console.log(say);
// })


function anil (x,y,chai){
    let  a= (x*y)+100;
     chai(a);

}

function next(a){
     console.log(a);
}

anil(1,2,next);

function babe(q,w,cb)
{
     let rs=q*w;
     nopeee(rs)
}

function rs()
{
 console.log("this is the value of callback fcuntion.");
}



babe(2,3,nopeee)