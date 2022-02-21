import express from "express";
import { getVotes, postVote } from "../controllers/voteController.js";

const voteRouter = express.Router()

voteRouter.post('/choice/:id/vote', postVote)
voteRouter.get('/pool/:id/result', getVotes)

export default voteRouter