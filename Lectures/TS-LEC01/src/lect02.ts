// type Person = {
//   name: string;
//   rollno: number;
//   hobbies: string[];
//   email?: string; //? makes optional this property
// };

// let person: Person = {
//   name: "faizan",
//   rollno: 12,
//   hobbies: ["cricket", "gaming"],
// };

// let person2: Person = {
//   name: "Kashan",
//   rollno: 23,
//   hobbies: ["cricket"],
//   email: "kashan@gmail.com",
// };

// const persons: Person[] = [];
// persons.push(person);
// persons.push(person2);

//Functions:
// const add = (x: number, y: number, cb: (x: string) => void): number => {
//   cb("hello");
//   return x + y;
// };

// // let func: Function; //General Way but it can accept any kind of function
// let func: (x: number, y: number, z: (x: string) => void) => number; //Exact format (arg,ret type or if any cb)
// func = add;

//Ex:2
//Literal Type => Not a general type but a some specific value
type Opr = "add" | "subtract";
const add = (x: number, y: number, calc: Opr) => {
  if (calc === "add") {
    return x + y;
  } else if (calc === "subtract") {
    return x - y;
  }
};
console.log(add(3, 5, "add"));

//Tuples: (array functions like push,pop would work.) => (its a bug a/c to Tuples structure)
//TS => Has'nt fix this as it will be breaking change but can be fixed later.
let gender: [string, string] = ["male", "female"];
let admin: [number, string] = [1, "admin"];
let error: [number, string] = [404, "not found"];
