const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000

const app = express();


const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03');
const ta04Routes = require('./routes/ta04');
const pr09Routes = require('./routes/pr09');

app.use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

.use(bodyParser({ extended: false }))
    .use('/ta01', ta01Routes)
    .use('/ta02', ta02Routes)
    .use('/ta03', ta03Routes)
    .use('/ta04', ta04Routes)
    .use('/pr09', pr09Routes)
    .get('/', (req, res, next) => {

        res.render('pages/index', { title: 'Welcome to my CSE341 repo', path: '/' });
    })
    .use((req, res, next) => {

        res.render('pages/404', { title: '404 - Page Not Found', path: req.url })
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));