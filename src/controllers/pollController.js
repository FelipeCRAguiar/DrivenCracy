import db from '../../db.js'
import dayjs from 'dayjs'

export async function postPoll(req, res) {
    const poll = req.body

    if(!poll.expireAt) {
        const expire = dayjs().format('YYYY-MM-DD HH:mm').add(30, 'day')

        poll.expireAt = expire
    }

    if(dayjs(poll.expireAt).isBefore(dayjs())) {
        res.sendStatus(403)
        return
    }

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