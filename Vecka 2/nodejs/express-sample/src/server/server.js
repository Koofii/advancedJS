const path = require('path'); // en del av express ramverk, därför behöver vi require den.

const express = require('express'); //Express är ifrån npm install express --save och används oftast när man bygger en backend

const app = express ();

// Pathen är slash ifrån rooten och fattar att den ska hämta hem index.js 
app.get('/', (req, res) => {
    const title = 'Koofs Sida';
    
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${title}</title>
        </head>
        <body>
            <div id="heff"></div>
            <p>Hello World!</p>
            <button id="yo">TJENA</button>
            <script src="build/bundle.js"></script>
        </body>
        </html>
    `)
})

app.use(express.json()); //Utökar vår backend med lager. Utan denna kunde vi inte få ut json-data. Den parsear Json

app.use(require('./routes')); // Kollar efter en index-fil i routes-mappen. INTE index.html i public.

// Requests kommer gå enligt nedan och försöka matcha i varje steg. 
// [ routes ] --> [ '/api' ] --> ['/products']

// För statiskt innehåll.
// För första gången en klient surfar in på sidan så skickas en request till static.
app.use(
    // KODEN FATTAR att den ska samarbeta med ovan kod, den läser in htmlkoden i detta fall och sedan fattar den att den ska hämta index.js när vi frågar efterden i html filen.
    express.static(path.join(__dirname, '../../public'))
);

app.listen(8888, () => console.log('Server started'));



// En request kan ta olika routes i backend. Letar efter den mest lämpliga routen. 

// De olika stegen nedan illustrerar de olika stegen en request tar beroende på vad som skall hämtas.

//                  req         req         req
// Express.json() ----> routes ----> static ----> error.
//                <----        <----       <----
//                  res         res         res

// Varje request går igenom varje steg. Även för den simplaste error-meddelandet går den igenom allt 4 steg för att komma till error.
// app.get() ligger mellan routes och static.

// För att hämta static data går vi igenom alla steg ner till static, hämtar hem index-filen i public mappen.
// För att hämta den kopplade JavaScript-filen (frontend) så skickar den en ny request med vad som står enligt index.html och går igenom alla steg igen.