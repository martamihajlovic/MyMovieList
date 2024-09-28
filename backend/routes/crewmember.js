const express = require("express")
const router = express.Router()

const {showCrewmembers,
    showCrewmemberByName,
    showCrewmembersByMovieID,
    createCrewmember,
    removeCrewmember
} = require('../controllers/Crewmember.controller')

router.get('/',showCrewmembers)
router.get('/:crewID',showCrewmemberByName)
router.get('/movie/:movieID',showCrewmembersByMovieID)

router.post('/',createCrewmember)

router.delete('/:crewmemberName/:movieID/:role',removeCrewmember)

module.exports = router