const MessagingResponse = require("twilio").twiml.MessagingResponse;
module.exports.sendUnsupportedWarning = (req, res, warning_messages) => {
  const twiml = new MessagingResponse();
  twiml.message(warning_messages);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
};

module.exports.sendText = async (req, res, message, rasa, parser) => {
  const senderId = res.user.phno;
  const metadata = res.user;
  const botRes = await rasa.sendMessage(
    senderId,
    message,
    metadata,
    "whatsapp"
  );
  // console.log(botRes);
  

  await sendTwilioResponse(req, res, botRes,parser);

};

module.exports.sendCurrentLocation = (req, res, location, rasa, parser) => {
  // save current location inside the metadata of rasa
  const twiml = new MessagingResponse();
  twiml.message(
    `We have received your location lat: ${location.lat} ,lon: ${location.lon}`
  );

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
};

async function sendTwilioResponse(req, res, botRes, parser){
  let twRes = { Response: { Message: [] } };
  botRes.forEach(async (resp) => {
    if (resp.hasOwnProperty("custom")) {
      let custom_resp = resp["custom"];
      if (custom_resp["platform"] === "whatsapp") {
        // text
        if (custom_resp["payload"] === "text") {
          twRes.Response.Message.push({
            Body: { $t: custom_resp["text"] },
          });
          console.log(twRes);
        }

        // image
        if (custom_resp["payload"] === "image") {
          custom_resp["data"].forEach( img_resp => {
            let text = img_resp["text"];
            twRes.Response.Message.push({
              Body: { $t: text },
              Media: { $t: img_resp["url"] },
            });
          });
        }
      }
    }
  });
  res.writeHead(200, { "Content-Type": "text/xml" });

  // messageObj.body(message);
  // const xml = `<?xml version="1.0" encoding="UTF-8"?>
  // <Response>
  //   <Message>
  //     <Body>Hio</Body>
  //   </Message>
  //   <Message>
  //     <Body>Hey this is taken from serer side</Body>
  //   </Message>
  // </Response>`;
  const xml = parser.toXml(JSON.stringify(await twRes));

  // res.end(twiml.toString());
  console.log(xml);
  res.end(xml);
}
