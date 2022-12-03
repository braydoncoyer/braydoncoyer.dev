import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  try {
    let { url } = req.query;

    let image = await getImageBase64(url);

    res.status(200).json({
      image
    });
  } catch (error) {
    res.status(500).json({
      error: JSON.stringify(error)
    });
  }
}

const getImageBase64 = async (url) => {
  let browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.goto(url);
  let image = await page.screenshot({ encoding: 'base64' });
  await browser.close();
  return image;
};
