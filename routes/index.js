import http from "http";
// import { config } from "dotenv";
// import * as logger from "./utils/logger.js";
import app from "../server.js";

// if (process.env.NODE_ENV !== "production") {
//   config();
// // }
// const server = http.createServer((app)=>{
//     res.setHeader
// });
const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Hello World!');
  });
  
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });


// server.listen(PORT, () => {
//   logger.info(`Server running on port ${PORT}`);
// });