"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const homeController = (req, res) => {
    try {
        return res.status(200).json({
            msg: "Yeah"
        });
    }
    catch (err) {
        console.log("Error in home controller", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
const PlaceholderInstance = axios_1.default.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Using axios library to fetch data from another server 
        let config = {
            method: 'get',
            url: '/posts'
        };
        const response = yield PlaceholderInstance(config);
        return res.status(200).json({
            message: "Posts fetched successfully",
            data: {
                posts: response.data
            }
        });
    }
    catch (err) {
        console.log("Error while fetching posts through api", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Using axios library to fetch data from another server 
        let config = {
            method: 'post',
            url: '/posts',
            data: {
                title: 'Your Title',
                body: 'This is your added body',
                userId: 201,
            }
        };
        const response = yield PlaceholderInstance(config);
        return res.status(200).json({
            message: "Posts added successfully",
            data: {
                post: response.data
            }
        });
    }
    catch (err) {
        console.log("Eoor in creating new post using api", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});
module.exports = {
    homeController,
    getAllPosts,
    createPost
};
