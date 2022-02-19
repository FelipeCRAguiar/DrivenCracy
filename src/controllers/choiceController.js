import { ObjectId } from 'mongodb';
import db from '../db.js';

export async function postChoice(req, res) {
    const choice = req.body

    try {

        const poll = await db.collection('polls').findOne({_id: new ObjectId(choice.pollId)})

        if(!poll) {
            res.sendStatus(404)
        }
        
        await db.collection('choices').insertOne(choice)

        res.send(choice).status(201)

    } catch (error) {
        res.sendStatus(500)
    }
}