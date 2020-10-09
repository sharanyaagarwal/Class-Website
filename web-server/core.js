/**
 * @author Paras Sahu <paras.sahu@vertisystem.com>
 * @package Class Web - Services
 */

// Global base directory
global.__base = __dirname + "/";

// Config and File system modules
const fs = require("fs");

const config = require(__base + "config.js");

//Unhandled Rejection and Uncaught Exception
try {
  process
    .on("unhandledRejection", (reason, p) => {
      console.log(reason, "Unhandled Rejection at Promise", p);
    })
    .on("uncaughtException", (err) => {
      console.log("err.code = ", err);
      if (err.code != "ER_PARSE_ERROR") {
        // stuff apart from parse error.
      }
    });
} catch (e) {
  console.log("ERROR CAUGHT IN REJECTION !");
  console.log("\n \x1b[38m[" + e.message);
}

//Including required node modules

const https = require("https"),
  express = require("express"),
  app = express(),
  server = https.createServer(
    {
      // REQUIRED KEY, CERTIFICATE and CA file for HTTPS SETUP
      key: fs.readFileSync(config.server.ssl.certificate.key),
      cert: fs.readFileSync(config.server.ssl.certificate.cert),
      rejectUnauthorized: config.server.ssl.certificate.rejectUnauthorized,
    },
    app
  ),
  // DEFINING CLOUD SERVER PORT with the help of configuration file, driven from app-config.json
  serverPort = config.server.port,
  cors = require("cors");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());

// Defining Routes
const userRoute = require("./routes/user");

// Associating routes with express server
app.use("/user", userRoute);

app.get("*", (req, res) => {
  console.log("Worker Process = " + process.pid);
  res.send("Worker Process = " + process.pid);
});

app.disable("x-powered-by"); // Disabling http header `x-powered-by`

// Starting to listen Express HTTPS Server on defined port (in config.js)
server.listen(serverPort, () => {
  console.log(`Server started at port: [${serverPort}]`);
}); // starting web server
