const express = reuire(`express`);

var app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});

app.listen(3000);