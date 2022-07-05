var sum=require("../index.js")
// console.log(sum(4,5));
describe("test case inside __test__ for sum",function(){
      test("sum function is defined",()=>{
        expect(sum).toBeDefined()
      })
})
test('toBe',()=>{
    expect(10).toBe(10)
    expect(false).toBe(false)
    expect({}).toBe({})
})