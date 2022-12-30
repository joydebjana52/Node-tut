const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, res) => {
    res.json({
        name: 'Joydeb'
    });
});

const user = {
    id: 1,
    username: 'joy',
    email: 'joy@123'
}
const secretKey = 'secretKey';

app.post('/login', (req, res) => {
    jwt.sign({ user }, secretKey, { expiresIn: '300s' }, (err, token) => {
        res.json({
            token
        })
    })
});

app.listen(5000, () => {
    console.log('app is running on port 5000');
});