var sum=require("./index.js")
// console.log(sum(4,5));
describe("test case for sum",()=>{
      test("sum function is defined",()=>{
        expect(sum(1,2)).toBe(3)
      });
});