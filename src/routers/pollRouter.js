import express from "express";
import validatePoll from '../middlewares/validatePoll.js'
import { postPoll, getPoll } from '../controllers/pollController.js'

const pollRouter = express.Router()

pollRouter.post('/poll', validatePoll, postPoll)
pollRouter.get('/poll', getPoll)


export default pollRouter