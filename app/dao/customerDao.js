const Customer = require('../model/customer');
const CustomerDetails = require('../model/customerDetail');
const daoCommon = require('./commons/daoCommon');

/**
 * Category Data Access Object
 */
class CustomerDao {
    constructor() {
        this.common = new daoCommon();
        this.table = 'customer';
        this.columns = ['customer_id', 'first_name', 'last_name', 'email', 'active'];
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sql = `SELECT ct.customer_id, ct.store_id, first_name, last_name, email, address, address2, district, city, postal_code, phone, active from customer as ct
        inner join address as at 
        on ct.address_id = at.address_id
        inner join city  on at.city_id = city.city_id
        WHERE ct.customer_id = ?`;
        return this.common.findOne(sql, [id]).then(row =>
            new CustomerDetails(
                row));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sql = `SELECT ${this.columns.join(', ')} FROM ${this.table}`;
        return this.common.findAll(sql).then(rows => {
            let customers = [];
            for (const row of rows) {
                customers.push(new Customer(row));
            }
            return customers;
        });
    };
    
    async findPaged(page, limit) {
        let offset = (page - 1) * limit;
        const totalRecords = await this.countAll().then(row => row.count);
        let sql = `SELECT ${this.columns.join(', ')} FROM ${this.table}  LIMIT ${limit} OFFSET ${offset}`;
        const customers = await this.common.findAll(sql, limit, offset).then(rows => {
            let customers = [];
            for (const row of rows) {
                customers.push(new Customer(row));
            }
            return customers;
        });
        return {
            page: page,
            limit: limit,
            totalPages: Math.ceil(totalRecords / limit),
            data: customers
        };
    };

    /**
    * Counts all the records present in the database
    * @return count
    */
    countAll() {
        let sqlRequest = `SELECT COUNT(*) AS count FROM ${this.table}`;
        return this.common.findOne(sqlRequest);
    };

}
module.exports = CustomerDao;