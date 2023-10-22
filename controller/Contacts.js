import asyncHandler from "express-async-handler";
import contacts from "../models/contactsModels.js";

export const getContacts = asyncHandler(async (req, res) => {
  const contact = await contacts.find();

  res.status(200).json({ message: "all contacts", data: contact });
});

export const getSingleContact = asyncHandler(async (req, res) => {
  const contact = await contacts.findById(req.params.id);
  if (!contact) {
    res.status(404).json("not found");
  }
  res
    .status(200)
    .json({ message: "contacts details for given name", data: contact });
});

export const createContacts = asyncHandler(async (req, res) => {
  const { name, mobile, email } = req.body;
  if (!name && !mobile && !city) {
    res.status(401).res.json("All fields are mandatory");
  }

  const contact = await contacts.create({
    name,
    email,
    mobile,
  });

  res
    .status(201)
    .json({ message: "contacts created successfully", data: contact });
});

export const updateContacts = asyncHandler(async (req, res) => {
  const contact = await contacts.findById(req.params.id);
  if (!contact) {
    console.log("contacts not found");
  }
  const updatedContacts = await contacts.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json({ message: "updated contacts", data: updatedContacts });
});

export const deleteContacts = asyncHandler(async (req, res) => {
  const contact = await contacts.findById(req.params.id);

  if (!contact) {
    console.log("no record found");
  }

  await contacts.deleteOne( contact );

  res
    .status(200)
    .json(`contacts deleted successfully for given data:${req.params.id}`);
});
