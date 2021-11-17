import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { getToolboxInfo } from '@/lib/notion';

export default function Toolbox() {
  return (
    <Container>
      <h1>
        <span className="block text-base text-center text-teal-500 dark:text-teal-400 font-semibold tracking-wide uppercase">
          Toolbox
        </span>
        <span className="mt-2 block text-4xl text-center leading-10 font-bold sm:text-5xl max-w-2xl mx-auto">
          Here's what I use on the daily.
        </span>
      </h1>
      <div className="space-y-16">
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 justify-items-center">
          <div className="col-span1">
            <Image
              className="rounded-xl group-hover:opacity-75"
              objectFit="cover"
              src="https://res.cloudinary.com/braydoncoyer/image/upload/v1637185621/toolbox_code-editor.jpg"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1637185621/toolbox_code-editor.jpg"
              width={468}
              height={640}
              layout="intrinsic"
              alt={'article cover'}
            />
          </div>
          <div className="col-span1">
            <h2 className="mt-0">Code Editor & Extensions</h2>
            <ul>
              <li>Visual Studio Code - Code Editor</li>
              <li>Night Owl - A theme by Sarah Drasner</li>
              <li>MonoLisa - A font for software developers</li>
              <li>
                Bracket Pair Colorizer 2 - A customizable extension for
                colorizing matching brackets
              </li>
              <li>Indent Rainbow - Makes indentation easier to read</li>
              <li>Prettier - Code formatter</li>
              <li>
                Tailwind CSS IntelliSense - Intelligent Tailwind CSS tooling for
                VSCode
              </li>
              <li>VSCode Great Icons - Icon pack for VSCode</li>
            </ul>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 justify-items-center">
          <div className="col-span1 order-1">
            <Image
              className="rounded-xl group-hover:opacity-75"
              objectFit="cover"
              src="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186285/toolbox_terminal.png"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186285/toolbox_terminal.png"
              width={468}
              height={640}
              layout="intrinsic"
              alt={'article cover'}
            />
          </div>
          <div className="col-span1">
            <h2 className="mt-0">Terminal</h2>
            <ul>
              <li>Visual Studio Code - Code Editor</li>
              <li>Night Owl - A theme by Sarah Drasner</li>
              <li>MonoLisa - A font for software developers</li>
              <li>
                Bracket Pair Colorizer 2 - A customizable extension for
                colorizing matching brackets
              </li>
              <li>Indent Rainbow - Makes indentation easier to read</li>
              <li>Prettier - Code formatter</li>
              <li>
                Tailwind CSS IntelliSense - Intelligent Tailwind CSS tooling for
                VSCode
              </li>
              <li>VSCode Great Icons - Icon pack for VSCode</li>
            </ul>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 justify-items-center">
          <div className="col-span1">
            <Image
              className="rounded-xl group-hover:opacity-75"
              objectFit="cover"
              src="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"
              width={468}
              height={640}
              layout="intrinsic"
              alt={'article cover'}
            />
          </div>
          <div className="col-span1">
            <h2 className="mt-0">Hardware & Office</h2>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 justify-items-center">
          <div className="col-span1 order-1">
            <Image
              className="rounded-xl group-hover:opacity-75"
              objectFit="cover"
              src="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186713/toolbox_apps.jpg"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186713/toolbox_apps.jpg"
              width={468}
              height={640}
              layout="intrinsic"
              alt={'article cover'}
            />
          </div>
          <div className="col-span1">
            <h2 className="mt-0">Apps & Tool</h2>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 justify-items-center">
          <div className="col-span1">
            <Image
              className="rounded-xl group-hover:opacity-75"
              objectFit="cover"
              src="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186964/toolbox_portfolio.png"
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186964/toolbox_portfolio.png"
              width={468}
              height={640}
              layout="intrinsic"
              alt={'article cover'}
            />
          </div>
          <div className="col-span1">
            <h2 className="mt-0">This Site & Blog</h2>
          </div>
        </section>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getToolboxInfo(process.env.TOOLBOX_DATABASE_ID);
  console.log(data);
  let toolboxContent = null;

  return {
    props: {
      toolboxContent
    },
    revalidate: 1800
  };
};
