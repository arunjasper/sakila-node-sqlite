class FilmCategory {
    constructor(film_category) {
        this.filmId = film_category.film_id;
        this.categoryId = film_category.category_id;
        this.lastUpdate = film_category.last_update || new Date();
    }
}

module.exports = FilmCategory;