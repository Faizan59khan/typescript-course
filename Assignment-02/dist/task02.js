"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    // Getters
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    // Setter
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.isRented()) {
            console.log("Sorry, this vehicle is already rented.");
        }
        else {
            this.setRented(true);
            console.log("Vehicle rented successfully.");
        }
    }
    return() {
        if (this.isRented()) {
            this.setRented(false);
            console.log("Vehicle returned successfully.");
        }
        else {
            console.log("Sorry, this vehicle has not been rented.");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, numDoors, fuelAverage) {
        super(make, model, year, rented);
        this.numDoors = numDoors;
        this.fuelAverage = fuelAverage;
    }
    rentalRate() {
        return 50;
    }
    getNumDoors() {
        return this.numDoors;
    }
    getFuelAverage() {
        return this.fuelAverage;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, cargoCapacity, fuelAverage) {
        super(make, model, year, rented);
        this.cargoCapacity = cargoCapacity;
        this.fuelAverage = fuelAverage;
    }
    rentalRate() {
        return 100;
    }
    getCargoCapacity() {
        return this.cargoCapacity;
    }
    getFuelAverage() {
        return this.fuelAverage;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, engineSize, fuelAverage) {
        super(make, model, year, rented);
        this.engineSize = engineSize;
        this.fuelAverage = fuelAverage;
    }
    rentalRate() {
        return 25;
    }
    getEngineSize() {
        return this.engineSize;
    }
    getFuelAverage() {
        return this.fuelAverage;
    }
}
const car1 = new Car("Toyota", "Camry", 2020, false, 4, 30);
const truck1 = new Truck("Ford", "F-150", 2022, false, 5000, 15);
const motorcycle1 = new Motorcycle("Honda", "CBR500R", 2019, false, 500, 50);
car1.rent(); // Should print "Vehicle rented successfully."
car1.rent(); // Should print "Sorry, this vehicle is already rented."
car1.return(); // Should print "Vehicle returned successfully."
car1.rent(); // Should print "Vehicle rented successfully."
console.log(car1.getMake()); // Should print "Toyota"
console.log("Cargo Capicity: " + truck1.getCargoCapacity()); // Should print 5000
console.log("Rental Rate in dollars: " + motorcycle1.rentalRate()); // Should print 25
console.log(car1.getFuelAverage()); // Should print 30
console.log(truck1.getFuelAverage()); // Should print 15
console.log(motorcycle1.getFuelAverage()); // Should print 50
//# sourceMappingURL=task02.js.map