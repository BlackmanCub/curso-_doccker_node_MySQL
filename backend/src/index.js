require('dotenv').config();


const express = require('express');
const app = express();
const port=process.env.PORT || 3000;
const jwtSecret=process.env.JWT_SECRET

app.use(express.json());
console.log(jwtSecret);
console.log(port);

app.get("/", (request, response) => {
    response.send('API backend funcionando'); // corregido res -> response
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`); // backticks
});
