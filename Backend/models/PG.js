import mongoose from "mongoose";

const pgSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    location: {
      address: {
        type: String,
        required: [true, "Address is required"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
        default: "Chennai",
      },
      area: {
        type: String,
        required: [true, "Area is required"],
      },
      pincode: {
        type: String,
        match: [/^[0-9]{6}$/, "Please provide a valid 6-digit pincode"],
      },
    },
    gender: {
      type: String,
      enum: ["boys", "girls", "both"],
      required: [true, "Gender type is required"],
    },
    amenities: {
      type: [String],
      default: [],
    },
    images: {
      type: [String],
      default: [],
    },
    capacity: {
      total: {
        type: Number,
        required: [true, "Total capacity is required"],
        min: [1, "Capacity must be at least 1"],
      },
      available: {
        type: Number,
        required: [true, "Available capacity is required"],
        min: [0, "Available capacity cannot be negative"],
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Owner is required"],
    },
    contactInfo: {
      phone: {
        type: String,
        required: [true, "Contact phone is required"],
      },
      email: {
        type: String,
      },
    },
    nearby: {
      hospitals: [String],
      touristPlaces: [String],
      offices: [String],
      metro: String,
      mall: String,
    },
    highlights: {
      type: [String],
      default: [],
    },
    rating: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for search optimization
pgSchema.index({ "location.area": 1, gender: 1, price: 1 });
pgSchema.index({ title: "text", description: "text" });

const PG = mongoose.model("PG", pgSchema);

export default PG;
