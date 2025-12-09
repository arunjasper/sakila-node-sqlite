class FilmActor {
    constructor(actor) {
        this.actorId = actor.actor_id;
        this.filmId = actor.film_id;
        this.lastUpdate = actor.last_update || new Date();
    }
}

module.exports = FilmActor;