const express = require('express');
const app = express();
const pets = require('./petData.js')

// Get All Pets
// in '/pets'
app.get('/pets', (req, res) => {
    const petListHTML = pets.map((pet) => `
    <div>
        <h2>${pet.name}</h2>
    </div>
    `).join(' ');

const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Pet List</title>
    </head>
    <body>
        <h1>Pet List</h1>
        ${petListHTML}
    </body>
    </html>
`;
    res.send(html);
});

app.get('/pets/:name', (req, res) => {
    const petName = req.params.name;
    const pet = pets.find((pet) => pet.name === petName);

    const petHTML = `
        <div>
            <h2>Name: ${pet.name}</h2>
            <h3>Pet's age: ${pet.age}</h3>
            <h3>
        </div>
    `
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})