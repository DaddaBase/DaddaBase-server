const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const resourceSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."]
    },
    description: String,
    url: String,
    user: { 
      type: Schema.Types.ObjectId, 
      ref: 'User'} 
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Resource = model("Resource", resourceSchema);

module.exports = Resource;
