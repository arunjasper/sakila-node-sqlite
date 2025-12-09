/* Load Rental Data Access Object */
const RentalDao = require('../dao/rentalDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/**
 * Rental Controller
 */
class RentalController {
    constructor() {
        this.rentalDao = new RentalDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    getRentalById(req, res) {
        let id = req.params.id;
        this.rentalDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    getRentals(req, res) {
        if (req.query.page || req.query.limit) {
            return this.getRentalsWithPaging(req, res);
        }
        this.rentalDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    getRentalsWithPaging(req, res) {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 12;
        this.rentalDao.findPaged(page, limit)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    getRentalsByCustomer(req, res) {
        let customerId = req.params.id
        this.rentalDao.findByCustomer(customerId)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

}

module.exports = RentalController;