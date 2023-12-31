const fs = require("fs");
const https = require("https");

const options = {
    key: Buffer.from(process.env.PRIVATE_KEY).toString("utf-8").replaceAll("\\n", "\n"),
    cert: fs.readFileSync("./cert/cert.pem")
};
const serverSecure = https.createServer(options);
serverSecure.on("request", (request, response) => {
    const contentType = "application/json";
    const apiResponse = "{\"api\": \"coming soon...\"}";
    response.writeHead(200, {
        "content-type": contentType
    });
    response.end(apiResponse);
    return response;
});
serverSecure.listen(443);
console.log("Web server (secured) is now running...");
