import express from 'express';
import choiceRouter from './choiceRouter.js';
import pollRouter from './pollRouter.js';
import voteRouter from './voteRouter.js';

const router = express.Router()

router.use(pollRouter)
router.use(choiceRouter)
router.use(voteRouter)

export default router