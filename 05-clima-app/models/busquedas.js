require("dotenv").config();
const axios = require("axios");
class Busquedas {
  historial = ["Tegucilgalpa", "Madrid", "San Jose"];

  constructor() {}

  get paramsMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "es",
    };
  }

  async ciudad(lugar = "") {
    try {
      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar.desc}.json`,
        params: this.paramsMapBox,
      });
      const resp = await intance.get();
      
      return resp.data.features.map(lugar =>({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }))
    } catch (error) {
      return [];
    }
  }
}

module.exports = Busquedas;
