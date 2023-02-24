require('dotenv').config()
import NextCors from 'nextjs-cors'

const mongoose = require('mongoose')
const mongoDB = process.env.DATABASE_URL
const Model = require('/model/model')

mongoose.connect(mongoDB)

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  if (req.method === 'PUT') {
    try {
      const {
        query: { id },
      } = req

      const updatedData = req.body
      const options = { new: true }

      const result = await Model.findByIdAndUpdate(
        id,
        updatedData,
        options
      )

      res.send(result)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else if (req.method === 'GET') {
    try {
      const { id } = req.query
      const data = await Model.findOne({ _id: id })
      res.json(data)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query
      const data = await Model.deleteOne({ _id: id })
      res.send({ message: 'Eliminado correctamente', data })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
