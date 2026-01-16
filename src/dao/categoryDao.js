const Category = require('../model/category');
const daoCommon = require('./commons/daoCommon');

/**
 * Category Data Access Object
 */
class CategoryDao {

    constructor() {
        this.common = new daoCommon();
        this.tableName = 'category';
        this.columns = ['category_id', 'name', 'last_update'];
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sql = `SELECT ${this.columns.join(', ')} FROM ${this.tableName} WHERE category_id = ?`;
        return this.common.findById(sql, [id], (row) => new Category(row.category_id, row.name, row.last_update));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sql = `SELECT ${this.columns.join(', ')} FROM ${this.tableName}`;
        return this.common.findAll(sql, (row) => new Category(row.category_id, row.name, row.last_update));
    };

}

module.exports = CategoryDao;