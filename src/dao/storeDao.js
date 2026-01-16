/* Load Store entity */
const Store = require('../model/store');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');
/**
 * Store Data Access Object
 */
class StoreDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT store_id, manager_staff_id, address_id, last_update FROM store WHERE store_id=$store_id";
        let sqlParams = { $store_id: id };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Store(row ));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT store_id, manager_staff_id, address_id, last_update FROM store";
        return this.common.findAll(sqlRequest).then(rows => {
            let stores = [];
            for (const row of rows) {
                stores.push(new Store(row ));
            }
            return stores;
        });
    };


}

module.exports = StoreDao;