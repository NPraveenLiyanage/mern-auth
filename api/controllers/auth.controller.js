import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utills/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); //encrypted password(npm i bccryptjs)
    const newUser = new User({ username, email, password: hashedPassword });
    try {
      await newUser.save();//wait untill recive the result
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      next(error);
    }
  };

  export const signin = async (req, res, next) => {
    const { email, password } = req.body; //get email and password
    try {
      const validUser = await User.findOne({ email });  //search  for the email
      if (!validUser) return next(errorHandler(404, 'User not found'));

      const validPassword = bcryptjs.compareSync(password, validUser.password);//compare the password
      if (!validPassword) return next(errorHandler(401, 'wrong credentials'));

      //use token to verify the user (npm i jsonwebtoken) install in root
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = validUser._doc;//get all info without password
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
  }