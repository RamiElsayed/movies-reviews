const express =  require('express');
const db = require('./middleware/DB');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(db)

app.listen(PORT, () => 
console.log(`Server running on http://localhost:${PORT}`)
);