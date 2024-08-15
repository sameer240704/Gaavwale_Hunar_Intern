require('dotenv').config();
const express = require('express');
const { connectToDatabase } = require('./database/db');
const userRoutes = require("./routes/user.routes.js");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Connection to Database MongoDB
connectToDatabase();

// Routes
app.use('/user', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server live on port ${process.env.PORT}`)
})