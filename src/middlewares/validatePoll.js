import pollSchema from "../schemas/pollSchema.js"

export default function validatePoll(req, res, next) {
    const validation = pollSchema.validate(req.body)

    if (validation.error) {
        res.sendStatus(422)
        return
    }

    next()
}