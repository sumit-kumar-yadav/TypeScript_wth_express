
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

const homeController = (req: Request , res: Response)=>{
    try{
        return res.status(200).json({
            msg: "Yeah"
        });
    }catch(err){
        console.log("Error in home controller", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

const PlaceholderInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

const getAllPosts = async (req: Request, res: Response)=>{
    try{
        // Using axios library to fetch data from another server 
        let config: any = {
            method: 'get',
            url: '/posts'
        }
        const response = await PlaceholderInstance(config);
        return res.status(200).json({
            message: "Posts fetched successfully",
            data: {
                posts: response.data
            }
        });

    }catch(err){
        console.log("Error while fetching posts through api", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

const createPost =async (req: Request, res: Response) => {
    try{
        // Using axios library to fetch data from another server 
        let config: any = {
            method: 'post',
            url: '/posts',
            data: {
                title: 'Your Title',
                body: 'This is your added body',
                userId: 201,
            }
        }
        const response = await PlaceholderInstance(config);
        return res.status(200).json({
            message: "Posts added successfully",
            data: {
                post: response.data
            }
        });
    }
    catch(err){
        console.log("Eoor in creating new post using api", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = {
    homeController,
    getAllPosts,
    createPost
}