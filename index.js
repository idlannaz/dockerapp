import express from 'express';
const app = express();
app.use(express.json());
const port = 3000;

const whale = [
    { id: 1, name: 'Blue Whale', weight: 200000, length: 30 },
    { id: 2, name: 'Sperm Whale', weight: 80000, length: 20 },
    { id: 3, name: 'Killer Whale', weight: 12000, length: 10 },
];

app.get('/', (req, res) => {
    res.json(whale);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

