import React from 'react';

export default function CustomLink({ children, href, linksMetadata }) {
  const metadata = linksMetadata.find((link) => link.href === href);

  if (metadata === undefined) {
    return <a href={href}>{children}</a>;
  }

  return <LinkWithPreview metadata={metadata} linkText={children} />;
}

const LinkWithPreview = ({ linkText, metadata }) => {
  const { title, imgUrl, href } = metadata;

  return (
    <div className="relative inline-block">
      <a className="underline peer" href={href}>
        {linkText}
      </a>
      <div className="whitespace-normal absolute top-10 z-[100] invisible p-4 transition-opacity duration-300 delay-200 opacity-0 w-72 bg-white/[10%] rounded-2xl peer-hover:visible peer-hover:opacity-100 backdrop-blur-lg backdrop-saturate-200 backdrop-brightness-100 border-b border-white/[10%] shadow-xl shadow-slate-900/[20%]">
        {imgUrl ? (
          <>
            <img
              src={imgUrl}
              className="object-cover w-full rounded-xl h-36"
              loading="lazy"
              alt={`A preview picture of ${linkText}`}
            />
            <div className="mt-2">
              <span className="flex flex-wrap items-center text-base leading-tight">
                {title}
              </span>
            </div>
          </>
        ) : (
          <span className="flex flex-wrap items-center text-base leading-tight">
            No preview available
          </span>
        )}
      </div>
    </div>
  );
};
