# 🚀 Playwright UI + API Automation Framework (TypeScript)

This repository contains an end-to-end automation framework built using **Playwright**, supporting both **UI** and **API** test automation in a unified codebase.  
Designed using modern testing patterns such as **Page Object Model (POM)**, **Fixtures**, **Test Tags**, **Test Metadata**, and **Data-Driven Testing**.

---

## 🧰 **Tech Stack**

| Layer | Tools |
|-------|-------|
| Language | TypeScript |
| Framework | Playwright |
| UI Testing | Playwright (Chromium / WebKit / Firefox) |
| API Testing | Playwright Request API |
| Design Pattern | POM + Fixtures |
| Reporting | Playwright HTML Report |
| Test Runner | Playwright Test Runner |
| Data Storage | JSON Files / ENV |
| Version Control | Git + GitHub |
| CI/CD (Optional) | Jenkins / GitHub Actions |

---

## 🌟 **Features Implemented**

✔ UI Test Automation  
✔ API Test Automation  
✔ Global Setup (Auto Login + StorageState)  
✔ Page Object Model (Reusable Locators + Actions)  
✔ Fixtures for POM + Request Context  
✔ Custom Tags (`@UI`, `@API`, `@SANITY` etc.)  
✔ Test Metadata + Annotation  
✔ Data-Driven Tests via JSON  
✔ Environment Config with `.env`  
✔ Auth Session Reuse using `storageState`  
✔ HTML Reporting + Timeline  
✔ Support for Serial Tests (CRUD API)  

---

## 📁 **Project Structure**

📦 playwright-framework
┣ 📂 tests
┃ ┣ 📂 ui-tests
┃ ┣ 📂 api-tests
┣ 📂 pages
┃ ┗ product.page.ts
┣ 📂 fixtures
┃ ┗ pom.fixture.ts
┣ 📂 data-files
┃ ┣ ui-data.json
┃ ┣ api-data.json
┣ 📂 env-files
┣ 📂 Auth-files
┣ global-setup.ts
┣ playwright.config.ts
┣ package.json
┣ README.md


---

## 🧪 **Running Tests**

### ▶ Run all UI tests
```sh
npx playwright test --grep @UI
▶ Run all API tests
npx playwright test --grep @API
▶ Run with report
npx playwright test --reporter html
🔐 Authentication + StorageState
Framework captures auth token/session once:

await page.context().storageState({ path: './Auth-files/session.json' });
Then reused for next tests via:

use: { storageState: './Auth-files/session.json' }
Improves test speed + stability.

🌍 Environment Management
Sensitive credentials handled via .env

USER_NAME=standard_user
PASSWORD=secret_sauce
Loaded using:

process.env.USER_NAME
.env and Auth-files are secured via .gitignore.

🔁 API Testing Example
const res = await request.post('/object', {
  data: payload
});
expect(res.status()).toBe(200);
CRUD covered using test.describe.configure({ mode: 'serial' }).

📊 Reporting
Playwright HTML Report (default):

npx playwright show-report
🧱 Page Object Model Example
class ProductPage {
  verify_productName() {
     // logic
  }
}
Reduces duplication + increases maintainability.

🧩 CI/CD Integration
This framework is CI ready.
Can plug into:

Jenkins

GitHub Actions

GitLab CI

Example Jenkins command:

npm install
npx playwright install
npx playwright test
🚧 Future Enhancements
Screenshot + video evidence for UI

Parallel execution optimizations

Slack reporting

Test management integration (JIRA/Zephyr)

🤝 Contributions
PRs, issues, and enhancements are welcome!
