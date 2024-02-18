import mongoose from "mongoose";
import { userSchema } from "./schema.js";
import { messageSchema } from "./schema.js";

export const coll = new mongoose.model('users',userSchema);

export const msg = new mongoose.model('message',messageSchema);