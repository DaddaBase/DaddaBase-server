const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    user: { 
      type: Schema.Types.ObjectId, 
      ref: 'User'
  } 
  },
  //{
    // this second object adds extra properties: `createdAt` and `updatedAt`
   // timestamps: true,
  //}
);

const Post = model("Post", postSchema);

module.exports = Post;
