import{test} from "@playwright/test";
test("Test to launch a browser", async({page}) => { 

await page.goto(`http://leaftaps.com/opentaps/control/main`);

await page.locator(`#username`).fill(`democsr`);

await page.locator(`#password`).fill(`crmsfa`);

await page.locator(`.decorativeSubmit`).click();

await page.locator(`//*[@id="button"]/a/img`).click();

await page.locator(`//a[text()='Leads']`).click(); 

await page.locator(`//a[text()='Create Lead']`).click();

await page.locator(`#createLeadForm_companyName`).fill(`Testleaf`);

await page.locator(`#createLeadForm_firstName`).fill(`Poongodi`);

await page.locator(`#createLeadForm_lastName`).fill(`Sundaravadivelu`);

await page.locator(`#createLeadForm_personalTitle`).fill(`Mrs`);

await page.locator(`#createLeadForm_generalProfTitle`).fill(`Test`);

await page.locator(`#createLeadForm_annualRevenue`).fill(`200000`);

await page.locator(`#createLeadForm_departmentName`).fill(`Testing`);

await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(`8660368180`);

await page.locator(`//input[@name="submitButton"]`).click();
const a = await page.title();
console.log(a);
})
