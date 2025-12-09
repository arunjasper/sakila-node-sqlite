/* Load Store Data Access Object */
const StoreDao = require('../dao/storeDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load Store entity */
const Store = require('../model/store');
/**
 * Store Controller
 */
class StoreController {
    constructor() {
        this.storeDao = new StoreDao();
        this.common = new controllerCommon();
    }
    
    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    getStoreById(req, res) {
        let id = req.params.id;
        this.storeDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    getStores(res) {
        this.storeDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    
}

module.exports = StoreController;