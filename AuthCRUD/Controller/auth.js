import mongoose from "mongoose"
import User from "../Model/User.js"
import sendEmail from "node-mailer"
export const createUser = async (req, res) => {
    try {
        const bodyParams = req.body
        const user = new User(bodyParams)
        if (user) {
            res.json({ "message": "User Created", data: user })
            await user.save()
        }

    }
    catch (e) {
        console.log(e)
    }

}

export const updateUser = async (req, res) => {
    try {
        const bodyParams = req.body
        const user = await User.updateOne({
            _id: new mongoose.Types.ObjectId(req.params.id)
        },
            {
                $set:bodyParams ,


            },
            { new: true }
        )
        if(!req.params.id){
            res.json({ "message": "Id is rquired", data: {} })
            return
        }
        res.json({ "message": "User Updated", data: user })
    }
    catch (e) {
        console.log(e)
    }

}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById({
            _id: req.params.id
        })
        if(!req.params.id){
            res.json({ "message": "Id is rquired", data: {} })
            return
        }
            res.json({ "message": "User fetched successfully", data: user })

    }
    catch (e) {
        console.log(e)
    }

}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({
            _id: req.params.id
        })
        if(!req.params.id){
            res.json({ "message": "Id is rquired", data: {} })
            return
        }
            res.json({ "message": "User Deleted successfully", data: user })
        

    }
    catch (e) {
        console.log(e)
    }

}

export const listUsers = async (req, res) => {
    try {
        let users= await User.paginate({}, {
                  page: req.params.page ||1,
                  limit: req.params.limit ||10,
                });
        if (users) {
            res.json({ "message": "Users fetched successfully", data:users})
        }

    }
    catch (e) {
        console.log(e)
    }

}

