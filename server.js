// install axios & https-proxy-agent dulu:
// npm install axios https-proxy-agent

const axios = require("axios");
const HttpsProxyAgent = require("https-proxy-agent");

const proxy = "http://1.1.1.1:8080"; // contoh proxy

async function sendRequestToWA(number) {
  try {
    const agent = new HttpsProxyAgent(proxy);

    const response = await axios.get(
      `https://api.whatsapp.com/send?phone=${number}`,
      { httpsAgent: agent }
    );

    console.log("Respon WhatsApp:", response.status);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

sendRequestToWA("6281234567890");