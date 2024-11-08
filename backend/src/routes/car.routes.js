import {Router} from 'express'

const router = Router();

router.route("/cars").get(getAllCars)