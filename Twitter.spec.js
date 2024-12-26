const{test, chromium, expect}=require('@playwright/test');
test('login twitter page', async()=>{
    const browser = await chromium.launch({headless:false});
const page = await browser.newPage();
const url = 'https://x.com/i/flow/signup';
await page.goto(url);
const createacc=await page.getByText('Create account');
await createacc.click();
await page.waitForTimeout(3000);
const name = await page.locator("//input[@name='name']");
await expect(name).toBeVisible();
await name.fill('playwright');
 
await page.waitForTimeout(3000);
});
