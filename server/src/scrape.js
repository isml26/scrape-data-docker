import puppeteer from "puppeteer";

export const scrape = (async (url) => {

    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        ignoreHTTPSErrors: true,
        dumpio: false
    });
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle2',
    }).catch(err => {
        console.log(err);
    });
    try {

        const [productPriceArr] = await page.$x(`//*[@id="listing-page-cart"]/div[3]/div[1]/div[1]/div/div[1]/p`)
        const [productNameArr] = await page.$x(`//*[@id="listing-page-cart"]/div[2]/h1`)
        const images = await page.$eval('#listing-right-column > div > div.body-wrap.wt-body-max-width.wt-display-flex-md.wt-flex-direction-column-xs > div.image-col.wt-order-xs-1.wt-mb-lg-6 > div > div > div > div > div.image-carousel-container.wt-position-relative.wt-flex-xs-6.wt-order-xs-2.show-scrollable-thumbnails > ul > li:nth-child(1) > img', elem => elem.src)

        const price = await productPriceArr.getProperty("textContent");
        const name = await productNameArr.getProperty("textContent");

        const productPrice = await price.jsonValue();
        const productName = await name.jsonValue();

        console.log(String(productPrice).trim());
        console.log(String(productName).trim());
        console.log(images);

        //parseFloat(String(productPrice).trim().replace(/[^a-zA-Z0-9 ]/g, ""))/100,
        const product = {
            name: String(productName).trim(),
            price: parseFloat(String(productPrice).trim().replace(/[^0-9]/g, "")) / 100,
            imageUrl: images,
        }
        return product;

    } catch (err) {
        console.error(err)
    }

    browser.close();
});