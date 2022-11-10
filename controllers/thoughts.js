

module.exports = {
   async getAllThoughts(req, res) {
      try {
         res.status(200).json({ "Success": "getAllThoughts" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async newThought(req, res) {
      try {
         res.status(200).json({ "Success": "newThought" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async getSingleThought(req, res) {
      try {
         res.status(200).json({ "Success": "getSingleThought" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async updateThought(req, res) {
      try {
         res.status(200).json({ "Success": "updateThought" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async deleteThought(req, res) {
      try {
         res.status(200).json({ "Success": "deleteThought" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async getAllReactions(req, res) {
      try {
         res.status(200).json({ "Success": "getAllReactions" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async newReaction(req, res) {
      try {
         res.status(200).json({ "Success": "addReaction" })
      } catch (error) {
         res.status(500).json(error)
      }
   },
   async removeReaction(req, res) {
      try {
         res.status(200).json({ "Success": "removeReaction" })
      } catch (error) {
         res.status(500).json(error)
      }
   }
};