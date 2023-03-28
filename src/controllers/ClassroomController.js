import { Classroom } from "../models";

class ClassroomController {

  static getAll = async (req, res) => {
    try {
      const classroom = await Classroom.find().populate('mentor').exec();
      res.status(200).send(classroom);
    } catch (error) {
      res.status(400).send({
        error: true,
        errorList: ["cannot get " + error],
        data: null,
      });
    }
  };

  static create = async (req, res) => {
    let { name, mentor } = req.body;

    try {
      const newClassroom = new Classroom({
        name,
        mentor
      });
      await newClassroom.save();
      res.status(200).send(newClassroom); 
    } catch (error) {
      res.status(400).send({
        error: true,
        errorList: ["cannot save " + error],
        data: null,
      });
    }
  };

}

export default ClassroomController;
