let browserWSEndpoint = '';
const puppeteer = require(['./puppeteer']);

async function initiatePuppeteer() {
  await fetch("http://localhost:9222/json/version")
    .then(response => response.json())
    .then(function(data) {
        browserWSEndpoint = data.webSocketDebuggerUrl;
      })
    .catch(error => console.log(error));
}

initiatePuppeteer();

// Assign button to puppeteer function

document
  .getElementById("puppeteer-button")
  .addEventListener("click", doPuppeteerThings);

async function doPuppeteerThings() {
  const browser = await puppeteer.connect({
    browserWSEndpoint: browserWSEndpoint
  });
  const page = await browser.newPage();

  // Your puppeteer code goes here

}