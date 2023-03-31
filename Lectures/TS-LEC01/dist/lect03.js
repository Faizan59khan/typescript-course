"use strict";
//Class
class Student {
    constructor(name, rollNo, cnic) {
        this.name = name;
        this.rollNo = rollNo;
        this.cnic = cnic;
        //   name: string;
        //   rollNo: number;
        //   private cnic: number;
        //   constructor(name: string, rollNo: number, cnic: number) {
        //     this.name = name;
        //     this.rollNo = rollNo;
        //     this.cnic = cnic;
        //   }
        //or
        this.skills = [];
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
}
const s1 = new Student("Faizan", 11, 1232);
// s1.skills.push("js"); // can't access directly private variable (to access private variable we used getter setter)
s1.addSkill("js");
console.log(s1);
//Access Modifiers: public, private ... (by def public)
//Readonly: (can't modify value)
//# sourceMappingURL=lect03.js.map