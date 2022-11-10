const express = require('express')
const router = express.Router();
const { getAllUsers, newUser, getSingleUser, updateUser, deleteUser, getAllFriends, addFriend, removeFriend } = require('../controllers/users.js')
// get all users, create new users
router.route('/')
   .get(getAllUsers)
   .post(newUser)


// get,update,delete user by id
router.route('/:userId')
   .get(getSingleUser)
   .put(updateUser)
   .delete(deleteUser)


//get all friends
router.route('/:userId/friends')
   .get(getAllFriends)


// add or remove new friend

router.route('/:userId/friends/:friendId')
   .post(addFriend)
   .delete(removeFriend)



module.exports = router;