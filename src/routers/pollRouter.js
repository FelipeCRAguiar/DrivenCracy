import express from "express";
import validatePoll from '../middlewares/validatePoll.js'
import { postPoll, getPoll } from '../controllers/pollController.js'

const pollRouter = express.Router()

pollRouter.post('/pool', validatePoll, postPoll)
pollRouter.get('/pool', getPoll)


export default pollRouter