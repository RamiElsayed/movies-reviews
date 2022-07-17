const express =  require('express');

require('dotenv').config();

const db = require('./middleware/db');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(db);
app.use(routes);

app.listen(PORT, () => 
console.log(`Server running on http://localhost:${PORT}`)
);