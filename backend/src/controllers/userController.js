import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

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

    const hashedPassword = await bcrypt.hash(password, 10);

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar) {
      return res.status(400).json({ message: "Avatar upload failed!" });
    }

    const user = await User.create({
      fullname,
      email,
      gender,
      avatar: avatar.url,
      password: hashedPassword,
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

export { registerUser };
