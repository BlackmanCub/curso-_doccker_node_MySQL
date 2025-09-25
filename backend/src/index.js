const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.send('API backend funcionando'); // corregido res -> response
});

const PORT = process.env.PORT || 3000; // corregido Port -> PORT

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`); // backticks
});
