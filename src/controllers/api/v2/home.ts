import { Request, Response, NextFunction } from 'express';
const Contact = require('../../../models/contact');

const fetchContacts = async (req: Request , res: Response)=>{
    try{
        // This creates the table if it doesn't exist (and does nothing if it already exists)
        await Contact.sync();

        // Find all the contact lists and return them
        let contacts = await Contact.findAll();

        return res.status(200).json({
            message: "All contacts",
            data: contacts
        });

    }catch(err){
        console.log("Error in home controller", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

const createContact =async (req: Request, res: Response) => {
    try {
        console.log("Inside the body", req.body);

        // This creates the table, dropping it first if it already existed
        await Contact.sync();

        // Create a contact
        let contact = await Contact.create({
            name: req.body.name,
            mobile_no: req.body.mobileNo
        });
        
        contact = contact.toJSON();
        // console.log("New contact created: ", contact);
        return res.status(200).json({
            message: "New contact created",
            data: contact
        });

    } catch (err) {
        console.log("Error in creating a contact", err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = {
    fetchContacts,
    createContact
}