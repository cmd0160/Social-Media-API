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
.route('/:userId')
.get(getAllThoughts)
.post(createThought)

// /:thoughtsId
router
.route("/:userId/:thoughtsId")
.put(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// /:thoughtsId/reactions
router
.route("/:userId/:thoughtsId/reactions")
.post(addReaction)
.delete(removeReaction);

module.exports = router;
