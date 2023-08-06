import express from 'express'
import { getAllUser, searchUser, userRegistration } from '../controllers/UserController.js'
import { userRegistrationValidation } from '../middlewares/Validate.js'

const UserRouter = express.Router()

UserRouter.post("/user-registration",userRegistrationValidation,userRegistration)
UserRouter.get("/get-all-user", getAllUser)
UserRouter.get("/get-search-user",searchUser)
export default UserRouter