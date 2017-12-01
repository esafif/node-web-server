const express = require(`express`);
const hbs = require('hbs');


var app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

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
    });

});

app.get('/about', (req, res) =>{
    res.render('about.hbs', {
        pageTitle: 'Safif',
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