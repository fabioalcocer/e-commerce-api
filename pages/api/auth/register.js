require('dotenv').config()

const mongoose = require('mongoose')
const mongoDB = process.env.DATABASE_URL
const User = require('/model/user.js')
const bcrypt = require('bcrypt')

mongoose.connect(mongoDB)
export default async function handler(req, res) {
  const { email, password } = req?.body
  if (req.method === 'POST') {
    try {
      const usersFound = await User.find({ email })
      if (usersFound.length > 0)
        throw new Error('Email is already in DB')

      const hashedPassword = bcrypt.hashSync(password, 10)
      await User.create({ email, password: hashedPassword })
      res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
      res.status(400).json({ message: `${error}` })
    }
  } else {
    res.status(400).json({ response: 'Something went wrong' })
  }
}
