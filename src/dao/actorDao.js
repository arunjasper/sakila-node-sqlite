/* Load Actor entity */
const Actor = require('../model/actor');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Actor Data Access Object
 */
class ActorDao {

    constructor() {
        this.common = new daoCommon();
        this.table = 'actor'
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest =`SELECT actor_id as actorId, first_name as actorFirstName,
        last_name as actorLastName FROM ${this.table} WHERE actor_id=$actor_id`;
        let sqlParams = { $actor_id: id };
        return this.common.findOne(sqlRequest, sqlParams).then(row => row)
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = `SELECT actor_id as actorId,
        first_name as actorFirstName, last_name as actorLastName FROM ${this.table}`;
        return this.common.findAll(sqlRequest).then(rows => {
            return rows;
        });
    };

    async findPaged(page, limit) {
        let offset = (page - 1) * limit;
        const totalRecords = await this.countAll().then(row => row.count);
        let sql = `SELECT actor_id as actorId,
        first_name as actorFirstName, last_name as actorLastName
        FROM ${this.table}  LIMIT ${limit} OFFSET ${offset}`;
        const actors = await this.common.findAll(sql, limit, offset).then(rows => {
            return rows;
        });
        return {
            page: page,
            limit: limit,
            totalPages: Math.ceil(totalRecords / limit),
            data: actors
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

module.exports = ActorDao;