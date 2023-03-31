//Class
class Student {
  //   name: string;
  //   rollNo: number;
  //   private cnic: number;
  //   constructor(name: string, rollNo: number, cnic: number) {
  //     this.name = name;
  //     this.rollNo = rollNo;
  //     this.cnic = cnic;
  //   }

  //or
  private skills: string[] = [];
  constructor(
    public name: string,
    public readonly rollNo: number,
    private cnic: number
  ) {}

  addSkill(skill: string) {
    this.skills.push(skill);
  }
}

const s1 = new Student("Faizan", 11, 1232);
// s1.skills.push("js"); // can't access directly private variable (to access private variable we used getter setter)
s1.addSkill("js");

console.log(s1);

//Access Modifiers: public, private ... (by def public)
//Readonly: (can't modify value)
