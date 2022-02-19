import express from "express";
import validateChoice from "../middlewares/validateChoice.js";
import { postChoice, getChoices } from "../controllers/choiceController.js";

const choiceRouter = express.Router()

choiceRouter.post('/choice', validateChoice, postChoice)
choiceRouter.get('/poll/:id/choice', getChoices)

export default choiceRouter