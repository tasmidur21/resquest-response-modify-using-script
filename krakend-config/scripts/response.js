module.exports = function(response) {
    console.log("Modifying Response...");
    let body = JSON.parse(response.body);
    body["message_by_js"] = "Response Modified by KrakenD + JavaScript";
    response.body = JSON.stringify(body);
    return response;
};
