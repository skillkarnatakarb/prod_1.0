const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: function () {
        return !this.isGoogleUser; // Required only if not a Google user
      },
    },
    role: {
      type: String,
      required: true,
      enum: ['student', 'corporate', 'college'],
      default: 'student',
    },
    mobile: {
      type: String,
      required: function () {
        return !this.isGoogleUser; // Required only if not a Google user
      },
    },
    isGoogleUser: {
      type: Boolean,
      default: false, // Default to false for non-Google users
    },
  },
  { timestamps: true }
);

// Password hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || this.isGoogleUser) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Password comparison
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
