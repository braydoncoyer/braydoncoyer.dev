import chromium from 'chrome-aws-lambda';
import playwright from 'playwright-core';

export default async function handler(req, res) {
  try {
    let { url } = req.query;

    let image = await getImageBase64(url);

    res.status(200).json({
      image
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: JSON.stringify(error)
    });
  }
}

const getImageBase64 = async (url) => {
  const browser = await playwright.chromium.launch({
    args: [...chromium.args, '--font-render-hinting=none'], // This way fix rendering issues with specific fonts
    executablePath:
      process.env.NODE_ENV === 'production'
        ? await chromium.executablePath
        : '/opt/homebrew/bin/chromium',
    headless: process.env.NODE_ENV === 'production' ? chromium.headless : true
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  // let page = await browser.newPage();

  await page.goto(url, { waitUntil: 'load' });

  let image = await page.screenshot();

  image.toString('base64');

  await browser.close();

  return image;
};
