import { User } from "../models";

class UserController {

  static getAll = async (req, res) => {
    try {
      const user = await User.find().exec();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({
        error: true,
        errorList: ["cannot get " + error],
        data: null,
      });
    }
  };

}

export default UserController;
