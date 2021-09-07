import Casts from "../models/Casts.js";

export const getCasts = async (req, res) => {
    try {
        const casts = await Casts.findAll();
        res.send(casts);
    } catch (err) {
        console.log(err);
    }
}

export const getCastById = async (req, res) => {
    try {
        const casts = await Casts.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(casts[0]);
    } catch (err) {
        console.log(err);
    }
}

export const createCast = async (req, res) => {
    try {
        await Casts.create(req.body);
        res.json({
            "message": "Cast Added"
        });
    } catch (err) {
        console.log(err);
    }
}

export const updateCast = async (req, res) => {
    try {
        await Casts.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Cast Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

export const deleteCast = async (req, res) => {
    try {
        await Casts.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Cast Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}