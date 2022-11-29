import { Container } from 'layouts/Container';
import Image from 'next/image';
import siteMetadata from '@/data/siteMetadata';
import { useState } from 'react';

const talks = [
  {
    name: 'Application Confidence - An Introduction to Testing React',
    type: 'Meetup',
    city: 'Virtual',
    date: '11-10-2022',
    url: 'https://youtu.be/65wXOrmIOK4?t=3695'
  }
];

const biography = [
  "Hi, I'm Braydon Coyer. I'm a Frontend Engineer at LogicGate where I work on a GRC automated platform. I live in Texas with my wife and daughter.",
  "Hi, I'm Braydon Coyer. I'm a Frontend Engineer at LogicGate where I work on a GRC automated platform. I'm a creative developer, blogger and self-proclaimed designer. My mission is to translate user-focussed designs into pixel-perfect websites or applications that run blazing fast. I live in Texas with my wife and daughter.",
  'Braydon Coyer is a Frontend Engineer at LogicGate where he helps build a GRC automated platform. He lives in Texas with his wife and daughter.',
  'Braydon Coyer is a Frontend Engineer at LogicGate where he helps build a GRC automated platform. He is a creative developer, a blogger and a designer. His mission is to translate user-focussed designs into pixel-perfect websites or applications that run blazing fast. He lives in Texas with his wife and daughter.'
];

const biographyLength = [
  { id: '1st-short', title: '1st Person, Short', bio: biography[0] },
  { id: '1st-long', title: '1st Person, Long', bio: biography[1] },
  { id: '3rd-short', title: '3rd Person, Short', bio: biography[2] },
  { id: '3rd-long', title: '3rd Person, Long', bio: biography[3] }
];

export default function Talks() {
  const [selectedLengthIndex, setSelectedLengthIndex] = useState(1);

  function handleOptionChange(index: number) {
    setSelectedLengthIndex(index);
  }

  return (
    <Container title="Talks - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Speaking
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Explore My Presentations.
        </span>
      </h1>
      <div className="space-y-12">
        {/* Talks */}
        <div className="flex flex-col mt-8">
          <div className="px-2 overflow-x-auto md:px-4">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-slate-50 dark:bg-slate-700">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 text-slate-900 dark:text-white"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                      >
                        City
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-midnight">
                    {talks.map((talk) => (
                      <tr key={talk.name}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium dark:text-slate-300 text-slate-500 whitespace-nowrap sm:pl-6">
                          {talk.name}
                        </td>
                        <td className="px-3 py-4 text-sm dark:text-slate-300 text-slate-500 whitespace-nowrap">
                          {talk.type}
                        </td>
                        <td className="px-3 py-4 text-sm dark:text-slate-300 text-slate-500 whitespace-nowrap">
                          {talk.city}
                        </td>
                        <td className="px-3 py-4 text-sm dark:text-slate-300 text-slate-500 whitespace-nowrap">
                          {talk.date}
                        </td>
                        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                          {talk.url ? (
                            <a
                              href={talk.url}
                              className="text-indigo-600 dark:text-teal-400 hover:text-indigo-900"
                            >
                              View
                              <span className="sr-only">, {talk.name}</span>
                            </a>
                          ) : (
                            <span>Not yet available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>

        {/* Bio */}
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Looking for Speakers?
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Interested in having me give a talk at your event? Hit me up on{' '}
            <a href={siteMetadata.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>{' '}
            and let's discuss!
          </p>
        </div>

        <div>
          <div>
            <h4 className="m-0 font-medium">Biography</h4>
            <p className="m-0 mt-2 mb-4 leading-5 text-gray-500">
              Select an option
            </p>
            <fieldset>
              <legend className="sr-only">Biography Length</legend>
              <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                {biographyLength.map((bioOption, index) => (
                  <div key={bioOption.id}>
                    <div className="flex items-center">
                      <input
                        id={bioOption.id}
                        name="notification-method"
                        type="radio"
                        onChange={() => handleOptionChange(index)}
                        defaultChecked={bioOption.id === '1st-long'}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 dark:border-midnight"
                      />
                      <label
                        htmlFor={bioOption.id}
                        className="block ml-3 font-medium"
                      >
                        {bioOption.title}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <p className="mt-12">{biography[selectedLengthIndex]}</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="m-0 font-medium">Links</h4>
          <p className="m-0 mt-2 mb-4 leading-5 text-gray-500">
            Find me online
          </p>
          <ul>
            <li>
              Twitter:{' '}
              <a href={siteMetadata.twitter} target="_blank" rel="noreferrer">
                @BraydonCoyer
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a href={siteMetadata.github} target="_blank" rel="noreferrer">
                @BraydonCoyer
              </a>
            </li>
            <li>
              Website:{' '}
              <a href={siteMetadata.siteUrl} target="_blank" rel="noreferrer">
                https://braydoncoyer.dev
              </a>
            </li>
            <li>
              LinkedIn:{' '}
              <a href={siteMetadata.linkedin} target="_blank" rel="noreferrer">
                {siteMetadata.linkedin}
              </a>
            </li>
            <li>
              CodePen:{' '}
              <a href={siteMetadata.codepen} target="_blank" rel="noreferrer">
                {siteMetadata.codepen}
              </a>
            </li>
          </ul>
        </div>

        {/* Headshot */}
        <div className="sm:flex-auto">
          <h4 className="font-semibold text-slate-900 dark:text-white">
            Headshot
          </h4>
          <p className="m-0 mt-2 mb-4 leading-5 text-gray-500">
            You can use the picture below with credit
          </p>
        </div>
        <Image
          alt="Braydon Coyer"
          height={160}
          width={160}
          src={siteMetadata.avatarImage}
          placeholder="blur"
          blurDataURL={siteMetadata.avatarImage}
          layout="fixed"
        />
      </div>
    </Container>
  );
}
