 function fizzbuzz(n) {if (n%5==0 && n%3==0) {
   return "FizzBuzz"
 }

 else if (n%5==0) {
   return "Buzz"
 }

 else if (n%3==0) {
   return "Fizz"
 }

 else {
   return(n)
 }
}

function fizzbuzzseq(n) {
  var array=[];
  console.log(fizzbuzz(n));
  for(var i=1; i <= n; i++) {
    console.log("Hi");
    console.log(fizzbuzz(n));
    array.push(fizzbuzz(i));
  }
  return array
}
