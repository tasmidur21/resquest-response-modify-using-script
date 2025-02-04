const express = require("express");
const app = express();

app.use(express.json());

// Sample API Endpoint
app.get("/api/data", (req, res) => {
    console.log("header",req.headers);
    
    res.json({ message: "Hello from Backend" });
});

// Endpoint to receive GitHub data from KrakenD
app.post("/process-repos", (req, res) => {
   try {
    console.log("Received GitHub data from KrakenD:", req.headers);
    res.json({
        message: "Processed GitHub Repositories",
        repositories: {}
    });
   } catch (error) {
    res.json({
        message: "Error processing GitHub Repositories",
    })
   }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
