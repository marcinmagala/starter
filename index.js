const fs = require("fs");
const http = require("http");
const url = require("url");

////////////////////////////////
/////////FILES

// // Synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `This is new text: ${textIn}.\nCreated on ${Date.now()} ///${new Date()}`;
// fs.writeFileSync("./txt/output.txt", textOut);

// // Asynchronous way

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) {
//     return console.log(err);
//   }
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     if (err) {
//       return console.log(err);
//     }
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       if (err) {
//         return console.log(err);
//       }

//       fs.writeFile("./txt/final.txt", data2 + data3, (err) => {
//         if (err) {
//           return console.log(err);
//         }
//         console.log("File was created!");
//       });
//     });
//   });
// });

// console.log("Reading files start.txt...");

////////////////////////////////
/////////SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    res.writeHead("200", { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404);
    res.end("Page not found!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
