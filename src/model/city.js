class City {
    constructor(city) {
        this.cityId = city.city_id;
        this.city = city.city;
        this.countryId = city.country_id;
        this.lastUpdate = city.last_update;
    }
}

module.exports = City;