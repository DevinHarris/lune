const puppeteer = require('puppeteer');

const scraper = async (req, res, next) => {
    const { url } = req.body;
    try {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const pageTitle = await page.$eval('title', (el) => el.innerHTML)
        console.log(pageTitle);

        // let data = await page.evaluate(() => document.querySelector('*').outerHTML);
        
        await browser.close();

        res.status(200).json({
            data: {
                pageTitle

            }
        })

    } catch (err) {
        res.status(500).json({
            message: `There was an error: ${err}`
        })
    }
    
    next();
}

module.exports = scraper;