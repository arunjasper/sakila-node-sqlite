/* Load Category Data Access Object */
const CategoryDao = require('../dao/categoryDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load Category entity */
const Category = require('../model/category');

/**
 * Category Controller
 */
class CategoryController {
    constructor() {
        this.categoryDao = new CategoryDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    getCategoryById(req, res) {
        let id = req.params.id;
        this.categoryDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    getCategories(res) {
        this.categoryDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    
}

module.exports = CategoryController;