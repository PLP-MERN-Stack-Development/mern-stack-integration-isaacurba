// server/models/Category.js - DEFINITIVE FIX

const mongoose = require("mongoose");
const slugify = require("slugify"); // Dependency must be installed via npm

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
      required: true, // Re-enforce this field as REQUIRED
      unique: true,
    },
    description: {
      type: String,
      maxlength: [200, "Description cannot be more than 200 characters"],
    },
  },
  { timestamps: true }
);

// CRITICAL FIX: The slug must be generated if the document is NEW (this.isNew) 
// OR if the name is explicitly modified later. This ensures slug generation runs 
// BEFORE the validation step.
CategorySchema.pre("save", function (next) {
  if (this.isNew || this.isModified("name")) {
    if (this.name) {
      this.slug = slugify(this.name, { lower: true, strict: true });
    }
  }
  next();
});

module.exports = mongoose.model("Category", CategorySchema);