import { Schema, model } from "mongoose";

let ClassroomSchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
    exercise: {type: String, required: true, unique: true},
    mentor: {type: Schema.Types.ObjectId, ref:"User", required: true},
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
  }
);

export default model("Classroom", ClassroomSchema);
