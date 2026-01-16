/* Load Rental entity */
const Rental = require('../model/rental');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');
/**
 * Rental Data Access Object
 */
class RentalDao {
    constructor() {
        this.common = new daoCommon();
        this.table = 'rental';
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT rental_id, rental_date, inventory_id, customer_id, return_date, staff_id, last_update FROM rental WHERE rental_id=$rental_id";
        let sqlParams = { $rental_id: id };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Rental( row.rental_id, row.rental_date, row.inventory_id, row.customer_id, row.return_date, row.staff_id, row.last_update));
    };

        /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findByCustomer(id) {
        let sqlRequest = `SELECT r.rental_id as rentalId, 
        rental_date as rentalDate,
         r.inventory_id as inventoryId,
         return_date as returnDate,
         r.staff_id as staffId,
         s.first_name as staffFirstName,
         s.last_name as staffLastName,
         f.title
         FROM rental as r 
         left outer join staff as s on s.staff_id = r.staff_id 
         left outer join inventory as i on r.inventory_id = i.inventory_id
         left outer join film as f on i.film_id = f.film_id
         WHERE r.customer_id=$customer_id`;
        let sqlParams = { $customer_id: id };
        return this.common.findSelected(sqlRequest, sqlParams).then(rows =>
            rows)
    };

    async findPaged(page, limit) {
        let offset = (page - 1) * limit;
        const totalRecords = await this.countAll().then(row => row.count);
        let sqlRequest = `SELECT r.rental_id as rentalId, rental_date as rentalDate,
         inventory_id as inventoryId, r.customer_id as customerId,
         c.first_name as customerFirstName, c.last_name as customerLastName,
         return_date as returnDate, r.staff_id as staffId,
         s.first_name as staffFirstName, 
         s.last_name as staffLastName
         FROM rental as r join customer as c on r.customer_id = c.customer_id
         join staff as s on s.staff_id = r.staff_id LIMIT ${limit} OFFSET ${offset}`;
        const rentals = await this.common.findAll(sqlRequest, limit, offset).then(rows => {
            let rentals = [];
            for (const row of rows) {
                rentals.push(row);
            }
            return rentals;
        });
        return {
            page: page,
            limit: limit,
            totalPages: Math.ceil(totalRecords / limit),
            data: rentals
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

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = `SELECT rental_id as retalId, rental_date as rentalDate,
         inventory_id as inventoryId, customer_id as customerId, return_date as returnDate, 
         staff_id as staffId FROM ${this.table}`;
        return this.common.findAll(sqlRequest).then(rows => {
            let rentals = [];
            for (const row of rows) {
                rentals.push(row);
            }
            return rentals;
        });
    };
}

module.exports = RentalDao;