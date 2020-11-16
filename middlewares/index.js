const Competition = require('../model/competition');
const { createJSONResponse } = require('../helpers/index');

const verifyCodeLeague = async (req, res, next) => {

    let leagueCode = req.params.leagueCode.toUpperCase();

    // Valida existencia en BBDD
    const compDB = await Competition.findOne({ code: leagueCode })
    
    if (compDB) return res.status(409).json(createJSONResponse(false, "League already imported"));

    next();

}

module.exports = {
    verifyCodeLeague
}