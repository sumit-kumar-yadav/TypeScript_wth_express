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
Object.defineProperty(exports, "__esModule", { value: true });
const Contact = require('../../../models/contact');
const fetchContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // This creates the table if it doesn't exist (and does nothing if it already exists)
        yield Contact.sync();
        // Find all the contact lists and return them
        let contacts = yield Contact.findAll();
        return res.status(200).json({
            message: "All contacts",
            data: contacts
        });
    }
    catch (err) {
        console.log("Error in home controller", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Inside the body", req.body);
        // This creates the table, dropping it first if it already existed
        yield Contact.sync();
        // Create a contact
        let contact = yield Contact.create({
            name: req.body.name,
            mobile_no: req.body.mobileNo
        });
        contact = contact.toJSON();
        // console.log("New contact created: ", contact);
        return res.status(200).json({
            message: "New contact created",
            data: contact
        });
    }
    catch (err) {
        console.log("Error in creating a contact", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});
module.exports = {
    fetchContacts,
    createContact
};
