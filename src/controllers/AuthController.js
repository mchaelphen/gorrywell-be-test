import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { STATUS } from "../config/constants";
import { User } from "../models";

class AuthController {
    static signUp = async (req, res) => {
        let {
          name,
          email,
          password,
          role,
          classroom,
        } = req.body;
    
        try {
          password = bcrypt.hashSync(password, 8);
          let status = STATUS.ACTIVE;
    
          const newUser = new User({
            name,
            email,
            password,
            role,
            classroom,
            status,
          });
          await newUser.save();
          res.status(200).send(newUser);
        } catch (error) {
            console.log(error)
          res.status(400).send({
            error: true,
            errorList: ["user already registered"],
            data: null,
          });
        }
    };
    
    static signIn = async (req, res) => {
      let { email, password } = req.body;
      //Check if email and password are set
      if (!(email && password)) {
        res.status(400).send({
          error: true,
          errorList: ["fill required fields"],
          data: null,
        });
        return;
      }
      //Get user from database
      try {
        let user = await User.findOne({ email }).exec();
        //compare password
        if (!bcrypt.compareSync(password, user.password)) {
          throw 404;
        }
        //Sign JWT, valid for 1 hour
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "24h",
        });
  
        //delete sensitive information
        user = user.toObject();
        user.token = token;
        delete user.password;
        delete user.forgetPasswordToken;
        res.setHeader("Authorization", `Bearer ${token}`);
        res.status(200).send(user);
      } catch (error) {
        res.status(400).send({
          error: true,
          errorList: ["user not found"],
          data: null,
        });
      }
    };
}

export default AuthController;