import choiceSchema from "../schemas/choiceSchema.js"

export default function validateChoice(req, res, next) {
    const validation = choiceSchema.validate(req.body)

    if (validation.error) {
        res.sendStatus(422)
        return
    }

    next()
}