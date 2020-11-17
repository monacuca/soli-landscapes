// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const { exec } = require("child_process");


// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));


// send the default array of dreams to the webpage
app.get("/trigger", (request, response) => {
  let q = request.query;
  let j = JSON.stringify(q);
  j = j.replace(/'/g,"’"); // sanitize
  let cmd = `curl -X POST -H "Content-Type: application/json" -d '${j}' https://maker.ifttt.com/trigger/${process.env.EVENT_NAME}/with/key/${process.env.API_KEY}`
  console.log(cmd);
  
  exec(cmd, (error, stdout, stderr) => {
    console.log(error,stdout,stderr)
    var o = {};
    if (error) {
        o.error=error.message;
    }
    if (stderr) {
        o.stderr=stderr;
    }
    o.stdout=stdout;
    response.json(o);
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
