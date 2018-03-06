//should have min of headline, summary, url. Can also have photos, bylines, etc.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HeadlineSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    byline: {
        type: String,
        required: false
    },
    picture:{
        type:String,
        required:false
    },
    note:
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }

});

// This creates our model from the above schema, using mongoose's model method
var Headline = mongoose.model("Headline", HeadlineSchema);

// Export the Headline model
module.exports = Headline;