import express from 'express'
import { createUser, deleteUser, getUser, listUsers, updateUser } from '../Controller/auth.js'
import { body } from 'express-validator'
const router = express.Router()

//create-user
router.post('/create-user', body("email").isEmail(),
body("password").isLength({ min: 9 }), createUser)

//update-user
router.patch('/update-user/:id',updateUser)

//Delete user
router.delete('/delete-user/:id',deleteUser)

//Get User
router.get('/get-user/:id',getUser)

//List Users
router.get('/list-users',listUsers)

export default router
