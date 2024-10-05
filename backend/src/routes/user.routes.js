import {Router} from 'express'
import { registerUser } from '../controllers/userController.js';
import { upload } from '../middleware/multer.js';


const router = Router();

router.route("/register").post(
        upload.single('avatar'),
        registerUser

)

export default router;