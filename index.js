import { count, countReset } from "console";
import express from "express";
import { readFile } from "fs";
import fs from "fs/promises";
import readLastLines from "read-last-lines";

const app = express();

function getTime() {
  const fullStr = new Date().toLocaleString("ru-RU");
  const [date, time] = fullStr.replace(",", "").split(" ");

  return { date: date, time: time };
}

async function readJson(fileName) {
  try {
    const lastLine = await readLastLines.read(fileName, 1);

    if (!lastLine || !lastLine.trim()) {
      return null;
    }

    return JSON.parse(lastLine);
  } catch (error) {
    return null;
  }
}
let globalCounter = 0;

async function writeJson(fileName, data, dataName = "data") {
  const time = getTime();

  const row = { [dataName]: data, time: time };
  if (globalCounter % 100 === 0) {
    await fs.writeFile(fileName, JSON.stringify(row) + "\n", "utf-8");
  }
  else {
    await fs.appendFile(fileName, JSON.stringify(row) + "\n", "utf-8");
  }
}

async function initServer() {
  const logs = await readJson("counter.json");

  if (logs && logs.globalVisits) {
    globalCounter = logs.globalVisits;
  }
}
app.use(async (req, res, next) => {
  if (req.url === "/favicon.ico") return next();

  globalCounter++;

  console.log(`Запрос на сервер ${req.url}; номер ${globalCounter}`);
  if (globalCounter % 100 === 0) {
    console.log(`_____COUNTER WAS RESET AT ${globalCounter} VISITS`);
  }
  await writeJson("counter.json", globalCounter, "globalVisits");

  

  next();
});

app.get("/", async (req, res) => {
  if (!globalCounter) {
    console.log("Отсутствуют данные о посещениях");
    process.exit(0);
  }
  const obj = await readJson("counter.json");
  const visits = obj ? obj.globalVisits : globalCounter;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>You ${visits} who visit this page!</h1>
    </body>
    </html>
        `);
});

initServer()
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`    Server running on http://localhost:${PORT}`);
});
