'use strict';

const { createJSONResponse, fetchingApi } = require('../helpers/index');
const { saveCompetition } = require('../services/competitionServices');
const { URL_FOOTBALL } = require('./../config/config');

const importLeague = (req, res) => {
    console.log('LLEga');
    let leagueCode = req.params.leagueCode.toUpperCase();

    fetchingApi(`${URL_FOOTBALL}/${leagueCode}`)
        .then(response => response.json())
        .then(data => {
            
            if (data.error || data.errorCode) {
                throw new Error("Not Found")
            } 

            console.log('Sigue??');

            let compdata = {
                name: data.name,
                code: data.code,
                areaName: data.area.name
            }

            return saveCompetition(compdata)
          
        })
        .then((result) => {

            const { err, compDB } = result;

            if (err) return res.status(err.status).json(createJSONResponse(false, err.message));

            return res.status(201).json(createJSONResponse(true, compDB))

        })
        .catch((err) => {
            console.log(err.message)
            return res.status(404).json(createJSONResponse(false, err.message))
        });

}


module.exports = {
    importLeague
};