const express = require("express");
const hash = require("object-hash");
const { createHash } = require("crypto");
const app = express();
const port = 3000;
const key = {
  where: {
    user: {
      id: 1,
    },
  },
  orderBy: {
    id: "ASC",
  },
};

app.get("/sha", (req, res) => {
  const value = createHash("sha256").update(JSON.stringify(key)).digest("hex");
  res.send("Benchmark for crypto sha: " + value);
});

app.get("/object-hash", (req, res) => {
  const value = hash(key);
  res.send("Benchmark for object-hash: " + value);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
