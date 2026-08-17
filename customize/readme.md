<header>
<div align="center">
<img src="browser.png" widht="25%">
<h1>Simple http server 🔌</h1>

<h2>This *http server* writed on **Node.js** with popular framework **Express.js**.</h2>

<a> <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB" /> </a>
<a> <img src="https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white" /> </a>
<a> <img src="https://img.shields.io/badge/License-MIT-blue" /> </a></n>
<a href="https://github.com">
  <img src="https://img.shields.io/badge/Author-mRq-181717.svg?logo=github&style=flat" alt="GitHub">
</a>

</div>
</header>

# 💡About Server

## Features

- Starting on port 8000(default), in console you see server logs.
![console](console.png)
- Every request saving to *counter.json* with time.
![json_logs](json.png)
- The counter resets after every 100 requests, but its last value is preserved.
<video src="process.mp4" width="100%" controls></video>

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

