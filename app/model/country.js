class Country {
    constructor(country) {
        this.countryId = country.country_id;
        this.country = country.country;
        this.lastUpdate = country.last_update;
    }
}

module.exports = Country;