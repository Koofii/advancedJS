// Enkelt exempel på en webserver som serverar en webbfil.

const http = require('http'); //nu kan jag använda allt som innebär http i node.js
const fs = require('fs'); //annat paket i node.js
const path = require('path')


const readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(
            path.join(__dirname, './ladda.jpg'),
            (err, data) => { //om error inte är något så är det null, om fel slängs så är data oftast null också.
                let status;
                let response;
                let contentType;
    
                if (err){
                    status      = 500; //500 är http internal server error
                    response    = JSON.stringify({
                        error: 'Could not read file'
                    });
                    contentType = 'application/json';
                    reject({
                        status,
                        contentType,
                        response
                    })
                } else {
                    status      = 200;
                    response    = data;
                    contentType = 'image/jpg';
                    
                    resolve({
                        status,
                        contentType,
                        response
                    })
                }
            }
        )
    })
}


const server = http.createServer((req, res) => {
    readFile()
        .then(({status, contentType, response}) => { //destructing object in .then from promise
            res.writeHead(
                status,
                {'Content-Type': contentType}
            );
            res.end(response)
        })
});

server.listen(8888, () => console.log('Server started'))


// Kan läsa in till exempel bilder med FS (file system) som är ett paket av NODE.js