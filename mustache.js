var Mustache = require("mustache");
var result = Mustache.render("Hi, {{First}} {{Last}}!", {
    First: "Nicholas",
    Last: "Cage"
});

console.log(result);


