const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router
.route("/")
.get(getAllThoughts)
.post(createThought)

// /:thoughtsId
router
.route("/:thoughtsId")
.put(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// /:thoughtsId/reactions
router
.route("/:thoughtId/reactions")
.post(addReaction)
.delete(removeReaction);

module.exports = router;
