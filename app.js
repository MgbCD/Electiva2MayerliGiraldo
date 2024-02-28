const express = require("express");
const  taskMangerRoutes = require('./src/routes/taskManagerRouters')


const app = express(); 
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({limit: '50mb', extended: false})); 
app.use('/api/v1', taskMangerRoutes );


app.listen(port, () => {
    console.log( `app listening on port ${port}`);
});