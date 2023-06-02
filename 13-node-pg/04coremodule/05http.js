const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;

  console.log(request.url);

  if (url === "/") {
    fstat.readFile('index.html', (error,file) => {
        if(error) {
            response.writeHead(500, { "content-type": "text/html" });
            response.end("<h1>Sorry, we have a problem</h1>"); 

        } else {
            response.writeHead(200, { "content-type": "text/html" });
            response.end(file);

        }
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Welcome</h1>");
  } else if (url === "/about") {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>About</h1>");
  } else {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Page not found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
