const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let hello = {
        message: "Hello from Onebitcode!",
        date: new Date().toLocaleDateString(),
    };
    res.json(hello);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
