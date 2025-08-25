import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "completed", "cancelled"],
      default: "pending",
    },
    priceCents: { type: Number, required: true },
    // stripeSessionId: String,
    // paymentIntentId: String,
  },
  { timestamps: true }
);

appointmentSchema.index({ doctorId: 1, startTime: 1 }, { unique: true });

export default mongoose.model("Appointment", appointmentSchema);
