import {test} from "@playwright/test"
test.fail("annotaion 1", async({page})=>{
console.log("annotaion 1");
});

test("annotaion 2", async({page})=>{
console.log("annotaion 2");
});

test("annotaion 3", async({page})=>{
console.log("annotaion 3");
});
