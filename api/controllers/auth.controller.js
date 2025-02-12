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

  export const google = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = user._doc;//seperate password from other info
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        res
          .cookie('access_token', token, {
            httpOnly: true,
            expires: expiryDate,
          })
          .status(200)
          .json(rest);
      } else {
        //generate password with 16 characters with numbers, its first create 8 numbers
        //and then convert it to string and remove extra and keep last 8 digits
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({
          username:
            req.body.name.split(' ').join('').toLowerCase() +
            Math.random().toString(36).slice(-8),
            //username we get the display name its not unique so we create unique name
          email: req.body.email,
          password: hashedPassword,
          profilePicture: req.body.photo,
        });
        await newUser.save();
        //creating a cookie
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword2, ...rest } = newUser._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        res
          .cookie('access_token', token, {
            httpOnly: true,
            expires: expiryDate,
          })
          .status(200)
          .json(rest);
      }
    } catch (error) {
      next(error);
    }
  }

  
export const signout = (req, res) => {
  res.clearCookie('access_token').status(200).json('Signout success!');
};