import cors from "cors";
import express from "express";
import fs from "fs";
import https from "https";

import router from "./routes.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(3050, () => console.log("Api rodando!"));

https
  .createServer(
    {
      cert: fs.readFileSync("src/SSL/code.crt"),
      key: fs.readFileSync("src/SSL/code.key"),
    },
    app
  )
  .listen(3051, () => console.log("Rodando em HTPPS!"));
