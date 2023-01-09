import User from "../model/User";

class Controller {

    static async createUser(req, res) {
        try {
          const user = new User({
            fname: "MANIBAHO",
            lname:"Patrick",
            email: "patsicko@gmail.com",
            password: "12345",
          });
          await user.save();
          res.status(201).json(user);
          console.log("user created");
        } catch (error) {
          res.status(401).json(error.message);
        }
      }


    static async getUsers(req,res) {
        try {
       const users=await User.find();
       res.status(200).json(users)
        }catch (error){
            res.status(404).json(error.message);
        }
    }

}


export default Controller;