import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import corsSettings from './settings/corsSettings.js'
import taskRouter from './routes/task.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use('/static', express.static(path.join(__dirname, '/public')));
app.use(cors(corsSettings));
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => console.log('LISTENING ON PORT', PORT))

app.get('/', (req, res) => {
    res.render('home');
})

app.use('/api/task', taskRouter);