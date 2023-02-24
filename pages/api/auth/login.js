require('dotenv').config()

const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')
const mongoDB = process.env.DATABASE_URL
mongoose.connect(mongoDB)

const User = require('/model/user.js')
const bcrypt = require('bcrypt')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req?.body
    try {
      const usersFound = await User.find({ email })
      const correctPass = bcrypt.compareSync(
        password,
        usersFound[0].password
      )
      if (usersFound.length === 1 && correctPass) {
        res.status(200).json({
          message: `Welcome ${usersFound[0].email}`,
          token: jwt.sign(
            { email: usersFound[0].email },
            'mySecretKey'
          ),
        })
      } else {
        res.status(401).json({ message: 'Something went wrong' })
      }
    } catch (error) {
      res.status(400).json({ message: 'Something went wrong' })
    }
  } else if (req.method === 'GET') {
    res.status(400).json({ message: 'Something went wrong' })
  }
}
