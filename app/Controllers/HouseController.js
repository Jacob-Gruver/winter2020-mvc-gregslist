import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

function _drawHouses() {
    console.log(5);
    let houses = ProxyState.houses;
    let template = '';
    houses.forEach(house => {
        template += house.Template;
        });
    document.getElementById('houses').innerHTML = template;
}

export default class HouseController {
    constructor() {
        ProxyState.on("houses", _drawHouses);
        _drawHouses();
        this.getHouses();
    }

    getHouses() {
        console.log("Getting houses in Controller");
        try {
            // Check if this line of code works or throw an error via try & catch
            houseService.getHouses();
        } catch {
            throw new console.error("Invalid Command on line 24");
        }
    }



    addHouse() {
        window.event.preventDefault();
        console.log("Adding a house of step 1");
        let form = window.event.target;
        let addedHouse = {
            bedrooms: form['bedrooms'].value,
            bathrooms: form['bathrooms'].value,
            levels: form['levels'].value,
            imgUrl: form['imgUrl'].value,
            year: form['year'].value,
            price: form['price'].value,
            description: form['description'].value
            /*
            this.bedrooms = bedrooms
            this.bathrooms = bathrooms
            this.levels = levels  
            this.imgUrl = imgUrl
            this.year = year 
            this.price = price
            this.description = description
             */
        }

    try {
        houseService.addHouse(addedHouse);
    } catch {
        throw new console.error("Invalid Command on line 47");
    }
    

    console.log(7);
    // @ts-ignore
    form.reset();
    // @ts-ignore
    $("#new-house-modal").modal('hide');
    }

    deleteHouse(id) {
        try{
            houseService.deleteHouse(id);
        } catch {
            throw new console.error("Invalid Command on line 72");
        }
    }

    bid(id, newPrice) {
        try{
            houseService.bid(id, newPrice);
        } catch {
            throw new console.error("Invalid Command on line 80");
        }
    }
    getHouse() {
        houseService.getHouse();
    }
}