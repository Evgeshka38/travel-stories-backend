import createHttpError from "http-errors";
import { User } from "../../models/user.js";
import bcrypt from "bcrypt";
import { PASSWORD_HASH_SALT } from "../../constants/authConstants.js";
import { createSession } from "../../services/auth/createSession.js";
import { setSessionCookies } from "../../services/auth/setSessionCookies.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw createHttpError(409, "A user with this email is already registered");
  }
  const hashedPassword = await bcrypt.hash(password, PASSWORD_HASH_SALT);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  const newSession = await createSession(newUser._id);
  setSessionCookies(res, newSession);

  res.status(201).json({
    status: 201,
    message: "Successfully registered a user",
    data: newUser,
  });
};
