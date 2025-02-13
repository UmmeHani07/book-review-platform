const reviewSchema = new mongoose.Schema({
    bookId: mongoose.Schema.Types.ObjectId,
    user: String,
    review: String,
    rating: Number,
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Review', reviewSchema);
  