import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('server is ready');
})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'joke 1'
        },
        {
            id: 2,
            title: 'joke 2'
        },
        {
            id: 3,
            title: 'joke 3'
        }
    ]
    res.send(jokes)
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` listening on ${PORT}`)
})