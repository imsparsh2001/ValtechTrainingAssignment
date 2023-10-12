const fs = require("node:fs");
const herolist = require("./assets/herolist.json");
const data = require("./data/data.json");
const cities = require("./data/city.json");
const heroImages = require("./data/hero_images.json");



//Generating Random hero title
const heroTitle = herolist[Math.round(Math.random() * herolist.length)];

//Generating Random hero Power
const heroPower = Math.round(Math.random() * 100) ;

//Generating Random hero city
const heroCity = cities[Math.round(Math.random() * cities.length )].city;

const heroPoster = heroImages[heroTitle];


const newHero = {
    "title": heroTitle,
    "power": heroPower,
    "city": heroCity,
    "poster": heroPoster
};

data.avengers.push(newHero);

fs.writeFileSync("data/data.json", JSON.stringify(data), "utf-8");

console.log("Updated Data: ", data);
