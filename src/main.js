require("dotenv").config()
const express = require("express");
const { error_handlers } = require("./middleware/handdler.errors");
const { api_routes } = require("./routes")
const { app:{ port } } = require("./config/config")

const app = express();

app.use(express.json());
api_routes(app);

// Middlewares
app.use(error_handlers);

app.listen(port,()=>{
    console.log(`listen on port ${port}`)
});