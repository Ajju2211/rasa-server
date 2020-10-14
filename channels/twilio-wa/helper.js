
const MessagingResponse = require("twilio").twiml.MessagingResponse;
module.exports.sendUnsupportedWarning = (req, res, warning_messages) => {
  const twiml = new MessagingResponse();
  twiml.message(warning_messages);
    
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
  
};

module.exports.sendText = (req, res, message, rasa, parser) => {
  // const twiml = new MessagingResponse();
  // const messageObj = twiml.message();
  // messageObj.body(message);
  
  // messageObj.media("https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  res.writeHead(200, { "Content-Type": "text/xml" });
  
  // messageObj.body(message);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Message>
      <Body>Hio</Body>
    </Message>
    <Message>
      <Body>Hey this is taken from serer side</Body>
    </Message>
  </Response>`;

  
  // res.end(twiml.toString());
  res.end(xml);
  
  
  
};
