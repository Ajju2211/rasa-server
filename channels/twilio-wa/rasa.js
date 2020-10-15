const axios = require("axios");
module.exports.sendMessage = async (senderId, message, metadata, platform) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  };
  const url = process.env.RASA_ENDPOINT+"webhooks/custom_rest/webhook";
  metadata.platform = "whatsapp";
  const data = {
      "sender": senderId,
      "message": message,
      "metadata": metadata
  };
  const resp = await axios.post(url, data, config);
  const bot_res = await resp.data;
  
  return bot_res;
};


