import { model, Schema } from "mongoose";

let UserSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    role: String,
    classroom: {type: Schema.Types.ObjectId, ref:"Classroom"},
    score: Number,
    status: String,
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

export default model("User", UserSchema);
