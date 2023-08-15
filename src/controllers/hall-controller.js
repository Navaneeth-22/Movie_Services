const {HallService} = require('../services');

async function getHalls(req, res, next) {
    try {
        const response = await HallService.getHalls();
        res.send(response);
    } catch (error) {
        next(error);
    }
}

async function createHall(req, res, next) {
    try {
        console.log(req.body);
        const response = await HallService.createHall({
            HallName : req.body.HallName,
            seatCount : req.body.seatCount,
            cinemaId : +req.body.cinemaId
        });
        res.send(response);
    } catch (error) {
        console.log("heyeyer")
        next(error);
    }
}

async function updateHall(req, res, next) {
    try {
        const response = await HallService.updateHall(req.params.id, req.body);
        res.send(response);
    } catch (error) {
        next(error);
    }
}

async function deleteHall(req, res, next) {
    try {
        const response = await HallService.deleteHall(req.params.id);
        res.send(response);
    } catch (error) {
        next(error);
    }
}

async function addSeats(req, res, next) {
    try {
        console.log(req.body)
        const response = await HallService.addSeats(req.params.id, {
            seatNumber : req.body.seatNumber,
            seatType : req.body.seatType,
            row : req.body.row,
            columnNo : +req.body.columnNo
        });
        res.send(response);
    } catch (error) {
        next(error);
    }
}

async function getSeats(req, res, next) {
    try {
        const response = await HallService.getSeats(req.params.id);
        res.send(response);
    } catch (error) {
        next(error);
    }
}

async function getSeat(req, res, next) {
    try {
        const response = await HallService.getSeat(req.params.id, req.params.seatId);
        res.send(response);
    } catch (error) {
        next(error);
    }
}

async function updateSeat(req, res, next) {
    try {
        const response = await HallService.updateSeat(req.params.id, req.params.seatId, req.body);
        res.send(response);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getHalls,
    createHall,
    updateHall,
    deleteHall,
    addSeats,
    getSeats,
    getSeat,
    updateSeat
}


