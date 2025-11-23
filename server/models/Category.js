// server/models/Category.js

const mongoose = require("mongoose");
const slugify = require("slugify"); 

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
      maxlength: [50, 'Name cannot be more than 50 characters'],
    },
    slug: {
      type: String,
      required: true, 
      unique: true,
    },
    description: {
      type: String,
      maxlength: [200, "Description cannot be more than 200 characters"],
    },
  },
  { timestamps: true }
);

// FIX: Use 'async' and remove 'next'. 
// Mongoose will wait for this function to finish before validating.
CategorySchema.pre("validate", async function () {
  // Check if name exists to avoid errors
  if (this.name && (this.isNew || this.isModified("name"))) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
});

module.exports = mongoose.model("Category", CategorySchema);