// //Union Types
type Animal = {
  name: string;
  runningSpeed: number;
};

type Bird = {
  name: string;
  flyingSpeed: number;
};

type Creature = Animal | Bird; //Union
// type Creature1 = Animal & Bird; //Intersection

function log(creature: Creature) {
  console.log(creature.name); // its ok available in both Animal and in Bird
  if ("runningSpeed" in creature) {
    //Type Guard
    console.log(creature.runningSpeed);
  }
}

// const tiger: Creature = {
//   name: "tiger",
//   runningSpeed: 3,
// };

// const a: Creature1 = {
//   name: "tiger",
//   runningSpeed: 3,
//   flyingSpeed: 4,
// };

//Interface:
// interface Animal {
//   name: string;
//   runningSpeed: number;
// }

// interface Bird {
//   name: string;
//   flyingSpeed: number;
// }

// interface Creature extends Animal, Bird {
//   eat: (food: string) => string;
// }

// class A implements Creature {
//   constructor(
//     public name: string,
//     public runningSpeed: number,
//     public flyingSpeed: number
//   ) {}

//   eat = (food: string) => {
//     return food;
//   };
// }
