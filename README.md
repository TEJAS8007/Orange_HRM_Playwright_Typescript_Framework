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
