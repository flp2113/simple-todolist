import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import MemDB from '../database/memorydb.js';

const db = new MemDB;
const taskRouter = express.Router();

/*   REQUEST BODY EXAMPLE
    id: uuid()
    task: string
    creation_date: Date()
    isDone: boolean
*/

taskRouter.get('/', (req, res) => {
    res.json(db.getAllTasks());
    res.status(200);
});

taskRouter.get('/:id', (req, res) => {
    res.json(db.getTask(req.params.id));
    res.status(200);
});

taskRouter.post('/', (req, res) => {
    db.createTask({
        id: uuidv4(),
        task: req.body.task,
        creation_date: req.body.creation_date,
        isDone: false
    });
    res.status(200);
});

taskRouter.put('/:id', (req, res) => {
    db.update({id: req.params.id, ...req.body});
    res.status(200);
});

taskRouter.delete('/:id', (req, res) => {
    db.delete(req.params.id);
    res.status(200);
});


export default taskRouter;