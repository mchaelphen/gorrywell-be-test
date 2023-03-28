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
}

export default AuthController;