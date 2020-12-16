import { ProxyState } from "../AppState.js";
import House from "../Models/House.js"


class HouseService {
    deleteHouse(id) {
        ProxyState.houses = ProxyState.houses.filter(house => house.id != id);
    }
    addHouse(addedHouse){
        console.log(2);
        let house = new House(addedHouse);
        console.log(4);
        ProxyState.houses = [...ProxyState.houses, house];
        console.log(6);
    }
}
export const houseService = new HouseService();