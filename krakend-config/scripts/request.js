module.exports = function(request) {
    console.log("Modifying Request...");
    request.headers["X-JS-Header"] = "ModifiedByJS";
    return request;
};
