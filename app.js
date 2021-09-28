const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// headers (exemplo de middleware)
// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host', req.hostname);
//     console.log('path', req.path);
//     console.log('method', req.method);
//     next();
// });


// middleware & static files
// css, images, etc
app.use(express.static('public'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'Mario finds start', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
    ]
    res.render('index', {title: 'Home', blogs: blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'});
})

// 404 - tem que ficar no final do código senão vai impedir o "match" das outras páginas
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
})

// redirecting
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });