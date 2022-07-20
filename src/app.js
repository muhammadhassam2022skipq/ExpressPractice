const express = require("express");
const path = require ("path");
const bodyParser = require('body-parser');
const app= express();
const aboutRoute= require("../routes/about")
console.log (__dirname, "../public");
const staticPath= path.join(__dirname, "../public");
app.use (express.static(staticPath));
app.set ("views", "../views");
app.set('view engine', 'ejs');


app.use('/', (req, res, next) => {
    res.render('index1', {
        pageTitle: "My Store - Home Page"
    });
});

app.use ("/about", aboutRoute);



app.listen(4000, ()=> {
    console.log(`listening on port ${4000}`);
})