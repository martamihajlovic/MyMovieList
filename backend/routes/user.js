const express = require("express")
const router = express.Router()

const {showUsers,
    showUserByID,
    showUsersByUsername,
    showUsersByEmail,
    createUser,
    updateUser,
    removeUser
} = require('../controllers/user.controller')

router.get('/',showUsers)
router.get('/:userID',showUserByID)
router.get('/username/:username',showUsersByUsername)
router.get('/email/:email',showUsersByEmail)

router.post('/',createUser)

router.put('/:userID',updateUser)

router.delete('/:userID',removeUser)


module.exports = router