import Donation from "../models/Donation.js";

export const createDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);
    res.json(donation);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getDonations = async (req, res) => {
  const donations = await Donation.find().sort({ createdAt: -1 });
  res.json(donations);
};