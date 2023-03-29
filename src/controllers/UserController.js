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

  static getMentee = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.find({ classroom: id }).populate("classroom");
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({
          error:true,
          errorList: ["cannot get " + error],
          data: null,
      });
    }
  };

  static assignMentee = async (req, res) => {
    const { id } = req.params;
    const { classroom } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { _id: id },
        { classroom }
      ).exec();
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({
        error: true,
        errorList: ["cannot get " + error],
        data: null,
      });
    }
  };

  static updateScore = async (req, res) => {
    const { id } = req.params;
    const { score } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { _id: id },
        { score }
      ).exec();
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
