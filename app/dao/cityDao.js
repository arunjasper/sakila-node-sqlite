const City = require('../model/city');
const daoCommon = require('./commons/daoCommon');

/**
 * City Data Access Object
 */
class CityDao {
    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT city_id, city, country_id, last_update FROM city WHERE city_id=$city_id";
        let sqlParams = { $city_id: id };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new City(row));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT city_id, city, country_id, last_update FROM city";
        return this.common.findAll(sqlRequest).then(rows => {
            let cities = [];
            for (const row of rows) {
                cities.push(new City(row ));
            }
            return cities;
        });
    };

}

module.exports = CityDao;