import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"

class CarsService {
  deleteCar(id) {
    ProxyState.cars = ProxyState.cars.filter(car => car.id != id)
  }
  createCar(newCar) {
    console.log("SERVICE: createCar", 2)
    let car = new Car(newCar)
    console.log(4)
    ProxyState.cars = [...ProxyState.cars, car]
    console.log(6)
  }

}
// Singleton Pattern
export const carsService = new CarsService()

/*
set a try in getCars to "try" to get the cars information. set the new information within the appstate and map it as a new car casting it to new car
*/ 