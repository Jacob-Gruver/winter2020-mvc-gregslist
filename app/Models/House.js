import { generateId } from "../Utils/GenerateId.js"

export default class House {
    constructor({acre, year, address, price, description, imgUrl }) {
        console.log(3);
        this.id = generateId()
        this.acre = acre
        this.year = year
        this.address = address
        this.price = price
        this.description = description
        this.imgUrl = imgUrl 
    }
    get Template() {
        return `
        <div class="col-md-4 col-6 mt-3">
        <div class="card">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.acre} - ${this.year} - ${this.address}</h4>
                <p class="card-text">${this.description}</p>
                <p class="card-text">${this.price}</p>
                <div class="text-right">
                    <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
                </div>
            </div>
        </div>
        </div>
            `
    }
}