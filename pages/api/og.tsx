import Image from 'next/image';
import { ImageResponse } from '@vercel/og';
import LightLogo from 'public/bcoyerlogo_white.svg';
import { NextRequest } from 'next/server';
import bg from 'public/social_og_slanted_bg.png';

export const config = {
  runtime: 'experimental-edge'
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

    const isArticleLayout = searchParams.has('article');

    const hasImageUrl = searchParams.has('imgSrc');
    const imageSrc = hasImageUrl
      ? searchParams.get('imgSrc')?.slice(0, 1000)
      : null;

    console.log(imageSrc);

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            position: 'relative'
          }}
        >
          {isArticleLayout ? (
            <div tw="flex h-full">
              <div tw="flex flex-col w-full py-12 px-4  p-8">
                <img src={bg} tw="w-full" />
                <img
                  tw="w-full absolute -right-2/5 top-0"
                  src={imageSrc}
                  alt="image"
                />
                <h1 tw="text-slate-400 text-2xl">braydoncoyer.dev</h1>
                <h2 tw="flex flex-col text-5xl tracking-tight text-gray-900 text-left max-w-3/5 text-white">
                  {title}
                </h2>
                <svg
                  tw="h-13 w-13"
                  fill="white"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1235 1250"
                >
                  <g id="Layer_1_00000074407811570125606900000007740761367040706226_">
                    <g>
                      <g>
                        <path
                          d="M731,817.7C646.6,730.6,559.9,645.8,474.2,560c-3.9-3.9-7.9-7.8-11.8-11.8c-23.8-24.8-25.8-56.4-4.9-76.3
				c20.1-19.2,50.7-16.9,74.1,6.5C620.2,566.6,708,655.5,797,743.3c118.1,116.4,310.5,92.5,397.3-48.6c61.5-100,45.2-227.2-42.8-316
				C1064.7,291,977.4,203.8,780,6.6l-72.5,72.5C908,278.1,997.6,368,1086.9,458.2c70.7,71.5,52,190.9-36.3,239.5
				c-61.4,33.7-132.1,23.6-185.9-29.3C774.8,580,686.4,490.4,597,401.7c-58.6-58.1-152.4-58-210.2-0.8
				c-59.3,58.8-60.3,151.9-1.1,211.9c87.1,88.3,175.4,175.5,262.3,264c14.7,14.9,28.5,32.3,37.4,51.1
				c32.9,69.6,10.8,147.5-52.2,191.8c-59,41.5-139.2,34.4-193.1-19c-69.3-68.7-138-138-365.3-365.5l-73,73
				c228.7,229.1,299.3,299.3,371,368.5c98.4,94.9,251.7,93.1,348,3C823.4,1083.9,829,918.9,731,817.7z"
                        />
                      </g>
                      <g>
                        <path
                          d="M529.9,1038.8c1.2,0.5,2.3,1,3.5,1.4c22.3,6.3,42.7,0.5,55.3-20.4c14.4-23.8,10-46-9.4-65.5
				c-89.7-89.7-179.7-179.1-269-269.2C229.9,603.8,216,478.7,275,377.5c55.5-95.1,172.5-142.8,280.5-114.3
				c43.9,11.6,82,32.7,114.3,65.1c87.5,88,174.9,176.1,264.1,262.3c12.8,12.4,36,20.8,53.5,19.4c13.1-1,28.9-18.5,36.1-32.5
				c10.3-20.1-0.4-38.9-16.1-54.6c-89.8-89.5-179.3-179.5-269.2-269c-44.3-44.2-97.8-72.1-158.1-88.2
				c-140.5-37.5-300.3,21.2-379.6,139.8C116,432,115.8,601.7,207.9,716.2c10.6,13.2,21.8,25.9,33.4,38.3l0,0
				c36.4,44.4,151,154.5,224.8,224.5l53.6,53.6c1.3,1.3,2.7,2.4,4.2,3.3c1.8,1,3.6,1.9,5.4,2.6"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          ) : (
            <div>Is not Article Layout</div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}
