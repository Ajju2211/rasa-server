const tw_wa = require("../../channels/twilio-wa/index");
const rasa = require("../../channels/twilio-wa/rasa");
const helper = require("../../channels/twilio-wa/helper");
const parser = require("xml2json");
module.exports = async (req, res) =>{
    try {
        await tw_wa.handleIncomingMessage(req, res, rasa, helper, parser);
    } catch (error) {
        console.error(error);
        console.log(error.stack);
    }
    

}

