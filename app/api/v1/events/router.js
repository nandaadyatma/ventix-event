const express = require('express');

const router = express.Router()

const {
    createAnEvent,
    getEvents,
    getEventById,
    deleteEvent,
    updateEvent,
} = require('./controller')

router.get("/events", getEvents)
router.get("/events/:id", getEventById)
router.post("/events", createAnEvent)
router.put("/events/:id", updateEvent)
router.delete("/events/:id", deleteEvent)

module.exports = router;