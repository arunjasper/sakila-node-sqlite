/**
 * Film Entity (ES6 Class)
 */

class Film {
    constructor(film) {
        this.filmId = film.film_id;
        this.title = film.title;
        this.description = film.description;
        this.releaseYear = film.release_year;
        this.languageId = film.language_id;
        this.originalLanguageId = film.original_language_id;
        this.rentalDuration = film.rental_duration;
        this.rentalRate = film.rental_rate;
        this.length = film.length;
        this.replacementCost = film.replacement_cost;
        this.rating = film.rating;
        this.specialFeatures = film.special_features;
        this.lastUpdate = film.last_update;
    }
}

module.exports = Film;