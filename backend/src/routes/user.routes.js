import {Router} from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';
import { upload } from '../middleware/multer.js';


const router = Router();

router.route("/register").post(
        upload.single('avatar'),
        registerUser

)

router.route("/login").post(loginUser)

export default router;