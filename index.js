import express from "express";
import fs from "fs/promises";

const app = express();

let globalCounter = 0;
app.use(async (req, res, next) => {
  globalCounter++;

  console.log(`Запрос на сервер ${req.url}; номер ${globalCounter}`);

    await fs.writeFile("counts.json", JSON.stringify({ globalVisits: globalCounter }), "utf-8");
    
  next();
});

app.get("/", async (req, res) => {
    if (!globalCounter) {
        console.log("Отсутствуют данные о посещениях")
        process.exit(0)
    }
    const data = await fs.readFile("counts.json", "utf-8");
    const count = JSON.parse(data)
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>You ${count.globalVisits} who visit this page!</h1>
    </body>
    </html>
        `);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`    Server running on http://localhost:${PORT}`);
});
