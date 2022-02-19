import { ObjectId } from 'mongodb';
import db from '../db.js';

export async function postChoice(req, res) {
    const choice = req.body

    try {

        const poll = await db.collection('polls').findOne({_id: new ObjectId(choice.pollId)})

        if(!poll) {
            res.sendStatus(404)
        }

        const choiceList = await db.collection('choices').find({pollId: choice.pollId}).toArray()

        for (let i = 0; i < choiceList.length; i++) {
            if (choiceList[i].title === choice.title) {
                res.sendStatus(409)
            }
        }
        
        await db.collection('choices').insertOne(choice)

        res.send(choice).status(201)

    } catch (error) {
        res.sendStatus(500)
    }
}

export async function getChoices(req, res) {
    const id = req.params.id

    try {
        
        const choices = await db.collection('polls').find({_id: new ObjectId(id)}).toArray

        if(!choices) {
            res.sendStatus(404)
        }

        res.send(choices).status(201)

    } catch (error) {
        res.sendStatus(500)
    }
}