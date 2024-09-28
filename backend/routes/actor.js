const express = require("express")
const router = express.Router()

const {showActors,
    showActorByName,
    showActorsByMovieID,
    createActor,
    removeActor
} = require('../controllers/actor.controller')

router.get('/',showActors)
router.get('/:actorID',showActorByName)
router.get('/movie/:movieID',showActorsByMovieID)

router.post('/',createActor)

router.delete('/:actorID:movieID',removeActor)

module.exports = router