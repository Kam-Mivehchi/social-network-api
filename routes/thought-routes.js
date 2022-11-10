const express = require('express')
const router = express.Router();
const { getAllThoughts, newThought, getSingleThought, updateThought, deleteThought, getAllReactions, newReaction, removeReaction } = require('../controllers/thoughts.js')

//get all thoughts and create new thoughts
router.route('/')
   .get(getAllThoughts)
   .post(newThought)

//update or delete thoughts
router.route('/:thoughtId')
   .get(getSingleThought)
   .put(updateThought)
   .delete(deleteThought)

//create or get all reactions to the thought 
router.route('/:thoughtId/reactions')
   .get(getAllReactions)
   .post(newReaction)
//delete reaction
router.route('/:thoughtId/reactions/:reactionId')
   .delete(removeReaction)

module.exports = router;