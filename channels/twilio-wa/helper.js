const MessagingResponse = require("twilio").twiml.MessagingResponse;
module.exports.sendUnsupportedWarning = (req, res, warning_messages) => {
  // const twiml = new MessagingResponse();
  // twiml.message(warning_messages);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(`<Response>
	<Message>
		<Body>select product from above</Body>
		<Media>data:image/jpeg;base64,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</Media>
	</Message>
	<Message>
		<Body>type *back* otherwise</Body>
	</Message>
</Response>`);
  // res.end(twiml.toString());
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
            Body: { $t: custom_resp["text"] }
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
