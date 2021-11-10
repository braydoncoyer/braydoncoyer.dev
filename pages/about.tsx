import { Container } from 'layouts/Container';
import Link from 'next/link';

const workExperience = [
  {
    company: 'Cognizant',
    title: 'Sr Full-Stack Engineer',
    duration: '2019 - Present'
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

export default function About() {
  return (
    <Container>
      <h1>About Me</h1>
      <p>
        I’m Braydon, a senior full-stack engineer, creative coder and
        self-proclaimed designer who has a passion for the front-end spectrum. I
        love creating, whether those things are web applications,{' '}
        <a href="https://codepen.io/braydoncoyer">CodePen creations</a>, mobile
        apps, <a href="https://anchor.fm/florida-man">podcasts</a>, or tinkering
        around in Photoshop or Illustrator.
      </p>
      <p>
        I specialize in front-end development and make it my mission to
        translate user-focussed designs into pixel-perfect websites or
        applications that run blazing fast.
      </p>
      <p>
        I’m currently part of the team at Cognizant where I help architect and
        develop full-stack RESTful microservices, train and prepare developers
        for delivery, and assist in leading the front-end practice in a
        lab-based working environment.
      </p>
      <p>
        I always like learning new things. I often write about my findings on my{' '}
        <Link href="/blog">
          <a>blog</a>
        </Link>
        , and post helpful tech-related tidbits on{' '}
        <a href="https://twitter.com/BraydonCoyer">Twitter</a>.
      </p>
      <div className="grid items-start grid-cols-1 md:grid-cols-12 mt-12 space-y-6 md:space-y-0">
        <p className="col-span-2 m-0 text-2xl md:text-xl font-semibold text-gray-900 dark:text-white">
          Work experience
        </p>
        <div className="col-span-10 space-y-2 text-sm md:text-xl">
          {workExperience.map((workItem) => (
            <div
              key={workItem.company}
              className="flex items-center space-x-3 group"
            >
              <span className="flex-none gover-hover:underline text-gray-900 dark:text-gray-400">
                {workItem.company}
              </span>
              <span className="flex-shrink w-full border-t border-gray-300 border-dashed dark:border-gray-700"></span>
              <span className="flex-none text-gray-400 dark:text-gray-600">
                {workItem.title}
              </span>
              <span className="flex-none text-gray-400 dark:text-gray-600">
                {workItem.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
