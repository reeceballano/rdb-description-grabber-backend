
const puppeteer = require('puppeteer');
const userAgent = require('user-agents');

const searchGoogle = async (searchQuery, num) => {
	try {
		const browser = await puppeteer.launch({
										'args' : [
										'--no-sandbox',
										'--disable-setuid-sandbox'
									],
									headless: true
								});
		// .launch({ headless: true });
		const page 			= await browser.newPage();
		const userbrowser 	= new userAgent({ deviceCategory: 'desktop' })

		await page.setUserAgent(userbrowser.toString());
		await page.goto(`https://www.google.com/search?q=${searchQuery}&num=${num}`);
		await page.waitForSelector('#rso');

		const sections = await page.$$('.rc');

		let data = [];

		for(let i = 0; i < sections.length; i++) {
			const section 		= sections[i];
			const titles 		= await section.$('.r a');
			const title 		= await titles.$eval('h3', h3 => h3.innerText);
			const descriptions 	= await section.$('.s');
			const description 	= await descriptions.$eval('span', span => span.innerText);

			const links 		= await section.$('.r');
			const link 		= await links.$eval('a', a => a.href);

			if(description != null || description != undefined || description != '') {
				await data.push({description, link});
			}
		}

		return data;

  		await browser.close();
	} catch(e) {
		console.log('error: ', e);
	}	
}

module.exports = searchGoogle;