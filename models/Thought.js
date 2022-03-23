const { Schema, model, Types } = require("mongoose");

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const ThoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    reactions: [ReactionSchema],
    createdAt: {
      type: Date,
      default: Date.now,
      //   get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
