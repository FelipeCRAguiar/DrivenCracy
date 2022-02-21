import { ObjectId } from 'mongodb'
import db from '../db.js'
import dayjs from 'dayjs'

export async function postVote(req, res) {
    const choiceId = id.params

    try {
        
        const choice = await db.collection('choices').findOne({ _id: new ObjectId(choiceId)})

        if(!choice) {
            res.sendStatus(404)
            return
        }

        const poll = await db.collection('polls').findOne({_id: new ObjectId(choice.pollId)})

        if(poll.expireAt.isBefore(dayjs())) {
            res.sendStatus(403)
            return
        }

        const result = await db.collection('results').findOne({ choiceId: new ObjectId(choiceId)})

        if(!result) {
            const vote = {choiceId: choiceId, pollId: choice.pollId , votes: 1}

            await db.collection('results').insertOne(vote)

            res.sendStatus(201)
        } else {
            const counter = result.votes + 1

            await db.collection('results').updateOne({ _id: result._id}, {$set: {votes: counter}})

            res.sendStatus(201)
        }

    } catch (error) {
        res.sendStatus(500)
    }
}

export async function getVotes(req, res) {
    const pollId = id.params

    try {
        
        const poll = await db.collection('polls').findOne({ _id: new ObjectId(pollId)})

        if(!poll) {
            res.sendStatus(404)
            return
        }
        
        const resultList = await db.collection('results').find({ pollId: pollId}).toArray()
        let winner = resultList[0]

        for(let i = 0; i < resultList.length; i++) {
            if (resultList[i].votes > winner.votes) {
                winner = resultList[i]
            }
        }

        const choice = await db.collection('choices').findOne({ _id: new ObjectId(winner.choiceId)})

        const finalResult = {...poll, result: {title: choice.title, votes: winner.votes}}

        res.send(finalResult).status(201)

    } catch (error) {
        res.sendStatus(500)
    }
}