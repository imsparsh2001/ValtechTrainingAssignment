const express = require("express");
const config = require("./config.json");
const app = express();
const fs = require("node:fs"); 
let pugData = require("./pugdata.json")



// configuration
app.use(express.urlencoded({ extended : true }));

// array to store Avenger data
let avengerData = pugData.avengers;

app.get("/", (req, res) => {
  res.render("pugApplication.pug", { pugData }); 
  });
  
  app.post("/", (req, res) => {

    // Extract Avenger data from the form and create a new Avenger object
    const newAvenger = {
      title: req.body.title,
      firstName: req.body.firstName, 
      lastName: req.body.lastName,   
      power: req.body.power,
      city: req.body.city,
    };

    // Add the new Avenger to the avengerData array
    avengerData.push(newAvenger);
    pugData.avengers = avengerData;

    fs.writeFileSync("./pugdata.json", JSON.stringify(pugData), "utf8");
    res.redirect("/");
    
  });

  console.log(pugData);

//server configuration
app.listen(config.port,config.host,error => {
    error 
    ? console.log("Error ", error)
    : console.log(`server is now live on ${config.host} : ${config.port}`)
})