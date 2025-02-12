import User from "../models/user.model.js";
import { errorHandler } from "../utills/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
    res.json({
        message: 'API is working',
    });
};

// update user
export const updateUser = async (req, res, next) => {
    if(req.user.id !== req.params.id) { //params.id is this /update/:id its from user route
        return next(errorHandler(401, "You can update only your account!"));
    }
    try {
        if (req.body.password) {//if the body has password we encrypte and update
            req.body.password = bcryptjs.hashSync(req.body.password, 10);//hashSync like await
          }
      
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture,
                  },
            },
            {new:true} //prevent getting previous user 
        );
        //this user has password so we gonna remove it
        const { password, ...rest } = updateUser._doc;
        //send user to client side 
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}


// delete user
export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, 'You can delete only your account!'));
    }
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted...');
    } catch (error) {
      next(error);
    }
  
  }