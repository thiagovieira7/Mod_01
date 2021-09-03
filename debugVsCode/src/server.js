import express from "express";

const app = express();

app.get("/", (req, res) => {
    const users = ["Thiago", "Gabriel", "Kivia", "Bella"];

    return res.json({ users });
});

app.listen(3333);
