/* Load Film Data Access Object */
const FilmDao = require('../dao/filmDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load Film entity */
const Film = require('../model/film');

/**
 * Film Controller
 */
class FilmController {
    constructor() {
        this.filmDao = new FilmDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    getFilmById(req, res) {
        let id = req.params.id;
        this.filmDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    getFilms(req, res) {
        if (req.query.page || req.query.limit) {
            return this.getFilmsWithPaging(req, res);
        }
        this.filmDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let film = new Film();
        film.filmId = req.body.filmId;
        film.title = req.body.title;
        film.description = req.body.description;
        film.releaseYear = req.body.releaseYear;
        film.languageId = req.body.languageId;
        film.originalLanguageId = req.body.originalLanguageId;
        film.rentalDuration = req.body.rentalDuration;
        film.rentalRate = req.body.rentalRate;
        film.length = req.body.length;
        film.replacementCost = req.body.replacementCost;
        film.rating = req.body.rating;
        film.specialFeatures = req.body.specialFeatures;

        this.filmDao.update(film)
            .then(this.common.updateSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Finds paged entities.
     * @return paged entities
     */
    getFilmsWithPaging(req, res) {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 12;
        this.filmDao.findPaged(page, limit)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    getFilmActors(req, res) {
        let actorId = req.params.id;
        this.filmDao.findFilmActors(actorId)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
}

module.exports = FilmController;