import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

function _drawHouses() {
    console.log(5);
    let houses = ProxyState.houses;
    let template = '';
    houses.forEach(house => {
        //NOTE There was a note here, this one isnt helpful :-)
        template += house.Template;
        });
    document.getElementById('houses').innerHTML = template;
}

export default class HouseController {
    constructor() {
        ProxyState.on("houses", _drawHouses);
        _drawHouses();
    }

    addHouse() {
        window.event.preventDefault();
        console.log("Adding a house of step 1");
        let form = window.event.target;
        let addedHouse = {
            acre: form['acre'].value,
            year: form['year'].value,
            address: form['address'].value,
            price: form['price'].value,
            description: form['description'].value,
            imgUrl: form['imgUrl'].value
        }

    houseService.addHouse(addedHouse);
    console.log(7);
    // @ts-ignore
    form.reset();
    // @ts-ignore
    document.getElementById("new-house-modal").modal('hide');
    }

    deleteHouse(id) {
        houseService.deleteHouse(id);
    }
}