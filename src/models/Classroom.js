import { Schema, model } from "mongoose";

let ClassroomSchema = new Schema(
  {
    name: String,
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export default model("Classroom", ClassroomSchema);
