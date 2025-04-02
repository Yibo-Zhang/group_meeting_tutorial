const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,  // Set to true for production
  });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://journals.aps.org/search/results?sort=recent&clauses=%5B%7B%22field%22:%22all%22,%22value%22:%22magnetic%20materials%20%22,%22operator%22:%22AND%22%7D%5D&page=7&per_page=20');
    
    // Add your scraping or testing logic here
    console.log('Page loaded successfully');
    
    // Wait for the content to load
    await page.waitForSelector('#search-main');
    
    // Select elements and print
    const blocks = await page.$$('#search-main > div > div');
    if (blocks.length > 0) {
      for (let i = 0; i < blocks.length; i++) {
        const textContent = await blocks[i].textContent();
        console.log(`Block ${i} content:`, textContent);
      }
    } else {
      console.log('No blocks found');
    }
    
    // Add a small delay before closing
    await page.waitForTimeout(1000);
    
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await browser.close();
    console.log('Browser closed');
  }
})();
