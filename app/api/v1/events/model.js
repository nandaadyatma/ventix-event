const { model, Schema, default: mongoose } = require("mongoose");

const ticketCategoriesSchema = new Schema({
    type: {
      type: String,
      required: [true, "Ticket type is required"],
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    statusTicketCategories: {
      type: Boolean,
      enum: [true, false],
      default: true,
    },
    expired: {
      type: Date,
    },
  });

  const EventSchema = Schema({
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: 3,
      maxlength: 50,
    },
    date: {
      type: Date,
      required: [true, "Date is must be filled"],
    },
    about: {
      type: String,
    },
    tagline: {
      type: String,
      required: [true, "Tagline is required"],
    },
    keyPoint: {
      type: [String],
    },
    venueName: {
      type: String,
      required: [true, "Venue name is must be filled"],
    },
    statusEvent: {
      type: String,
      required: [true, "Venue name is must be filled"]
    },
    tickets: {
      type: [ticketCategoriesSchema],
      required: true,
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: "Image",
      required: [true, "Image is required"],
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    talent: {
      type: mongoose.Types.ObjectId,
      ref: "Talent",
      required: [true, "Talent is required"],
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: [true, "Organizer is required"],
    },
  },
  {
      timestamps: true
  });

module.exports = mongoose.model("Event", EventSchema);
