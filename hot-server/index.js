const express = require('express');
const app = express();
const port = 4000;

var cors = require('cors');
app.use(cors());

app.get('/cows', (req, res) => res.send(['brown', 'white', 'purple']));

app.use(express.static('public'));

app.listen(port, () => console.log(`hot-server is up and running on port ${port}!`));
