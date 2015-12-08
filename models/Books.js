var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  googleApiId: String,
  googleApiUrl: String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Book', BookSchema);
