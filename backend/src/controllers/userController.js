import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  const {
    fullname,
    email,
    gender,
    password,
    confirmPassword,
    licenseNo,
    licenseExpiryDate,
    address,
    city,
    district,
    pincode,
    state,
  } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match!" });
  }

  const avatarLocalPath = req.file?.path;
  if (!avatarLocalPath) {
    return res.status(400).json({ message: "Profile avatar is required!" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar) {
      return res.status(400).json({ message: "Avatar upload failed!" });
    }

    const user = await User.create({
      fullname,
      email,
      gender,
      avatar: avatar.url,
      password,
      licenseNo,
      licenseExpiryDate,
      address,
      city,
      district,
      pincode,
      state,
    });

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!(email && password)) {
    return res.status(400).json("Email or Password required!");
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    // console.log(user.password);

    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log(password);

    // console.log(isValidPassword);

    if (!isValidPassword) {
      return res.status(402).json("Invalid Email or Password");
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "Login Successful",
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export { registerUser, loginUser };
