import express from 'express';
import cors from 'cors';
import corsSettings from './settings/corsSettings.js'
import taskRouter from './routes/task.js';

const app = express();
app.use(cors(corsSettings));
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => console.log('LISTENING ON PORT', PORT))

app.get('/', (req, res) => {
    res.send('Hello');
}) 

app.use('/api', taskRouter);