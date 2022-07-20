const express = require ("express");
const router= express.Router();

router.get("/about", (req,res)=> {
    res.render("about", {
        pageTitle:  "About Title",
        Name: "Hassam"
    });
});

module.exports= router;
