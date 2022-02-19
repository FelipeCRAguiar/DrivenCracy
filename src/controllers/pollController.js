import db from '../db.js'

export async function postPoll(req, res) {
    const poll = req.body
    
    try {

        await db.collection('polls').insertOne(poll)

        res.send(poll).status(201)
        
    } catch (error) {
        res.send(500)
    }
}

export async function getPoll(req, res) {
    try {
        
        const polls = await db.collection('polls').find({}).toArray()

        res.send(polls).status(201)

    } catch (error) {
        res.send(500)
    }
}