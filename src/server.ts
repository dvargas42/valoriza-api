import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

import { router } from './routes'
import { AppError } from "./errors/AppError"

import "./database"

const app = express()

app.use(express.json())

app.use(router)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  console.error(err)

  return response.status(500).json({
    status: 'error',
    message: "Internal Server Error"
  })
})

app.listen(3333, () => {
  console.log('🚀 Server is running!')
})