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

router.route('/')
.get(getAllThoughts)


// /:thoughtsId
router
.route('/:id')
.post(createThought)
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// /:thoughtsId/reactions
router
.route("/:thoughtsId/reactions")
.post(addReaction)
.delete(removeReaction);

module.exports = router;
