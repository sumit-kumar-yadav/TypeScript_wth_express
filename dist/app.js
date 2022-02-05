"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expressLayouts = require('express-ejs-layouts');
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// DB connection with PostgreSQL using Sequilize
const { sequelize } = require('./config/sequilize');
// Express parser to parse the form data into js object
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');
// Setting layouts for our page
app.use(expressLayouts);
// Extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
// Root router
app.use('/', require('./routes'));
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
}).on("error", (err) => {
    console.log(`Error while running the server: ${err}`);
});
