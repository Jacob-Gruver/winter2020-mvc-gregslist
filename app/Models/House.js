import { generateId } from "../Utils/GenerateId.js"

export default class House {
    constructor({id, bedrooms, bathrooms, levels, imgUrl, year, price, description}) {
        console.log(3);
        this.id = id
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels  
        this.imgUrl = imgUrl
        this.year = year 
        this.price = price
        this.description = description
    }
    get Template() {
        return `
        <div class="col-md-4 col-6 mt-3">
        <div class="card">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.description}</h4>
                <p class="card-text">Bedrooms ${this.bedrooms} - Bath ${this.bathrooms} - Levels ${this.levels}</p>
                <p class="card-text">${this.price}</p>
                <div class="text-right">
                <button type="button" class="btn btn-success" onclick="app.houseController.bid('${this.id}', '${this.price += 2}')">Bid + 2</button>
                    <button type="button" class="btn btn-danger" onclick="app.houseController.deleteHouse('${this.id}')">Delete</button>
                </div>
            </div>
        </div>
        </div>
            `
    }
}