const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const fs = require("fs");
// const cors = require("cors");
// const proto = require("./proto");

const getSample = (_req, res) => {
  console.log("GETTING");
  res.sendFile("/Users/dan/dev/dan/layout-app2/api/cells.proto/dff.bin");
  // res.sendFile("/Users/dan/dev/dan/layout-app2/api/cells.proto/osci.bin");
};

// app.use(
//     cors({
//       origin: "http://localhost:3000", // restrict calls to those this address
//       methods: "GET" // only allow GET requests
//     })
//   );
// app.get("/", getSample);
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
// module.exports = app;

export default getSample;
