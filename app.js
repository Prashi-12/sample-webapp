const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello from Dockerized Node.js App!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
