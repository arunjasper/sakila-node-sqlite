/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const FilmController = require('../../controller/filmController');
const filmController = new FilmController();

/**
 * Film Entity routes
 */
router.get('/actor/:id', function (req, res) {
    filmController.getFilmActors(req, res);
});

router.get('/:id', function (req, res) {
    filmController.getFilmById(req, res)
});

router.get('/', function (req, res) {
    filmController.getFilms(req, res);
});

router.put('/:id', function (req, res) {
    filmController.update(req, res)
});

router.post('/create', function (req, res) {
    filmController.create(req, res);
});

router.delete('/:id', function (req, res) {
    filmController.deleteById(req, res)
});

module.exports = router;