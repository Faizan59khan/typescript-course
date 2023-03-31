abstract class Vehicle {
  private make: string;
  private model: string;
  private year: number;
  private rented: boolean;

  constructor(make: string, model: string, year: number, rented: boolean) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = rented;
  }

  // Getters
  public getMake(): string {
    return this.make;
  }

  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }

  public isRented(): boolean {
    return this.rented;
  }

  // Setter
  public setRented(rented: boolean): void {
    this.rented = rented;
  }

  public abstract rentalRate(): number;

  public rent(): void {
    if (this.isRented()) {
      console.log("Sorry, this vehicle is already rented.");
    } else {
      this.setRented(true);
      console.log("Vehicle rented successfully.");
    }
  }

  public return(): void {
    if (this.isRented()) {
      this.setRented(false);
      console.log("Vehicle returned successfully.");
    } else {
      console.log("Sorry, this vehicle has not been rented.");
    }
  }
}

class Car extends Vehicle {
  private numDoors: number;
  private fuelAverage: number;

  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    numDoors: number,
    fuelAverage: number
  ) {
    super(make, model, year, rented);
    this.numDoors = numDoors;
    this.fuelAverage = fuelAverage;
  }

  public rentalRate(): number {
    return 50;
  }

  public getNumDoors(): number {
    return this.numDoors;
  }
  public getFuelAverage(): number {
    return this.fuelAverage;
  }
}

class Truck extends Vehicle {
  private cargoCapacity: number;
  private fuelAverage: number;

  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    cargoCapacity: number,
    fuelAverage: number
  ) {
    super(make, model, year, rented);
    this.cargoCapacity = cargoCapacity;
    this.fuelAverage = fuelAverage;
  }

  public rentalRate(): number {
    return 100;
  }

  public getCargoCapacity(): number {
    return this.cargoCapacity;
  }

  public getFuelAverage(): number {
    return this.fuelAverage;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;
  private fuelAverage: number;

  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    engineSize: number,
    fuelAverage: number
  ) {
    super(make, model, year, rented);
    this.engineSize = engineSize;
    this.fuelAverage = fuelAverage;
  }

  public rentalRate(): number {
    return 25;
  }

  public getEngineSize(): number {
    return this.engineSize;
  }

  public getFuelAverage(): number {
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
