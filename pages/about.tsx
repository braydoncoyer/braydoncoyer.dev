import { convertToArticleList, getPublishedArticles } from '@/lib/notion';

import { Ad } from '@/components/Ad';
import { ArticleList } from '@/components/ArticleList';
import { Button } from '@/components/Button';
import { ButtonType } from '@/lib/types';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';

const workExperience = [
  {
    company: 'LogicGate',
    title: 'Front End Developer',
    duration: '2022 -'
  },
  {
    company: 'Cognizant',
    title: 'Full-Stack Engineer',
    duration: '2019 - 2021'
  },
  {
    company: 'projekt202',
    title: 'UI Developer',
    duration: '2018 - 2019'
  },
  {
    company: 'Major 4 Apps',
    title: 'Founder',
    duration: '2011 - 2018'
  }
];

export default function About({ recentArticles }) {
  const { push } = useRouter();
  return (
    <Container title="About Me - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's my story.
        </span>
      </h1>
      <p>
        I’m Braydon, a developer,{' '}
        <a href={siteMetadata.codepen}>creative coder</a>, blogger and
        self-proclaimed designer who specializes in front-end development. My
        mission is to translate user-focussed designs into pixel-perfect
        websites or applications that run blazing fast.
      </p>
      <p>
        I’m currently working as a senior front end developer at{' '}
        <a href="https://www.logicgate.com">LogicGate</a> where I help develop
        an agile GRC cloud solution that combines powerful functionality with
        intuitive design to enhance enterprise GRC programs.
      </p>

      <p>
        Prior to LogicGate, I worked as a senior full-stack engineer at{' '}
        <a href="https://www.cognizant.com/us/en">Cognizant</a> where I helped
        architect and develop full-stack RESTful microservices, train and
        prepare developers for delivery, and assist in leading the front-end
        practice in a lab-based working environment.
      </p>
      <p>
        Before Cognizant, I worked as a UI Developer for{' '}
        <a href="https://www.projekt202.com">projekt202</a> helping craft design
        systems and building reusable component libraries for multi-million
        dollar companies.
      </p>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-5">
        <div className="col-span-1">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="fill"
            src="https://res.cloudinary.com/braydoncoyer/image/upload/v1636553710/avatar.jpg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1636553710/avatar.jpg"
            width={260}
            height={260}
            layout="responsive"
            alt={'article cover'}
          />
        </div>
        <div className="col-span-3">
          <p className="">
            In a past life, I was an indie mobile developer making mobile games
            for iOS and Android, with one of my games outselling Angry Birds.
          </p>
          <p>
            You can find me on <a href={siteMetadata.twitter}>Twitter</a> where
            I share tech-related tidbits and build in public, or you can follow
            me on <a href={siteMetadata.github}>GitHub</a>. I often write about
            my findings on my{' '}
            <Link href="/blog">
              <a>blog</a>
            </Link>{' '}
            and create cool things over on{' '}
            <a href={siteMetadata.codepen}>CodePen</a>. I also help run a
            mediocre <a href="https://anchor.fm/florida-man">podcast</a>.
          </p>
        </div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="flex justify-center">
        <Ad />
      </div>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work experience</h2>
        <p>Here's a brief rundown of my most recent experiences.</p>
        <div className="space-y-2">
          {workExperience.map((workItem) => (
            <div
              key={workItem.company}
              className="flex items-center space-x-3 group"
            >
              <span className="flex-none text-gray-900 gover-hover:underline dark:text-white">
                {workItem.company}
              </span>
              <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
              <span className="flex-none">{workItem.title}</span>
              <span className="flex-none">{workItem.duration}</span>
            </div>
          ))}
        </div>
        <div className="inline-flex w-full md:w-auto ">
          <a
            className="items-center justify-center w-full px-4 py-3 text-sm font-medium text-center text-white no-underline rounded-full md:text-xl md:px-12 bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href={siteMetadata.resume}
            target="_blank"
            rel="noreferrer"
          >
            View my resume
          </a>
        </div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mb-12">
        <h2>I love to share my knowledge through writing.</h2>
        <p>Check out a few of my most recent publishings.</p>
        <ArticleList articles={recentArticles} />
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12">
        <div className="col-span-3">
          <h2>Interested in my gear?</h2>
          <p>
            I keep a list of software, applications, extensions, hardware and a
            list of supplies I've used to set up my office for those who are
            interested.
          </p>
          <Button
            buttonType={ButtonType.PRIMARY}
            onButtonClick={() => push('/toolbox')}
          >
            Check out my toolbox
          </Button>
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="cover"
            src="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"
            width={260}
            height={260}
            layout="responsive"
            alt={'article cover'}
          />
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);
  const { articles } = convertToArticleList(data);

  return {
    props: {
      recentArticles: articles.slice(0, 3)
    },
    revalidate: 120
  };
};
