import * as jwt from "jsonwebtoken";
import { User } from "../models";

export const checkJwt = async (req, res, next) => {
  //Get the jwt token from the head
  const bearerToken = req.headers.authorization;
  let token = "";
  
  if (bearerToken) token = bearerToken.split(" ")[1];
  let jwtPayload;
  //Try to validate the token and get data
  try {
    jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
    let user = await User.findOne({ _id: jwtPayload._id }).exec();
    res.locals.jwtPayload = jwtPayload;
    res.locals.userData = user.toObject();
    console.log(res.locals.userData);
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).send({
      error: true,
      errorList: ["unauthorized"],
      data: null,
    });
    return;
  }
  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { userId, email, role } = jwtPayload;
  const newToken = jwt.sign(
    { userId, email, role },
    process.env.JWT_SECRET
    // { expiresIn: "30d" }
  );
  res.setHeader("token", newToken);
  //Call the next middleware or controller
  next();
};

export const isMentor = async (req, res, next) => {
  //Try to check role is a mentor or not
  try {
    if (res.locals.userData.role == "mentor") {
      next();
    } else {
      //If role is not valid, respond with 401 (unauthorized)
      res.status(401).send({
        error: true,
        errorList: ["unauthorized"],
        data: null,
      });
      return;
    }
  } catch (error) {
    res.status(400).send({
      error: true,
      errorList: ["something went wrong"],
      data: null,
    });
    return;
  }
};

export const isMentorOrMentee = async (req, res, next) => {
  //Try to check role is a mentor or not
  try {
    if (
      res.locals.userData.role == "mentor" ||
      res.locals.userData.role == "mentee"
    ) {
      next();
    } else {
      //If role is not valid, respond with 401 (unauthorized)
      res.status(401).send({
        error: true,
        errorList: ["unauthorized"],
        data: null,
      });
      return;
    }
  } catch (error) {
    res.status(400).send({
      error: true,
      errorList: ["something went wrong"],
      data: null,
    });
    return;
  }
};