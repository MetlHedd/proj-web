import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true },
  birthDate: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false },
});

// PASSWORD hash: https://stackoverflow.com/questions/14588032/mongoose-password-hashing

export const User = models.User || model("User", UserSchema);

export default User;
