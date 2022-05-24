const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/config/.env') });
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./db');
const Router = require('./routes/bookmarks');
const authRouter = require('./routes/auth');
const scrape = require('./routes/scrape');

app.use(cors({
    credentials: true,
    origin: '*',
    optionsSuccessStatus: 200
}))
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);
app.use(Router)
app.use(scrape);


app.listen(PORT, () => {
    console.log(`Lune is running on port ${PORT}`);
})