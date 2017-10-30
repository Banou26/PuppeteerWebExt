const puppeteer = require('puppeteer')
const fs = require('fs')

puppeteer.launch().then(async browser => {
  const extensionId = browser.registerExtension(fs.readFileSync(__dirname + '/manifest.json'))
  const page = await browser.newPage()
  await page.goto(`chrome-extension://${extensionId}/options.html`)
  // check if the options page work as intended
  const webPage = await browser.newPage()
  await webPage.goto(`https://youtube.com`)
  // check the dom to see if the extension content script modified the dom like we want to


  // allow us to use all that fancy puppeteer magic like frame.$(selector) and all that stuff on the extensions pages (background page/options page/ect...)
  await browser.close()
});