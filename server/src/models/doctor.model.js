import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema(
  {
    dayOfWeek: { type: Number, min: 0, max: 6, required: true },
    start: String,
    end: String,
    slotMins: { type: Number, default: 30 },
  },
  { _id: false }
);

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    specialty: String,
    bio: String,
    feeCents: { type: Number, default: 5000 },
    approved: { type: Boolean, default: false },
    availability: [availabilitySchema],
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);
