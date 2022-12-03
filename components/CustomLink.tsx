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

  let handleFetchImage = async (url) => {
    const res = await fetch(
      `http://localhost:3000/api/link-preview?url=${url}`
    );
    const data = await res.json();
    console.log(data);

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
            className="w-36 h-28 absolute -top-32 left-1/2 transform -translate-x-[4.5rem] translate-y-8 flex items-start justify-center"
            onMouseLeave={handleMouseLeaveImage}
            onMouseEnter={handleMouseEnterImage}
            onFocus={handleMouseEnterImage}
            onBlur={handleMouseLeaveImage}
          >
            {imagePreview ? (
              <img
                className="object-cover object-top h-24 bg-white rounded-md shadow-lg w-44"
                src={`data:image/jpeg;base64, ${imagePreview}`}
                alt={children}
              />
            ) : (
              <span className="flex items-center justify-center h-24 bg-white rounded-md shadow-lg w-44">
                Loading...
              </span>
            )}
          </span>
        </a>
      )}
    </span>
  );
}
