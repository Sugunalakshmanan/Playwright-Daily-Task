const{test, chromium, expect} = require('@playwright/test');
test ('launch application url', async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    const url = 'https://www.youtube.com/';
    await page.goto(url);

    await expect(page).toHaveURL(url);
    await expect(page).toHaveTitle('You tube');
    await page.goto('https://mail.google.com/mail/u/0/#inbox');
    await page.goBack();
    await page.goForward();
});