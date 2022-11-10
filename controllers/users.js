const { User } = require('../models')
const { ObjectId } = require('mongoose').Types;

module.exports = {
   async getAllUsers(req, res) {
      try {
         const users = await User.find().select('-__v')
         res.status(200).json(users)
      } catch (error) {
         console.log(error)
         res.status(500).json(error)
      }
   },
   async newUser(req, res) {
      try {
         const data = await User.create(req.body)
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async getSingleUser(req, res) {
      try {
         const users = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .populate('friends')

         console.log(users)
         res.status(200).json(users)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async updateUser(req, res) {

      try {
         const data = await User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { new: true })
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async deleteUser(req, res) {

      try {
         const data = await User.findOneAndDelete({ _id: req.params.userId })
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async getAllFriends(req, res) {
      try {
         res.status(200).json({ "Success": "getAllFriends" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async addFriend(req, res) {
      try {
         const data = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true })

         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async removeFriend(req, res) {
      const data = User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
      try {
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json(error)
      }
   }
};