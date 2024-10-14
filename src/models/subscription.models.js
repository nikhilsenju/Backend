import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subscriber: {
      type: mongoose.Schema.Types.ObjectId,// the user who is subscribing
      ref: "User",
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId,// a the user whose channel is being subscribed
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default Subscription = mongoose.model(
  "Subscription",
  subscriptionSchema
);
