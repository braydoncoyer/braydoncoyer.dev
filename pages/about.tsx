import {
  convertToArticleList,
  getPublishedArticles,
  getWorkTimelineData
} from '@/lib/notion';

import { Ad } from '@/components/Ad';
import { ArticleList } from '@/components/ArticleList';
import { Button } from '@/components/Button';
import { ButtonType } from '@/lib/types';
import { Container } from 'layouts/Container';
import CustomLink from '@/components/CustomLink';
import { GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import { TimelineItem } from '@/components/TimelineItem';
import { TimelineList } from '@/components/TimelineList';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';

export default function About({ recentArticles, workTimeline }) {
  const { push } = useRouter();
  return (
    <Container title="About Me - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's my story.
        </span>
      </h1>
      <p>
        I’m Braydon, a developer,{' '}
        <CustomLink href={siteMetadata.codepen}>creative coder</CustomLink>,{' '}
        <CustomLink href={`${siteMetadata.siteUrl}/blog`}>blogger</CustomLink>{' '}
        and self-proclaimed designer who specializes in front-end development.
        My mission is to translate user-focussed designs into pixel-perfect
        websites or applications that run blazing fast.
      </p>
      <p>
        I’m currently working as a senior front end developer at{' '}
        <CustomLink href="https://www.logicgate.com">LogicGate</CustomLink>{' '}
        where I help develop an agile GRC cloud solution that combines powerful
        functionality with intuitive design to enhance enterprise GRC programs.
      </p>
      <div>
        <div className="hidden md:block md:float-left">
          <Image
            className="md:mr-8"
            src="https://res.cloudinary.com/braydoncoyer/image/upload/v1667839711/family_photo.jpg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1667839711/family_photo.jpg"
            width={340}
            height={448}
            alt={'article cover'}
          />
        </div>
        <p>
          Prior to LogicGate, I worked as a senior full-stack engineer at{' '}
          <CustomLink href="https://www.cognizant.com/us/en">
            Cognizant
          </CustomLink>{' '}
          where I helped architect and develop full-stack RESTful microservices,
          train and prepare developers for delivery, and assist in leading the
          front-end practice in a lab-based working environment.
        </p>
        <p>
          Before Cognizant, I worked as a UI Developer for{' '}
          <CustomLink href="https://www.projekt202.com">projekt202</CustomLink>{' '}
          helping craft design systems and building reusable component libraries
          for multi-million dollar companies.
        </p>
        <p>
          In a past life, I was an indie mobile developer making mobile games
          for iOS and Android, with one of my games outselling Angry Birds.
        </p>
        <p>
          You can find me on <a href={siteMetadata.twitter}>Twitter</a> where I
          share tech-related tidbits and build in public, or you can follow me
          on <CustomLink href={siteMetadata.github}>GitHub</CustomLink>. I often
          write about my findings on my{' '}
          <CustomLink href={`${siteMetadata.siteUrl}/blog`}>blog</CustomLink>{' '}
          and create cool things over on{' '}
          <CustomLink href={siteMetadata.codepen}>CodePen</CustomLink>. I also
          help run a mediocre{' '}
          <CustomLink href="https://anchor.fm/florida-man">podcast</CustomLink>.
        </p>
        <div></div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="flex justify-center">
        <Ad />
      </div>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work experience</h2>
        <p>Here's a brief rundown of my most recent experiences.</p>
        {workTimeline ? (
          <TimelineList>
            {workTimeline.map((workItem, index) => (
              <TimelineItem
                key={index}
                title={workItem.title}
                meta={workItem.company}
                link={workItem.company_url}
                meta_small={workItem.duration}
                content={workItem.description}
              />
            ))}
          </TimelineList>
        ) : null}
        <Button
          onButtonClick={() => push(siteMetadata.resume)}
          buttonType={ButtonType.PRIMARY}
        >
          View my resume
        </Button>
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
            className="rounded-3xl group-hover:opacity-75"
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
  const workTimeline = await getWorkTimelineData(process.env.WORK_TIMELINE_DB);
  const { articles } = convertToArticleList(data);

  return {
    props: {
      recentArticles: articles.slice(0, 3),
      workTimeline
    },
    revalidate: 200
  };
};
