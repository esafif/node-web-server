const express = reuire(`express`);

var app = express();

app.get('/', (req, res) => {
    res.send('hello express safif');
});

app.listen(3000);