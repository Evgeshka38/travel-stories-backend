import createHttpError from "http-errors";
import { User } from "../../models/user";
import bcrypt from "bcrypt";
import { PASSWORD_HASH_SALT } from "../../constants/authConstants";
import { createSession } from "../../services/auth/createSession";
import { setSessionCookies } from "../../services/auth/setSessionCookies";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw createHttpError(409, "A user with this email is already registered");
  }
  const hashedPassword = await bcrypt.hash(password, PASSWORD_HASH_SALT);
  
  const newUser = await User.create({
    email,
    password: hashedPassword,
  });
  const newSession = await createSession(newUser._id);
  setSessionCookies(res, newSession);

  res.status(201).json(newUser);
};
