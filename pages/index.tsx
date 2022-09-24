import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home({ recentArticles }) {
  const { push } = useRouter();
  return (
    <div>
      <div>
        <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
          <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
            I'm{' '}
            <span className="text-teal-500 dark:text-teal-400">Braydon</span>.
            I'm a developer, blogger and designer working at LogicGate.
          </h1>
        </div>
      </div>
      <hr className="hr"></hr>
      <div>
        <h2>I love to share my knowledge through writing.</h2>
        <p>Check out a few of my most recent publishings.</p>
        {/* <div className="my-16">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/blog')}
            >
              See all articles
            </Button>
          </div> */}
      </div>
    </div>
  );
}
