import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema(
  {
    dayOfWeek: { type: Number, min: 0, max: 6, required: true }, // 0=Sunday
    start: { type: String, required: true }, // "10:00"
    end: { type: String, required: true }, // "16:00"
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
    specialty: { type: String, required: true },
    bio: String,
    feeCents: { type: Number, default: 5000 },
    approved: { type: Boolean, default: false },
    availability: [availabilitySchema], // now enabled
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
