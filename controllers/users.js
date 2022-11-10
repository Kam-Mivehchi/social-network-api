

module.exports = {
   async getAllUsers(req, res) {
      try {
         res.status(200).json({ "Success": "getAllUsers" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async newUser(req, res) {
      try {
         res.status(200).json({ "Success": "newUser" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async getSingleUser(req, res) {
      try {
         res.status(200).json({ "Success": "getSingleUser" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async updateUser(req, res) {
      try {
         res.status(200).json({ "Success": "updateUser" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async deleteUser(req, res) {
      try {
         res.status(200).json({ "Success": "deleteUser" })
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
         res.status(200).json({ "Success": "addFriend" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async removeFriend(req, res) {
      try {
         res.status(200).json({ "Success": "removeFriend" })
      } catch (error) {
         res.status(500).json(error)
      }
   }
};