const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
    required: true
    },
    description: {
        type: String,
        default: "default category description"
    },
    image: {
        type: String, 
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fplaceholder-image&psig=AOvVaw3nf-oAq-8T0hJqn0xOYK0j&ust=1675110380147000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLi13crO7fwCFQAAAAAdAAAAABAE"
    },
    attributes:[{key: {type: String}, value:[{type: String}]}]// ie: key 'color' could have multiple value options  ....red, green, blue etc
})
categorySchema.index({description: 1})// will make searches faster


const Category = mongoose.model("Category", categorySchema)
module.exports = Category;