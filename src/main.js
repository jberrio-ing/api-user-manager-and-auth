const express = require("express");
const { error_handlers } = require("./middleware/handdler.errors");
const { api_routes } = require("./routes")

const app = express();

app.use(express.json());
api_routes(app);

// Middlewares
app.use(error_handlers);

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`listen on port ${port}`)
});