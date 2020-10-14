const parser = require("xml2json");
const xml = "<Response><Message><Body>hi</Body><Media>url</Media></Message><Message><Body>hi1</Body><Media>url1</Media></Message></Response>";
const js = JSON.parse(parser.toJson(xml, {reversible:true}));
const message = {
    "Body":{
        "$t":"hi2"
    },
    "Media":{
        "$t":"url2"
    }
};
js.Response.Message.push(message);
console.log(JSON.stringify(js));
const xml2 = parser.toXml(JSON.stringify(js));
console.log(xml2);
