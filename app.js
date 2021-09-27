const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});

// redirecting
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 - tem que ficar no final do código senão vai impedir o "match" das outras páginas
app.use('/404', (req, res) => {
    res..status(404).sendFile('./views/404.html', {root: __dirname});
})
