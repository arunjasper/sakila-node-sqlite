/* Load Address entity */
const Address = require('../model/address');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');
/**
 * Address Data Access Object
 */
class AddressDao {

    constructor() {
        this.common = new daoCommon();
    }
    
    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT address_id, address, address2, district, city_id, postal_code, phone, last_update FROM address WHERE address_id=$address_id";
        let sqlParams = { $address_id: id };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Address(row));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT address_id, address, address2, district, city_id, postal_code, phone, last_update FROM address";
        return this.common.findAll(sqlRequest).then(rows => {
            let addresses = [];
            for (const row of rows) {
                addresses.push(new Address(row));
            }
            return addresses;
        });
    };
    
}

module.exports = AddressDao;
