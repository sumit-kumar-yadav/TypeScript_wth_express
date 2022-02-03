
import { Request, Response, NextFunction } from 'express';

const homeController = (req: Request , res: Response)=>{
    try{
        // res.send("Hey!!! It's running fine with MVC structure");
        return res.render('home', {
            title: 'Welcome'
        });
    }catch(err){
        console.log("Error in home controller", err);
    }
}

module.exports = {
    homeController
}