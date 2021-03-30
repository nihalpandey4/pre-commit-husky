describe("Sample failing test to check whether it will allow to commit if the test fails",()=>{
    test ("Failing test case",()=>{
        expect(1+1).toBe(3);
    })
})