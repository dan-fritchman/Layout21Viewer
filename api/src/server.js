const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express().use(cors());

/// Get a/the sample layout
const getSample = (_req, res) => {
  // const sampleFile = path.resolve(__dirname, "../../samples", "dff.bin.gz");
  const sampleFile = path.resolve(__dirname, "../../samples", "secret.bin.gz");
  console.log(`Sending layout sample ${sampleFile}`);

  res.setHeader("Content-Encoding", "gzip");
  res.setHeader(
    "Content-Type",
    "application/protobuf; proto=layout21raw.Library"
  );
  res.sendFile(sampleFile);
};

// Set up the API endpoint
app.get("/api", getSample);

// All other GET requests not handled before will return our app
app.use(express.static(path.resolve(__dirname, "../../app/build")));
app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "../../app/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

module.exports = app;
