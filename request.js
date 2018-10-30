var request = require('request');
// gets the "request" open source project on GitHub
var fs = require('fs');
// used to read files
request.get('https://sytantris.github.io/http-examples/future.jpg')
// gets the link
       .on('error', function (err) {
         throw err;                           // on error, return an error
       })
       .on('response', function (response) {  // on a response...
         console.log('Response Status Code: ', response.statusMessage,); //log the response status code
         console.log('Content Type: ', response.headers['content-type']); // log the content type
         console.log("Downloading image..."); // inform that an image is being downloaded
         response.on("end", function () {     // on the end response..
          //
          console.log("Download finished.")   // log "download finished"
         })
       })
       .pipe(fs.createWriteStream('./future.jpg')); // write the file to the specified location
