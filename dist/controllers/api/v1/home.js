"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeController = (req, res) => {
    try {
        return res.status(200).json({
            msg: "Yeah"
        });
    }
    catch (err) {
        console.log("Error in home controller", err);
    }
};
module.exports = {
    homeController
};
