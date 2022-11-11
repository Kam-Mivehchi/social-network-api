const { Thought, User } = require("../models")

module.exports = {
   async getAllThoughts(req, res) {
      try {
         const thoughts = await Thought.find().select('-__v')
         res.status(200).json(thoughts)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async newThought(req, res) {
      try {
         //create the thought
         const data = await Thought.create(req.body)
         //update the user model to reference the new thought
         await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: data._id } },
            { new: true }
         )
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async getSingleThought(req, res) {
      try {
         const data = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .populate('reactions')
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async updateThought(req, res) {
      try {

         const data = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { new: true })

         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async deleteThought(req, res) {
      try {
         const data = await Thought.findOneAndDelete({ _id: req.params.thoughtId })

         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async getAllReactions(req, res) {
      try {
         const data = await Thought.findOne({ _id: req.params.thoughtId }).populate('reactions')
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async newReaction(req, res) {
      try {
         const data = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { new: true }).populate('reactions')

         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async removeReaction(req, res) {
      try {
         const data = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, {
            $pull: { reactions: { reactionId: req.params.reactionId } }
         }, { new: true })


         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   }
};