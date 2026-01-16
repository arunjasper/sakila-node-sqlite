/* Load Actor Data Access Object */
const ActorDao = require('../dao/actorDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load Actor entity */
const Actor = require('../model/actor');

/**
 * Actor Controller
 */
class ActorController {
    constructor() {
        this.actorDao = new ActorDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    getActorById(req, res) {
        let id = req.params.id;
        this.actorDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    getActors(req, res) {
        if (req.query.page || req.query.limit) {
            return this.getActorsWithPaging(req, res);
        }
        this.actorDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
  * Finds paged entities.
  * @return paged entities
  */
    getActorsWithPaging(req, res) {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 12;
        this.actorDao.findPaged(page, limit)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

}

module.exports = ActorController;