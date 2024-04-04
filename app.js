const http = require('http'); // Import the Node.js HTTP module
const fs = require('fs'); // Import the Node.js file system module
const port = 3000; // Define the port number on which the server will listen

// Create a HTTP server
const server = http.createServer(function(req, res) {
  // Set the response header with status code 200 and content type as text/html
  res.writeHead(200 , { 'Content-Type': 'text/html' });

  // Read the content of index.html file
  fs.readFile('index.html', function(error, data) {
    if (error) {
      // If error occurs while reading the file, respond with status code 404 and error message
      res.writeHead(404);
      res.write('Error: File Not Found');
    } else {
      // If file is successfully read, write its content to the response
      res.write(data);
    }
    // End the response
    res.end();
  });
});

// Start the server and listen on the specified port
server.listen(port, function(error) {
  if (error) {
    // If error occurs while starting the server, log the error message
    console.log('Something went wrong', error);
  } else {
    // If server starts successfully, log a success message with the port number
    console.log('⚡️ Server is listening on port ' + port);
  }
});