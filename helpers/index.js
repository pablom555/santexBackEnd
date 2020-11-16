const { TOKEN } = require('./../config/config');
const fetch = require("node-fetch");

const createJSONResponse = (ok, message) => {

    let jsonResp = { ok };

    if (!ok) {
        jsonResp.err = message
    } else {
        jsonResp.data = message
    }

    return jsonResp;
}

const fetchingApi = async (url) => {

    let requestOptions = {
        headers: {
            "X-Auth-Token": TOKEN
        }
    };

    try {
        return await fetch(url, requestOptions)        
    } catch (err) {

        return err
    }

}

module.exports = {
    createJSONResponse,
    fetchingApi
}