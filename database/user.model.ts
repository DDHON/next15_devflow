import { model, models, Schema } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  bio?: string;
  image: string;
  location?: string;
  portofolio?: string;
  reputation?: number;
}

const UserSchema = new Schema(
  {
    name: { type: String, require: true },
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    bio: { type: String },
    image: { type: String, require: true },
    location: { type: String },
    portofolio: { type: String },
    reputation: { type: String, default: 0 },
  },
  { timestamps: true }
);

const User = models?.user || model<IUser>("User", UserSchema);

export default User;
