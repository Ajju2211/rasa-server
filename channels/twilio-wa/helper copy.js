// const MessagingResponse = require("twilio").twiml.MessagingResponse;
// const parser = require("xml2json");
// const accountSid = process.env.ACCOUNT_SID ;
// const authToken = process.env.ACCOUNT_TOKEN ;
// const client = require('twilio')(accountSid, authToken,{
//     lazyLoading:true
// });

// function to send message to whatsapp
// const sendMessage = async (message, senderID) => {
//     client.messages
//     .create({
//        body: message,
//        from: 'whatsapp:+14155238886',
//        to: senderID
//      })
//     .then(message => console.log("sent msgId "+message.sid))
//     .catch(err => {console.log("Error while sending message => "+err)})
//     .done();
// };

module.exports.sendUnsupportedWarning = (req, res, warning_messages) => {
  // const twiml = new MessagingResponse();

//   twiml.message();
    // twiml.message(warning_messages);
    

  // res.writeHead(200, { "Content-Type": "text/xml" });
  // res.end(twiml.toString());
  // console.log(twiml);
  // console.log(twiml.toString());
};

module.exports.sendText = (req, res, message, rasa) => {
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
  
  console.log(twiml.toString());
  
};
