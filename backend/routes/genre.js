const express = require("express")
const router = express.Router()

const {showGenres,
    showGenreByID,
    showGenreByName,
    removeGenre,
    createGenre
} = require('../controllers/genre.controller')

router.get('/',showGenres)
router.get('/:genreID',showGenreByID)
router.get('/name/:genreName',showGenreByName)

router.post('/',createGenre)

router.delete('/',removeGenre)

module.exports = router