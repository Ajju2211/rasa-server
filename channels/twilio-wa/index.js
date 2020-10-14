
module.exports.handleIncomingMessage = (req, res, rasa, helper, parser) => {
  const body = req.body;
  let warning_messages =
    "I can understand only text and support image and current location on Twilio-whatsapp!";
  // text message
  if (body.NumMedia === "0") {
    // current Location
    if (typeof body.Latitude != "undefined") {
      let location = {
        lat: body.Latitude,
        lon: body.Longitude,
      };
      return helper.sendCurrentLocation(req, res, location, rasa, parser);
    }
    // If user sends Live Location, which is unsupported
    if (body.Body.length < 1) {
      return helper.sendUnsupportedWarning(req, res, warning_messages);
    }
    if (body.Body.length > 1) {
      return helper.sendText(req, res, body.Body, rasa, parser);
    }
    // If any other unknown
    else {
      return helper.sendUnsupportedWarning(req, res, warning_messages);
    }
  }

  // Media message
  if (body.NumMedia === "1") {
      const type = body.MediaContentType0.split("/")[0];
      const message = body.Body;
      const mediaUrl = body.MediaUrl0;
      if(type === "image"){
        //   implement save image in cloud storage
        // return sendImage(req, res, {image:mediaUrl,text:message});
        return helper.sendUnsupportedWarning(req, res, warning_messages);
      }
      if(type === "audio"){
        //   implement convert text from the audio
        // return sendText(req, res, message.trim(), rasa, parser);
        return helper.sendUnsupportedWarning(req, res, warning_messages);
      }
      if(type === "video"){
        //   Unsupported Media
        return helper.sendUnsupportedWarning(req, res, warning_messages);
      }
      else{
        //   If any other Unknown
        return helper.sendUnsupportedWarning(req, res, warning_messages);
      }
  }
};
