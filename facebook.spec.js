const{test,chromium}=require('@playwright/test');
test('launch', async()=>{
    const browser=await chromium.launch({headless:false

    });
    const page = await browser.newPage();
    const url = 'https://www.facebook.com/';
    await page.goto(url);
    await page.waitForTimeout(3000);
    const button = await page.getByTestId('open-registration-form-button');
    await button.click();
    await page.waitForTimeout(3000);
    const name=await page.getByLabel('First name');
    await name.fill('gladis');
    await page.waitForTimeout(3000);
});