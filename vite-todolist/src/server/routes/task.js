import express from 'express';

const taskRouter = express.Router();

taskRouter.get('/task', (req, res) => {
    res.send('from /task');
})

export default taskRouter;