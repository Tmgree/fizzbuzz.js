describe("FizzBuzz", function() {;

it("should return Fizz for a multiple of 3", function() {

  expect(fizzbuzz(3)).toEqual("Fizz");

})

it("should return Buzz for a multiple of 5", function() {

  expect(fizzbuzz(5)).toEqual("Buzz");

})

it("should return FizzBuzz for a multiple of 3 and 5", function() {

  expect(fizzbuzz(15)).toEqual("FizzBuzz");

})

it("should return the number if it is not divisible by 3 or 5", function() {

  expect(fizzbuzz(17)).toEqual(17);

})

it("should return the sequence of numbers from 0 to n replacing correctly with fizzbuzz", function() {
  expect(fizzbuzzseq(6)).toEqual([1,2,"Fizz",4,"Buzz","Fizz"]);
})

});
