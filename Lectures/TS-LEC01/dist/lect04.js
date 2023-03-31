"use strict";
// class Product {
//   constructor(
//     private _id: number,
//     private _name: string,
//     private _price: number
//   ) {}
//   get id() {
//     return this._id;
//   }
//   get name() {
//     return this._name;
//   }
//   get price() {
//     return this._price;
//   }
//   set name(newName) {
//     if (!newName) {
//       throw new Error("Name can not be empty");
//     }
//     this._name = newName;
//   }
// }
// const p1 = new Product(1, "watch", 23);
//Inheritance
// class ClothingProduct extends Product {
//   constructor(
//     id: number,
//     name: string,
//     price: number,
//     private _color: string,
//     private _size: "S" | "M" | "L" | "XL"
//   ) {
//     super(id, name, price);
//   }
// }
// const tShirt = new ClothingProduct(1, "T-Shirt", 25, "red", "S");
// console.log(tShirt);
//Abstract Class
// abstract class Product {
//   constructor(
//     private _id: number,
//     private _name: string,
//     private _price: number
//   ) {}
//   get id() {
//     return this._id;
//   }
//   get name() {
//     return this._name;
//   }
//   get price() {
//     return this._price;
//   }
//   set name(newName) {
//     if (!newName) {
//       throw new Error("Name can not be empty");
//     }
//     this._name = newName;
//   }
//   abstract getDiscounts(discount: number): number;
// }
// class ClothingProduct extends Product {
//   constructor(
//     id: number,
//     name: string,
//     price: number,
//     private _color: string,
//     private _size: "S" | "M" | "L" | "XL"
//   ) {
//     super(id, name, price);
//   }
//   getDiscounts(discount: number): number {
//     return this.price * discount;
//   }
// }
// const tShirt = new ClothingProduct(1, "T-Shirt", 25, "red", "S");
// console.log(tShirt);
//Singletons:
class Util {
    constructor() { }
    static getInstance() {
        //create instance only once next time return the same instance.
        if (!this.instance) {
            this.instance = new Util();
        }
        return this.instance;
    }
}
const u1 = Util.getInstance();
const u2 = Util.getInstance();
console.log(u1 === u2); //true (as same instance)
//# sourceMappingURL=lect04.js.map