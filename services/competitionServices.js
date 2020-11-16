'use strict';

const Competition = require('../model/competition');

const saveCompetition = async (compData) => {

    // Object a retornar
    let response = {
        err: null,
        compDB: null
    };

    let comp = new Competition();

    comp.name = compData.name;
    comp.code = compData.code;
    comp.areaName = compData.areaName;

    try {

        const compDB = await comp.save();
        response.compDB = compDB;
        return response;

    } catch (err) {

        response.err = { status: 500, message: err.message };
        return response;
    }

}


module.exports = {
    saveCompetition
}