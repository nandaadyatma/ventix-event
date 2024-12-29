const {
    createEvent,
    getAllEvents,
    getOneEventById,
    deleteEventById,
    updateEventById,
} = require('../../../services/mongoose/event')

const { StatusCodes } = require('http-status-codes')

const createAnEvent = async (req, res, next) => {
    try {
        const result = await createEvent(req);

        return res.status(StatusCodes.CREATED).json({
            error: false,
            message: "Event successfully created",
            data: result,
        })
        
    } catch (error) {
        next(error)
    }
}

const getEvents = async (req, res, next) => {
    try {
        const result = await getAllEvents(req);

        return res.status(StatusCodes.OK).json({
            error: false,
            message: "Get all events successfully",
            data: result,
        })
    } catch (error) {
        next (error)
    }
}

const getEventById = async (req, res, next) => {
    try {
        const result = await getOneEventById(req);

        return res.status(StatusCodes.OK).json({
            error: false,
            message: "Get event successfully",
            data: result,
        })
        
    } catch (error) {
        next (error)
    }
}

const deleteEvent = async (req, res, next) => {
    try {
        const result = await deleteEventById(req);

        return res.status(StatusCodes.OK).json({
            error: false,
            message: "Delete event successfully",
            data: result,

        });

    } catch (error) {
        next (error)
    }
}

const updateEvent = async (req, res, next) => {
    try {
        const result = await updateEventById(req)

        return res.status(StatusCodes.OK).json({
            error: false,
            message: "Update event successfully",
            data: result,

        });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createAnEvent,
    getEvents,
    getEventById,
    deleteEvent,
    updateEvent,
}