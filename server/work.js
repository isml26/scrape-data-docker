import puppeteer from "puppeteer";
import { scrape } from "./src/scrape.js";

//get all product links ad fect imageUrl Name price executing scrape function;

export const getLinks = (async (url) => {

    const browser = await puppeteer.launch({
        // args: ['--no-sandbox', '--disable-setuid-sandbox'],
        // ignoreHTTPSErrors: true,
        // dumpio: false
    });
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle2',
    }).catch(err => {
        console.log(err);
    });
    try {
        
        const hrefs = await page.$$eval(".listing-link", as => as.map(a => a.href));
        //console.log(hrefs);
        browser.close();
        return hrefs;
    } catch (err) {
        console.error(err)
    }
});

const allLinks =await  getLinks("https://www.etsy.com/uk/");

console.log(allLinks.length);

let products= [];

for(let i =0 ;i< allLinks.length-17;i++){
    products.push(await scrape(allLinks[i]));
}
console.log(products);
process.exit();
