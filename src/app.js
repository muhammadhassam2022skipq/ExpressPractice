const express = require("express");
const path = require ("path");
const bodyParser = require('body-parser');
const app= express();
const aboutRoute= require("../routes/about")
console.log (__dirname, "../public");
const staticPath= path.join(__dirname, "../public");
app.use (express.static(staticPath));
app.set ("views", path.join(__dirname, "../views"));
app.set('view engine', 'ejs');


app.use('/', (req, res, next) => {
    res.render('index1', {
    pageTitle: "My Store - Home1 Page",
    people:  [
        {name: "hassam"},
        {name: "hadi"},
        {name: "Ammar"},
        {age: 25}


        
        ]
    });
});

app.use ("about", aboutRoute);
// app.get ("/about", (req, res)=> {
//         res.render("about", {
//             pageTitle:  "About Title",
//             Name: "Hassam"
//               });

// })



app.listen(4000, ()=> {
    console.log(`listening on port ${4000}`);
})