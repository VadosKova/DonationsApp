import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  donorAddress: String,
  amount: String,
  message: String,
  mediaLink: String,
  txHash: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Donation", donationSchema);