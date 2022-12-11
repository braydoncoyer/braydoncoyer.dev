import mql from '@microlink/mql';

export default async function handler(req, res) {
  try {
    let { url } = req.query;
    const { status, data } = await mql(url, {
      screenshot: true,
      // @ts-ignore
      overlay: {
        background:
          'linear-gradient(225deg, #F472B6 0%, #7A96FC 50%, #26F0C0 100%)',
        browser: 'dark'
      }
    });
    res.status(200).json({
      image: data?.screenshot?.url
    });
  } catch (error) {
    res.status(500).json({
      error: JSON.stringify(error)
    });
  }
}
