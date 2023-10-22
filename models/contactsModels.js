import mongoose from "mongoose";
const userContacts = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name"],
    },
    mobile: {
      type: Number,
      required: [true, "please add a Number"],
    },
    email: {
      type: String,
      required: [true, "please add a email address"],
    },
  },
  { timeStamps: true }
);

const contactsDetails = mongoose.model("contactsDetails", userContacts);
export default contactsDetails;
