import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('its works');
});

app.listen(3030, () => console.log('RESTful server is running on http://localhost:3030...'));