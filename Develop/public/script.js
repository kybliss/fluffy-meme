const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3001;

const middleware = (req, res) => {

}

const jsonData = JSON.stringify(data);

fs.writeFileSync(db.json, jsonData);