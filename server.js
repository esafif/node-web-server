const express = require(`express`);
const hbs = require('hbs');


var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    //res.send('<h1>hello express safif</h1>');
    // res.send({
    //     name: 'safif',
    //     likes: [
    //         'coding',
    //         'programming'
    //     ]
    // });

    res.render('home.hbs', {
        pageTitle: 'Home',
        wellcomeMessagae: 'Selamat datang safif',
        currentYear: new Date().getFullYear()
    });

});

app.get('/about', (req, res) =>{
    res.render('about.hbs', {
        pageTitle: 'Safif',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) =>{
    res.send({
        errorMessage: "Unable to handle request"
    });
});

app.listen(3000, () =>{
    console.log("Server run in local");
});