import { Container } from 'layouts/Container';
import Image from 'next/image';
import { Parallax } from '@/components/Parallax';
import { useRouter } from 'next/router';

export default function Projects() {
  return (
    <Container title="Projects - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          Projects
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          A selection of my favorite works.
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-3">
        <div className="col-span-1">
          <h2 className="mt-0">Pomegradient</h2>
          <p>
            Pomegradient is a web-based gradient solutiuon currently in beta
            that allows you to find, save and craft gradients with a creative
            community!
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://www.pomegradient.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit Pomegradient
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight h-[450px]">
              <Parallax>
                <Image
                  className="absolute top-0 left-0"
                  objectFit="fill"
                  src="https://res.cloudinary.com/braydoncoyer/image/upload/v1638225420/pomegradient_ipadpro_vhapql.png"
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1638225420/pomegradient_ipadpro_vhapql.png"
                  width={1978}
                  height={1713}
                  layout="intrinsic"
                  alt={'NgLimeade on an iPad'}
                />
              </Parallax>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Bundle, LLC</h2>
          <p>
            A startup consultant company desired to reach potential clients
            organically through a blog. Working closely with them to understand
            the requirements, I created an industry website showcasing their
            products, and a blog focussed on SEO.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://www.bundleapps.io"
            target="_blank"
            rel="noreferrer"
          >
            Visit Bundle
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight md:h-[450px] h-[350px]">
              <Parallax>
                <Image
                  className="absolute top-5 left-1 md:right-[-340px]"
                  objectFit="fill"
                  src="https://res.cloudinary.com/braydoncoyer/image/upload/v1638221102/mbpro_bundle_site_zg8jbe.png"
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1638221102/mbpro_bundle_site_zg8jbe.png"
                  width={5110}
                  height={3139}
                  layout="intrinsic"
                  alt={'Bundle, LLC on a Macbook Pro'}
                />
              </Parallax>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="mt-0">NgLimeade</h2>
          <p>
            NgLimeade is an Angular Toast Library that aims to get toast
            notifications up and running in less than a minute! No joke! Check
            it out for yourself!
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://www.npmjs.com/package/ng-limeade"
            target="_blank"
            rel="noreferrer"
          >
            Install NgLimeade
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-midnight h-[450px]">
              <Parallax>
                <Image
                  className="absolute top-0 left-[-150px] md:top-[-150px] md:left-[-300px]"
                  objectFit="fill"
                  src="https://res.cloudinary.com/braydoncoyer/image/upload/v1638226232/nglimeade_ipadpro_blliap.png"
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1638226232/nglimeade_ipadpro_blliap.png"
                  width={1201}
                  height={1788}
                  layout="intrinsic"
                  alt={'NgLimeade on an iPad'}
                />
              </Parallax>
            </div>
          </div>
        </div>
        {/* <div className="col-span-1">
          <h2 className="mt-0">The Office API</h2>
          <p>
            A fun side-project originally built with Spring Boot and MonogDb,
            rebuilt with with Node.js, Express, Mongoose and MongoDb. Deployed
            with Heroku.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://www.npmjs.com/package/ng-limeade"
            target="_blank"
            rel="noreferrer"
          >
            Check it out
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5  bg-gray-100 rounded-lg dark:bg-midnight h-[350px] md:h-[450px]">
              <Image
                className="absolute top-12 right-[-100px] md:top-12 md:right-[-300px]"
                objectFit="fill"
                src="https://res.cloudinary.com/braydoncoyer/image/upload/v1638224157/mbpro_officeapi_vsgd9y.png"
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1638224157/mbpro_officeapi_vsgd9y.png"
                width={5239}
                height={2896}
                layout="intrinsic"
                alt={'The Office API'}
              />
            </div>
          </div>
        </div> */}
      </div>
    </Container>
  );
}
