/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const ActorController = require('../../controller/actorController');
const actorController = new ActorController();
/**
 * Actor Entity routes
 */
router.get('/:id', function (req, res) {
    actorController.getActorById(req, res)
});

router.get('/', function (req, res) {
    actorController.getActors(req, res);
});

module.exports = router;