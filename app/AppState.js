import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [new Car({ make: "Benz", model: "1", year: 1985, price: 10000000, description: "Its old", imgUrl: "https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2018/03/20142414/auto-11.jpg" })]
  houses = [new House({acre: 50, year: 3089, address: "0000 Why. NoneYoBiz Ct. Nowhere Nope", price: 5000000, description: "Somewere... or nowhere", imgUrl: "https://images.freeimages.com/images/large-previews/591/african-hut-1496491.jpg" })];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
