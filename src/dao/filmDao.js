/* Load Film entity */
const Film = require('../model/film');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Film Data Access Object
 */
class FilmDao {

    constructor() {
        this.common = new daoCommon();
        this.table = 'film';
        this.columns = ['film_id', 'title','rating','description, release_year']
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = `SELECT film_id, title, description, release_year, language_id, original_language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features, last_update FROM ${this.table} WHERE film_id=$film_id`;
        let sqlParams = { $film_id: id };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Film(row));
    };

        /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findByActor(id) {
        let sqlRequest = `SELECT film_id, title, description, release_year, language_id, original_language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features, last_update FROM ${this.table} WHERE film_id=$film_id`;
        let sqlParams = { $film_id: id };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Film(row));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = `SELECT film_id, title, description, release_year, language_id, original_language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features, last_update FROM ${this.table}`;
        return this.common.findAll(sqlRequest).then(rows => {
            let films = [];
            for (const row of rows) {
                films.push(new Film(
                    row
                ));
            }
            return films;
        });
    };

    async findPaged(page, limit) {
        let offset = (page - 1) * limit;
        const totalRecords = await this.countAll().then(row => row.count);
        let sql = `SELECT ${this.columns.join(', ')} FROM ${this.table}  LIMIT ${limit} OFFSET ${offset}`;
        const films = await this.common.findAll(sql, limit, offset).then(rows => {
            let films = [];
            for (const row of rows) {
                films.push(new Film(row));
            }
            return films;
        });
        return {
            page: page,
            limit: limit,
            totalPages: Math.ceil(totalRecords / limit),
            data: films
        };
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM film";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Film
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(film) {
        let sqlRequest = "UPDATE film SET " +
            "title=$title, " +
            "description=$description, " +
            "release_year=$release_year, " +
            "language_id=$language_id, " +
            "original_language_id=$original_language_id, " +
            "rental_duration=$rental_duration, " +
            "rental_rate=$rental_rate, " +
            "length=$length, " +
            "replacement_cost=$replacement_cost, " +
            "rating=$rating, " +
            "special_features=$special_features " +
            "WHERE film_id=$film_id";

        let sqlParams = {
            $title: film.title,
            $description: film.description,
            $release_year: film.releaseYear,
            $language_id: film.languageId,
            $original_language_id: film.originalLanguageId,
            $rental_duration: film.rentalDuration,
            $rental_rate: film.rentalRate,
            $length: film.length,
            $replacement_cost: film.replacementCost,
            $rating: film.rating,
            $special_features: film.specialFeatures,
            $film_id: film.filmId
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Film
     * returns database insertion status
     */
    create(film) {
        let sqlRequest = "INSERT into film (title, description, release_year, language_id, original_language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features) " +
            "VALUES ($title, $description, $release_year, $language_id, $original_language_id, $rental_duration, $rental_rate, $length, $replacement_cost, $rating, $special_features)";
        let sqlParams = {
            $title: film.title,
            $description: film.description,
            $release_year: film.releaseYear,
            $language_id: film.languageId,
            $original_language_id: film.originalLanguageId,
            $rental_duration: film.rentalDuration,
            $rental_rate: film.rentalRate,
            $length: film.length,
            $replacement_cost: film.replacementCost,
            $rating: film.rating,
            $special_features: film.specialFeatures
        };
        return this.common.run(sqlRequest, sqlParams);
    };
    /**
     * Creates the given entity with a provided in the database
     * @params Film
     * returns database insertion status
     */
    createWithId(film) {
        let sqlRequest = "INSERT into film (film_id, title, description, release_year, language_id, original_language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features) " +
            "VALUES ($film_id, $title, $description, $release_year, $language_id, $original_language_id, $rental_duration, $rental_rate, $length, $replacement_cost, $rating, $special_features)";
        let sqlParams = {
            $film_id: film.filmId,
            $title: film.title,
            $description: film.description,
            $release_year: film.releaseYear,
            $language_id: film.languageId,
            $original_language_id: film.originalLanguageId,
            $rental_duration: film.rentalDuration,
            $rental_rate: film.rentalRate,
            $length: film.length,
            $replacement_cost: film.replacementCost,
            $rating: film.rating,
            $special_features: film.specialFeatures
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = `DELETE FROM ${this.table} WHERE film_id=$film_id`;
        let sqlParams = { $film_id: id };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Searches entities by title
     * @params title
     * @return all matching entities
     */
    searchByTitle(title) {
        let sqlRequest = `SELECT film_id, title, description, release_year, language_id, original_language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features, last_update FROM ${this.table} WHERE title LIKE $title`;
        let sqlParams = { $title: `%${title}%` };
        return this.common.findAll(sqlRequest, sqlParams).then(rows => {
            let films = [];
            for (const row of rows) {
                films.push(new Film(
                    row.film_id,
                    row.title,
                    row.description,
                    row.release_year,
                    row.language_id,
                    row.original_language_id,
                    row.rental_duration,
                    row.rental_rate,
                    row.length,
                    row.replacement_cost,
                    row.rating,
                    row.special_features,
                    row.last_update
                ));
            }
            return films;
        });
    }

    findFilmActors(id) {
        let sqlRequest = `SELECT fa.actor_id as actorId,
        fa.film_id as filmId, f.title, f.release_year as releaseYear, l.name as language, f.rating,
         f.special_features as specialFeatures
         FROM film_actor as fa 
         left outer join film as f on fa.film_id = f.film_id
         left outer join language as l on f.language_id = l.language_id
         WHERE fa.actor_id=$actor_id`;
        let sqlParams = { $actor_id: id };
        return this.common.findSelected(sqlRequest, sqlParams).then(rows =>
            rows)
    };
}

module.exports = FilmDao;