import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import MemDB from '../database/memorydb.js';

const db = new MemDB;
const taskRouter = express.Router();

/*   REQUEST BODY EXAMPLE
    id: uuid()
    task: string
    creation_date: Date()
*/

taskRouter.get('/task', (req, res) => {
    res.json(db.getAllTasks());
    res.status(200);
});

taskRouter.get('/task/:id', (req, res) => {
    res.json(db.getTask(req.params.id));
    res.status(200);
});

taskRouter.post('/task', (req, res) => {
    db.createTask({
        id: uuidv4(),
        task: req.body.task,
        creation_date: req.body.creation_date
    });
    res.status(200);
});

taskRouter.put('/task/:id', (req, res) => {
    db.update({id: req.params.id, ...req.body});
    res.status(200);
});

taskRouter.delete('/task/:id', (req, res) => {
    db.delete(req.params.id);
    res.status(200);
});


export default taskRouter;