import { User } from "../models/user.models.js";
import bcrypt from 'bcryptjs';

const registerUser = async (req, res) => {
  const {
    fullname,
    email,
    gender,
    avatar,
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

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match!" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({
      fullname,
      email,
      gender,
      avatar,
      password: hashedPassword, // Save hashed password
      licenseNo,
      licenseExpiryDate,
      address,
      city,
      district,
      pincode,
      state,
    });

    // No need to save again, `create` does this automatically

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export { registerUser };
