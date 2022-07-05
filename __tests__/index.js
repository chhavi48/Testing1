var sum=require("../index.js")
// console.log(sum(4,5));
describe("test case inside __test__ for sum",function(){
      test("sum function is defined",()=>{
        expect(sum).toBeDefined()
      })
})
describe("toBe test",()=>{
test('toBe Number',()=>{
    expect(10).toBe(10)

})

test('toBe Object a===a',()=>{
     var a={}
    expect(a).toBe(a)
})


test('toBe boolean',()=>{
    
    expect(false).toBe(false)
})

})