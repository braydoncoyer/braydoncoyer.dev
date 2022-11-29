import { getPageInfo, getToolboxData } from '@/lib/notion';

import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';

export default function Toolbox({ software, hardware, thisSite }) {
  return (
    <Container>
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Toolbox
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Hardware and Software I use every day.
        </span>
      </h1>
      <div className="space-y-24">
        <div className="space-y-12">
          <h2>Software</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {software?.map((item) => (
              <div key={item.url}>
                <h3 className="m-0 text-xl font-medium">{item.title}</h3>
                <div className="block space-x-4">
                  {item.types.map((tag) => (
                    <span key={tag} className="text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="m-0 mb-3 text-base">{item.description}</p>
                  {item.url ? (
                    <a
                      className="text-base"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check it out
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <h2>Hardware</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {hardware?.map((item) => (
              <div key={item.url}>
                <h3 className="m-0 text-xl font-medium">{item.title}</h3>
                <div className="block space-x-4">
                  {item.types.map((tag) => (
                    <span key={tag} className="text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="m-0 mb-3 text-base">{item.description}</p>
                  {item.url ? (
                    <a
                      className="text-base"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check it out
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <h2>This Site</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {thisSite?.map((item) => (
              <div key={item.url}>
                <h3 className="m-0 text-xl font-medium">{item.title}</h3>
                <div className="block space-x-4">
                  {item.types.map((tag) => (
                    <span key={tag} className="text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="m-0 mb-3 text-base">{item.description}</p>
                  {item.url ? (
                    <a
                      className="text-base"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check it out
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-base">
          Influenced by{' '}
          <a href="https://wesbos.com/uses" target="_blank" rel="noreferrer">
            Wes Bos
          </a>{' '}
          and{' '}
          <a href="https://www.jason.af/uses/" target="_blank" rel="noreferrer">
            Jason Lengstorf
          </a>
          .
        </p>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPageInfo(process.env.TOOLBOX_PAGE_ID);
  const software = await getToolboxData(process.env.TOOLBOX_SOFTWARE_DB);
  const hardware = await getToolboxData(process.env.TOOLBOX_HARDWARE_DB);
  const thisSite = await getToolboxData(process.env.TOOLBOX_THIS_SITE_DB);

  return {
    props: {
      toolboxContent: data,
      software,
      hardware,
      thisSite
    },
    revalidate: 1800
  };
};
