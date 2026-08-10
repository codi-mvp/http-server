import express from "express";

const PORT = 8000

const app = express()

app.get("/", (req, res) => {
    res.send("Ответ на GET запрос")
})

app.post("/inc", (req, res) => {
    res.send("Ответ на POST запрос")
})

app.listen(PORT, () => {
    console.log(`    Server running on http://localhost:${PORT}`)
})