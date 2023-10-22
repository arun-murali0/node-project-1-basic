import express from "express";
const router = express.Router();
import {
  getContacts,
  getSingleContact,
  createContacts,
  updateContacts,
  deleteContacts,
} from "../controller/Contacts.js";

router.get("/api/contacts", getContacts);
router.get("/api/contacts/:id", getSingleContact);
router.post("/api/createContacts", createContacts);
router.put("/api/updateContacts/:id", updateContacts);
router.delete("/api/deleteContacts/:id", deleteContacts);

export default router;
