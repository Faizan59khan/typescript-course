"use strict";
// type Person = {
//   name: string;
//   rollno: number;
//   hobbies: string[];
//   email?: string; //? makes optional this property
// };
const add = (x, y, calc) => {
    if (calc === "add") {
        return x + y;
    }
    else if (calc === "subtract") {
        return x - y;
    }
};
console.log(add(3, 5, "add"));
//Tuples: (array functions like push,pop would work.) => (its a bug a/c to Tuples structure)
//TS => Has'nt fix this as it will be breaking change but can be fixed later.
let gender = ["male", "female"];
let admin = [1, "admin"];
let error = [404, "not found"];
//# sourceMappingURL=lect02.js.map