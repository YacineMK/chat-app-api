import mongoose from "mongoose";
import { userSchema } from "./schema.js";

export const coll =new mongoose.model('users',userSchema)