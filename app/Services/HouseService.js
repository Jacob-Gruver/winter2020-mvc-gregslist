import { ProxyState } from "../AppState.js";
import House from "../Models/House.js"
import { serv } from "../Utils/Axios.js"


class HouseService {

    async getHouses() {
        console.log("Getting houses in Service");
        let res = await serv.get("houses");
        console.log(res.data);
        debugger
        ProxyState.houses = res.data.map(h => new House(h));
    }

    async deleteHouse(id) {
        debugger
        let res = await serv.delete("houses/" + id);
        console.log("This is suppose to delete this house ", res);
        ProxyState.houses = ProxyState.houses.filter(house => house.id != id);
    }
    async addHouse(addedHouse){
        console.log(2);

        await serv.post("houses/",  addedHouse);
        console.log(4);
        console.log(6);
        this.getHouses();
    }
    async bid(id, newPrice) {
        let housePrice = {price : newPrice};
        let res = await serv.put("houses/"+id, housePrice);
        let obsoleteIndex = ProxyState.houses.findIndex(h => h.id == id);
        let replace = ProxyState.houses;
        replace.splice(obsoleteIndex, 1, new House(res.data));
        ProxyState.houses = replace; 
    }
    async getHouse() {
        debugger
        let res = await serv.get("houses");
        console.log(res.data);
    }
}
export const houseService = new HouseService();