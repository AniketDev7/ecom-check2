// Needs to be higher than the default Playwright timeout
jest.setTimeout(40 * 1000)

describe("Zapier", () => {
  it(" Login to Zapier account", async () => {

    await page.goto('https://zapier.com/app/login')
    
    await page.setViewportSize({ width: 1280, height: 577 })
    
    await page.waitForSelector('div > .login-form > div > .login-form__field:nth-child(1) > .text-input')
    await page.click('div > .login-form > div > .login-form__field:nth-child(1) > .text-input')
    
    await page.type('input[name="email"]', "aniket.shikhare@contentstack.com");
    await page.click('button[type="button"]')

    await page.waitForSelector('#password')
    await page.click('#password')
    await page.type('input[name="password"]', "Aniket@7890");
    
    await page.click('button[type="button"]')
         
    // await page.goto("https://github.com");
    // await page.type('input[name="q"]', "Playwright");
    // await page.press('input[name="q"]', "Enter");
    // await expect(page).toHaveText(".repo-list", "microsoft/playwright")
  })
  it(" Dashboard Should contain 'My Zaps' page ", async () => {
    
    // via the CSS selector
    //await expect(page).toHaveText("#readme h1", "Playwright")
    await page.click('a[href="/app/zaps"]');
    // or via the Playwright text selector engine
    await browser.close()
    
  })
})