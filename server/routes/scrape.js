const express = require('express');
const scrapeRouter = express.Router();
const scraper = require('../middleware/scraper');

scrapeRouter.post('/scrape', scraper);

module.exports = scrapeRouter;