/* Load Actor entity */
const Staff = require('../model/staff');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Actor Data Access Object
 */
class AuthDao {

    constructor() {
        this.common = new daoCommon();
        this.table = 'staff'
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    login(userName, password) {
        let sqlRequest =`SELECT username FROM ${this.table} WHERE (username=$username or email=$username) and password=$password`;
        let sqlParams = { $username: userName, $password: password };
        return this.common.findOne(sqlRequest, sqlParams).then(row => row)
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    register(userName, ) {
        let sqlRequest = `SELECT actor_id as actorId,
        first_name as actorFirstName, last_name as actorLastName FROM ${this.table}`;
        return this.common.findAll(sqlRequest).then(rows => {
            return rows;
        });
    };



}

module.exports = ActorDao;