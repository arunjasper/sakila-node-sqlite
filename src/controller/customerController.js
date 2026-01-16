/* Load Customer Data Access Object */
const CustomerDao = require('../dao/customerDao');
/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');


/**
 * Customer Controller
 */
class CustomerController {
    constructor() {
        this.customerDao = new CustomerDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    getCustomerById(req, res) {
        let id = req.params.id;
        this.customerDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    getCustomers(req, res) {
        if (req.query.page || req.query.limit) {
            return this.getCustomersWithPaging(req, res);
        }
        this.customerDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds paged entities.
     * @return paged entities
     */
    getCustomersWithPaging(req, res) {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 10;
        this.customerDao.findPaged(page, limit)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

}

module.exports = CustomerController;