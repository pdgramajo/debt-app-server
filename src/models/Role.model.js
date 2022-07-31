import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  permissions: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Permission",
    },
  ],
});
const Role = mongoose.model("Role", RoleSchema);

export default Role;
