import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"
// request api from axiosservice

function _drawCars() {
  console.log(5)
  let cars = ProxyState.cars
  let template = ''
  cars.forEach(car => {
    // NOTE Getters FAKE properties as methods
    template += car.Template
  })
  document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {
    debugger
    ProxyState.on("cars", _drawCars)
    _drawCars()
    // set this.getCars() to axcess the axios. use this.funct to axcess a property within a class
  }

  // add getCars() to call for the information

  // add a create car that await api.post("", new object) trigger our listeners
 
  createCar() {
    window.event.preventDefault()
    console.log("creating car", 1)
    let form = window.event.target
    let newCar = {
      make: form['make'].value,
      model: form['model'].value,
      year: form['year'].value,
      price: form['price'].value,
      description: form['description'].value,
      imgUrl: form['imgUrl'].value
    }
    carsService.createCar(newCar)
    console.log(7)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    document.getElementById("new-car-modal").modal('hide');
  }


  deleteCar(id) {
    carsService.deleteCar(id)
  }
}