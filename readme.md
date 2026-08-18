<header>
<div align="center">
  <img src="customize/browser.png" width="300" alt="Browser Preview">
  <h1>Simple HTTP Server 🔌</h1>
  <h2>This <i>HTTP server</i> is written in <b>Node.js</b> with the popular framework <b>Express.js</b>.</h2>

<a> <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB" /> </a>
<a> <img src="https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white" /> </a>
<a> <img src="https://img.shields.io/badge/License-MIT-blue" /> </a></n>
<a href="https://github.com/codi-mvp">
<img src="https://img.shields.io/badge/Author-mRq-181717.svg?logo=github&style=flat" alt="GitHub">
</a>

</div>
</header>

# 💡About Server

## Features

- Starting on port 8000(default), in console you see server logs.
<p>
  <img src="customize/console.png" width="400" alt="Моя гифка">
</p>
- Every request saving to _counter.json_ with time.
<p>
  <img src="customize/json.png" width="400" alt="Моя гифка">
</p>
- The counter resets after every 100 requests, but its last value is preserved.
<p>
  <img src="customize/process.gif" width="400" alt="Моя гифка">
</p>

## API Reference

#### How to test

```http
  GET /
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/codi-mvp/http-server
```

Go to the project directory

```bash
  cd http-server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
