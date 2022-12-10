import mql from '@microlink/mql';

export default async function handler(req, res) {
  try {
    let { url } = req.query;
    const { status, data } = await mql(url, {
      screenshot: true
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
