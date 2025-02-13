const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: 'user' }, // Admin/User role
  });
  
  module.exports = mongoose.model('User', userSchema);
  