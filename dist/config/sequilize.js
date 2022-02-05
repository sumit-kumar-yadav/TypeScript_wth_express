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
{
    const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize(process.env.postgeSQLdbName, process.env.postgeSQLuser, process.env.postgeSQLpassword, {
        host: 'localhost',
        dialect: 'postgres'
    });
    (() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield sequelize.authenticate();
            console.log('DB Connection has been established successfully.');
            // await sequelize.sync({ force: true });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }))();
    module.exports = {
        sequelize,
    };
}
