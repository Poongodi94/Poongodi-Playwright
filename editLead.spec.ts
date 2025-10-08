import{test} from "@playwright/test";
test("Test to launch a browser", async({page}) => { 

await page.goto(`http://leaftaps.com/opentaps/control/main`);

await page.locator(`#username`).fill(`democsr`);

await page.locator(`#password`).fill(`crmsfa`);

await page.locator(`.decorativeSubmit`).click();

await page.locator(`//*[@id="button"]/a/img`).click();

await page.locator(`//a[text()='Leads']`).click(); 
await page.locator(`//a[text()='Find Leads']`).click(); 
await page.locator(`#ext-gen248`).fill(`Poongodi`);
await page.locator(`#ext-gen334`).click(); 
await page.locator(`//a[text()='11372']`).click(); 
await page.locator(`//a[text()='Edit']`).click(); 
await page.locator(`#updateLeadForm_companyName`).fill(`Testleaf platform`);
await page.locator(`#updateLeadForm_annualRevenue`).fill(`400000`);
await page.locator(`#updateLeadForm_departmentName`).fill(`Testing`);
await page.locator(`#updateLeadForm_description`).fill(`Testing`);
await page.waitForTimeout(1000)
await page.locator(`//input[@value="Update"]`).click();
})