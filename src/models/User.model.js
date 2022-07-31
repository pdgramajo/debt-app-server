import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      select: false,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
    phone: {
      type: Number,
      unique: true,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// userSchema.pre("save", async (next) => {
//   if (this.isModified("password") || this.isNew) {
//     try {
//       this.password = await bcrypt.hash(this.password, 10);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     next();
//   }
// });

// userSchema.methods.emailExists = async (email) => {
//   const result = await this.find({ email });
//   return result.length > 0;
// };

// userSchema.methods.getAllActiveUsers = async () => {
//   const users = await this.find({ isBloqued: false, isEnabled: true });
//   return users;
// };

// userSchema.methods.getAllBlockedUsers = async () => {
//   const users = await this.find({ isBloqued: true, isEnabled: true });
//   return users;
// };

// userSchema.methods.softDelete = async () => {
//   // edit and set the isEnabled property in false
//   const users = await this.find({ isDeleted: true });
//   return users;
// };

// userSchema.methods.findByEmail = async (email) => {
//   const user = await this.findOne({
//     email: email,
//     isBloqued: false,
//     isEnabled: true,
//   });
//   return user;
// };

export default mongoose.model("User", userSchema);
