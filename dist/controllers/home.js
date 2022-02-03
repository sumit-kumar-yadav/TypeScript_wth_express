"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeController = (req, res) => {
    try {
        // res.send("Hey!!! It's running fine with MVC structure");
        return res.render('home', {
            title: 'Welcome'
        });
    }
    catch (err) {
        console.log("Error in home controller", err);
    }
};
module.exports = {
    homeController
};
