import mongoose from "mongoose";

const debtSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    paided: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      require: true,
    },
    client: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
    id: true,
  }
);

const Debt = mongoose.model("Debt", debtSchema);

export default Debt;

/**
    {
      id: 1,
      title: 'Mighty Max',
      description: 'Muffin Hinge 117n',
      userId: 21,
      paided: false,
      amount: 5547
    }
 */
