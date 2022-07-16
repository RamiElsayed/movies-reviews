const express =  require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//use routes

app.listen(PORT, () => 
console.log(`Server running on http://localhost:${PORT}`)
);