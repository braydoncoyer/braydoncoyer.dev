import Image from 'next/image';
import React from 'react';

export default function CustomLink({ children, href }) {
  let [imagePreview, setImagePreview] = React.useState('');
  let [isHovering, setIsHovering] = React.useState(false);
  let inImagePreview = false;
  let inLink = false;

  let handleMouseEnterImage = () => {
    inImagePreview = true;
    setIsHovering(true);
  };

  let handleMouseLeaveImage = () => {
    inImagePreview = false;
    setIsHovering(inLink);
  };

  let handleMouseEnterLink = () => {
    inLink = true;
    setIsHovering(true);
  };

  let handleMouseLeaveLink = () => {
    inLink = false;
    setIsHovering(inImagePreview);
  };

  let handleFetchImage = async (url: string) => {
    const res = await fetch(
      `http://localhost:3000/api/link-preview?url=${url}`
    );
    const data = await res.json();
    setImagePreview(data.image);
  };

  React.useEffect(() => {
    handleFetchImage(href);

    return () => setImagePreview('');
  }, [href]);

  return (
    <span className="relative z-10 inline-block">
      <a
        href={href}
        className={`${isHovering && 'underline'}`}
        onMouseEnter={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}
        onFocus={handleMouseEnterLink}
        onBlur={handleMouseLeaveLink}
      >
        {children}
      </a>
      {isHovering && (
        <a href={href}>
          <span
            className="w-48 h-42 absolute ease-in-out duration-300 -top-44 left-1/2 transform -translate-x-[6rem] translate-y-8 flex items-start justify-center"
            onMouseLeave={handleMouseLeaveImage}
            onMouseEnter={handleMouseEnterImage}
            onFocus={handleMouseEnterImage}
            onBlur={handleMouseLeaveImage}
          >
            {imagePreview ? (
              <Image
                className="object-cover object-top transition-opacity duration-700 ease-in shadow-xl opacity-100 rounded-xl"
                style={{
                  width: 'auto',
                  height: 'auto',
                  opacity: 0,
                  objectFit: 'cover'
                }}
                src={`data:image/jpeg;base64, ${imagePreview}`}
                width={200}
                height={113}
                alt={children}
              />
            ) : (
              <span className="flex items-center justify-center w-48 bg-white rounded-md shadow-xl h-36 dark:bg-midnight text-slate-900 dark:text-white">
                Loading...
              </span>
            )}
          </span>
        </a>
      )}
    </span>
  );
}
